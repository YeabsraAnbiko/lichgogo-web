// src/components/Team.tsx
import Image from 'next/image';

interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter';
  url: string;
}

interface TeamProps {
  src: string;
  alt: string;
  name: string;
  role: string;
  detail: string;
  socials: SocialLink[];
}

export default function Team({ src, alt, name, role, detail, socials }: TeamProps) {
  const iconMap = {
    github: 'ri-github-fill',
    linkedin: 'ri-linkedin-fill',
    twitter: 'ri-twitter-fill',
  };

  return (
    <div className="group relative min-w-[280px]">
      <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="aspect-w-3 aspect-h-4">
          <Image
            src={src}
            width={600}
            height={800}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
            <p className="text-gray-300 mb-1">{role}</p>
            <p className="text-gray-200 text-sm mb-4">{detail}</p>
            <div className="flex space-x-3">
              {socials.map(({ platform, url }) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label={platform}
                >
                  <i className={`${iconMap[platform]} text-white`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

