import { type Project } from "@/lib/data";
import { MapPin, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  project: Project;
}

// Function to determine the badge color based on category
const getCategoryStyles = (category: string) => {
  switch (category) {
    case 'commercial':
      return 'bg-blue-600';
    case 'residential':
      return 'bg-amber-500';
    case 'industrial':
      return 'bg-gray-800';
    default:
      return 'bg-blue-600';
  }
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const categoryStyle = getCategoryStyles(project.category);
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 h-full">
      <img 
        src={project.image} 
        alt={project.name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <span className={`inline-block px-3 py-1 text-xs font-semibold ${categoryStyle} text-white rounded-full mb-3`}>
          {t(`projects.categories.${project.category}`)}
        </span>
        <h3 className="text-xl font-bold text-primary mb-3">{project.name}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span className="mr-4 flex items-center">
            <MapPin className="mr-1 text-primary h-4 w-4" /> 
            <span className="font-medium">{t('projects.location')}:</span> {project.location}
          </span>
          <span className="flex items-center">
            <Calendar className="mr-1 text-primary h-4 w-4" /> 
            <span className="font-medium">{t('projects.year')}:</span> {project.year}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
