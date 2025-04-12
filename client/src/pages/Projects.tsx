import { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

type ProjectCategory = 'all' | 'commercial' | 'residential' | 'industrial';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const { t } = useTranslation();

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>{t('projects.title')} - Petra Foam</title>
        <meta name="description" content={t('projects.subtitle')} />
      </Helmet>
      
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">{t('projects.title')}</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>

          {/* Project Categories */}
          <div className="flex flex-wrap justify-center mb-12">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              className={`m-2 ${activeFilter === 'all' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveFilter('all')}
            >
              {t('projects.categories.all')}
            </Button>
            <Button 
              variant={activeFilter === 'commercial' ? 'default' : 'outline'}
              className={`m-2 ${activeFilter === 'commercial' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveFilter('commercial')}
            >
              {t('projects.categories.commercial')}
            </Button>
            <Button 
              variant={activeFilter === 'residential' ? 'default' : 'outline'}
              className={`m-2 ${activeFilter === 'residential' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveFilter('residential')}
            >
              {t('projects.categories.residential')}
            </Button>
            <Button 
              variant={activeFilter === 'industrial' ? 'default' : 'outline'}
              className={`m-2 ${activeFilter === 'industrial' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveFilter('industrial')}
            >
              {t('projects.categories.industrial')}
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-12">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8">
                {t('nav.contact')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
