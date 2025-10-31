import React from 'react';
import { Target, FileText, Handshake, Users, Briefcase, TrendingUp, Mail, Phone, MapPin, Linkedin, Icon as LucideIcon } from 'lucide-react';

const iconMap: { [key: string]: LucideIcon } = {
  Target,
  FileText,
  Handshake,
  Users,
  Briefcase,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Linkedin,
};

interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const LucideIconComponent = iconMap[name];

  if (!LucideIconComponent) {
    return null; // Fallback, falls ein Icon-Name nicht gefunden wird
  }

  return <LucideIconComponent className={className} />;
};

export default Icon;
