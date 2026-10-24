import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { renderToPipeableStream } from 'react-dom/server';
import { PassThrough } from 'node:stream';
import App from './App';
import About from './components/about/About';
import Project from './components/project/Project';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';

function markup(element) {
  return new Promise((resolve, reject) => {
    const output = new PassThrough();
    let html = '';
    let failed = false;
    output.on('data', chunk => { html += chunk.toString(); });
    output.on('end', () => { if (!failed) resolve(html); });
    const stream = renderToPipeableStream(
      element,
      {
        onAllReady() { stream.pipe(output); },
        onError(error) { failed = true; reject(error); },
      },
    );
  });
}

export async function render(path) {
  let sections;
  if (path === '/') {
    sections = Object.fromEntries(await Promise.all([
      ['about', About], ['projects', Project], ['experience', Experience], ['contact', Contact],
    ].map(async ([name, Component]) => [name, await markup(React.createElement(Component))])));
  }
  return markup(<MemoryRouter initialEntries={[path]}><App sections={sections} /></MemoryRouter>);
}
