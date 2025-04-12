import { Helmet } from "react-helmet";
import { timelineItems } from "@/lib/data";
import { Building, Factory, Award, Globe, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const getTimelineIcon = (iconName: string) => {
  switch (iconName) {
    case 'building':
      return <Building className="h-4 w-4" />;
    case 'industry':
      return <Factory className="h-4 w-4" />;
    case 'certificate':
      return <Award className="h-4 w-4" />;
    case 'globe':
      return <Globe className="h-4 w-4" />;
    default:
      return <Building className="h-4 w-4" />;
  }
};

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('about.title')} - Petra Foam</title>
        <meta name="description" content={t('about.subtitle')} />
      </Helmet>
      
      <div className="bg-white section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-6">{t('about.title')}</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Company Overview */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 relative after:content-[''] after:block after:w-[50px] after:h-[3px] after:bg-primary after:mt-4">
                {t('about.leaders')}
              </h2>
              <p className="text-gray-700 mb-6">
                {t('about.description')}
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary mb-4">{t('about.mission.title')}</h3>
                <p className="text-gray-700">
                  {t('about.mission.description')}
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary mb-4">{t('about.vision.title')}</h3>
                <p className="text-gray-700">
                  {t('about.vision.description')}
                </p>
              </div>
            </div>

            {/* Company Image */}
            <div>
              <div className="relative h-80 lg:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Petra Foam Headquarters" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center relative after:content-[''] after:block after:w-[50px] after:h-[3px] after:bg-primary after:mt-4 after:mx-auto">
              {t('about.timeline.title')}
            </h2>
            
            <div className="relative">
              {/* Vertical Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {timelineItems.map((item, index) => (
                  <div key={item.id} className="relative flex md:justify-between items-center flex-col md:flex-row">
                    <div className={`md:w-5/12 mb-6 md:mb-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                      {index % 2 === 0 ? (
                        <>
                          <h3 className="text-xl font-bold text-primary">{t(`about.timeline.items.${item.id}.title`)}</h3>
                          <p className="text-gray-600 mt-2">{t(`about.timeline.items.${item.id}.description`)}</p>
                        </>
                      ) : (
                        <span className="text-xl font-bold text-amber-500">{item.year}</span>
                      )}
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center order-1 md:order-2 z-10">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                        {getTimelineIcon(item.icon)}
                      </div>
                    </div>
                    
                    <div className={`md:w-5/12 mb-6 md:mb-0 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'} order-2 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
                      {index % 2 === 1 ? (
                        <>
                          <h3 className="text-xl font-bold text-primary">{t(`about.timeline.items.${item.id}.title`)}</h3>
                          <p className="text-gray-600 mt-2">{t(`about.timeline.items.${item.id}.description`)}</p>
                        </>
                      ) : (
                        <span className="text-xl font-bold text-amber-500">{item.year}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
