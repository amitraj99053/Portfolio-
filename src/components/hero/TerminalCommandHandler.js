import { portfolioConfig } from '../../config/portfolioConfig';

export const handleTerminalCommand = (rawInput, { clearTerminal, openInquiryModal }) => {
  const input = rawInput.trim();
  const [cmd, ...args] = input.split(' ');
  const command = cmd.toLowerCase();

  if (!command) {
    return null;
  }

  switch (command) {
    case 'clear':
    case 'cls':
      clearTerminal();
      return null;

    case 'help':
      return {
        type: 'help',
        content: portfolioConfig.terminalHelp,
        raw: input
      };

    case 'about':
      return {
        type: 'about',
        data: {
          name: portfolioConfig.personal.name,
          title: portfolioConfig.personal.title,
          description: portfolioConfig.personal.description,
          location: portfolioConfig.personal.location,
          education: portfolioConfig.education[0]
        },
        raw: input
      };

    case 'skills':
      return {
        type: 'skills',
        categories: portfolioConfig.skills.categories,
        badges: portfolioConfig.skills.badges,
        raw: input
      };

    case 'projects':
      return {
        type: 'projects',
        projects: portfolioConfig.projects,
        raw: input
      };

    case 'experience':
      return {
        type: 'experience',
        experience: portfolioConfig.experience,
        education: portfolioConfig.education,
        certifications: portfolioConfig.certifications,
        raw: input
      };

    case 'contact':
      return {
        type: 'contact',
        data: {
          email: portfolioConfig.personal.email,
          phone: portfolioConfig.personal.phone,
          location: portfolioConfig.personal.location,
          github: portfolioConfig.personal.githubUrl,
          linkedin: portfolioConfig.personal.linkedinUrl,
        },
        raw: input
      };

    case 'resume':
    case 'cv':
      // Trigger download
      if (typeof window !== 'undefined') {
        const link = document.createElement('a');
        link.href = portfolioConfig.personal.resumeUrl;
        link.download = 'Amit_Kumar_Resume.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      return {
        type: 'success',
        message: '>>> Initiating verified resume download (Amit Kumar Resume.pdf)...',
        raw: input
      };

    case 'status':
      return {
        type: 'status',
        systemStatus: portfolioConfig.systemStatus,
        raw: input
      };

    case 'whoami':
      return {
        type: 'text',
        message: 'guest@developer-workstation [ACCESS LEVEL: AUTHORIZED_VIEWER]',
        raw: input
      };

    case 'date':
      return {
        type: 'text',
        message: new Date().toUTCString(),
        raw: input
      };

    case 'sudo':
      return {
        type: 'warning',
        message: 'PERMISSION DENIED: You already possess root guest privileges on this workstation.',
        raw: input
      };

    case 'start-project':
    case 'hire':
      if (openInquiryModal) {
        openInquiryModal();
      }
      return {
        type: 'success',
        message: '>>> Opening Project Inquiry Form. Launching project initialization module...',
        raw: input
      };

    case 'echo':
      return {
        type: 'text',
        message: args.join(' ') || '',
        raw: input
      };

    default:
      return {
        type: 'error',
        message: `Command not recognized: '${command}'. Type 'help' to inspect authorized terminal operations.`,
        raw: input
      };
  }
};
