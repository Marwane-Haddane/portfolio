import { projects, projectIds as ids } from './content';
import { getOptimizedCloudinaryUrl } from './utils/cloudinary';

export const projectsData = [
  ...projects.map(project => ({
    ...project, id: ids[project.slug], desc: project.description,
    longDesc: project.built.join(' ') + ' Contribution: ' + project.role + '. Status: ' + project.status + '. ' + project.limitation,
    domain: project.category === 'Cybersecurity' ? 'cyber' : project.category === 'AI & embedded' ? 'ai' : 'dev',
    type: 'project', image: '/projects/' + project.image + '-480.webp',
    images: [project.image, ...(project.gallery || [])].map(image => '/projects/' + image + '-960.webp'), link: project.live || null,
  })),
{ 
    id: 5, 
    title: 'CS50x', 
    desc: 'Harvard CS50x certification, with full documentation.', 
    longDesc: 'Complete documentation and problem set solutions for Harvard University\'s CS50x (Introduction to Computer Science). The course builds a strong foundation in algorithmic thinking, data structures, memory management, and software design principles. Spans low-level programming in C, database management with SQL, web development with Flask, and scripting in Python.',
    domain: 'ai', 
    type: 'certif', 
    image: getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778031663/CS50x_mbz8os.png', 600), 
    link: 'https://certificates.cs50.io/9b8fa55f-f037-4ffe-95af-85d90b1bb996.pdf', 
    github: 'https://github.com/Marwane-Haddane/cs50.git',
    images: [
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1778031663/CS50x_mbz8os.png', 800)
    ]
  },
{
    id: 8,
    title: 'Google Cybersecurity Professional Certificate',
    desc: 'Professional credential in Cybersecurity from Google covering networks, linux, python, and incident detection.',
    longDesc: 'Completed the Google Cybersecurity Professional Certificate program. This intensive training covers key concepts in defensive cybersecurity including system vulnerabilities, threat detection (SIEM tools like Chronicle and Splunk), network protocol analysis (using Wireshark), scripting with Python, security operations with Linux, and standard incident response protocols.',
    domain: 'cyber',
    type: 'certif',
    image: getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1782276549/google-cybersecurity-professional-certificate-v-2_wxsbfw.png', 600),
    link: 'https://www.credly.com/badges/0a29ef8f-3456-49f6-9efd-95d20de84e39/public_url',
    github: null,
    images: [
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1782276695/Google_Cybersecurity-1_kk39zx.png', 800),
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1782276729/1781312599193_fqtneh.png', 800),
      getOptimizedCloudinaryUrl('https://res.cloudinary.com/dnye0gigw/image/upload/v1782276549/unnamed_cgj8zd.png', 800)
    ]
  }
];

export const featuredProjects = [1, 7, 9].map(id => {
  const project = projectsData.find(item => item.id === id);
  return { link: '/project/' + id + '/', text: project.title, hoverImage: project.image, texts: project.tags.slice(0, 3), images: [project.image] };
});
