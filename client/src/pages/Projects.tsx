import { useState } from "react";
import { Helmet } from "react-helmet";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

type ProjectCategory = 'all' | 'commercial' | 'residential' | 'industrial';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Projects - Petra Foam Thermal Insulation</title>
        <meta name="description" content="Explore our successful thermal insulation implementations across different sectors including commercial, residential, and industrial projects." />
      </Helmet>
      
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Our Projects</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore some of our successful thermal insulation implementations across different sectors.
            </p>
          </div>

          {/* Project Categories */}
          <div className="flex flex-wrap justify-center mb-12">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              className={`m-2 ${activeFilter === 'all' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveFilter('all')}
            >
              All Projects
            </Button>
            <Button 
              variant={activeFilter === 'commercial' ? 'default' : 'outline'}
              className={`m-2 ${activeFilter === 'commercial' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveFilter('commercial')}
            >
              Commercial
            </Button>
            <Button 
              variant={activeFilter === 'residential' ? 'default' : 'outline'}
              className={`m-2 ${activeFilter === 'residential' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveFilter('residential')}
            >
              Residential
            </Button>
            <Button 
              variant={activeFilter === 'industrial' ? 'default' : 'outline'}
              className={`m-2 ${activeFilter === 'industrial' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveFilter('industrial')}
            >
              Industrial
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
                Discuss Your Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
