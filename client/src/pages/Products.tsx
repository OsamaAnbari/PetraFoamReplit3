import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Droplet, 
  Flame, 
  ShieldCheck, 
  Ruler, 
  Ban, 
  Leaf, 
  ArrowRight 
} from "lucide-react";

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">Our Products</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover our comprehensive range of high-quality thermal insulation solutions 
          for all your building and construction needs.
        </p>
      </div>

      <Tabs defaultValue="xps" className="mb-16">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2 mx-auto mb-8">
          <TabsTrigger value="xps">XPS Insulation</TabsTrigger>
          <TabsTrigger value="eps">EPS Insulation</TabsTrigger>
        </TabsList>
        
        {/* XPS Content */}
        <TabsContent value="xps">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-heading font-bold text-2xl text-primary mb-4">Extruded Polystyrene (XPS)</h2>
                  <p className="mb-4 text-gray-700">
                    Extruded Polystyrene (XPS) is a high-performance rigid insulation with exceptional moisture resistance 
                    and compressive strength. Its closed-cell structure provides reliable, long-term thermal performance 
                    even in extreme conditions.
                  </p>
                  <p className="mb-6 text-gray-700">
                    Our XPS boards are manufactured using the latest technology and meet the highest international 
                    standards for quality and performance.
                  </p>
                  
                  <h3 className="font-heading font-semibold text-xl text-primary mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <ShieldCheck className="h-5 w-5 text-secondary mr-2 mt-1" />
                      <div>
                        <p className="font-semibold">High Thermal Efficiency</p>
                        <p className="text-sm text-gray-600">Superior R-value per inch of thickness</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Droplet className="h-5 w-5 text-secondary mr-2 mt-1" />
                      <div>
                        <p className="font-semibold">Moisture Resistant</p>
                        <p className="text-sm text-gray-600">Excellent resistance to water absorption</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Ruler className="h-5 w-5 text-secondary mr-2 mt-1" />
                      <div>
                        <p className="font-semibold">High Compressive Strength</p>
                        <p className="text-sm text-gray-600">Withstands heavy loads without deformation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Ban className="h-5 w-5 text-secondary mr-2 mt-1" />
                      <div>
                        <p className="font-semibold">No Thermal Drift</p>
                        <p className="text-sm text-gray-600">Maintains R-value over time</p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-heading font-semibold text-xl text-primary mb-3">Applications</h3>
                  <ul className="list-disc pl-5 mb-6 text-gray-700">
                    <li>Roof insulation (flat and pitched roofs)</li>
                    <li>Foundation and basement insulation</li>
                    <li>Wall insulation (exterior and interior)</li>
                    <li>Floor insulation (under-slab and suspended floors)</li>
                    <li>Cold storage facilities</li>
                    <li>Infrastructure applications (roads, railways)</li>
                  </ul>
                  
                  <h3 className="font-heading font-semibold text-xl text-primary mb-3">Available Sizes</h3>
                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-200 py-2 px-4 text-left">Thickness (mm)</th>
                          <th className="border border-gray-200 py-2 px-4 text-left">Board Size (mm)</th>
                          <th className="border border-gray-200 py-2 px-4 text-left">Edge Profile</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 py-2 px-4">20-200</td>
                          <td className="border border-gray-200 py-2 px-4">600 x 1250</td>
                          <td className="border border-gray-200 py-2 px-4">Square, Shiplap</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 py-2 px-4">20-200</td>
                          <td className="border border-gray-200 py-2 px-4">600 x 2500</td>
                          <td className="border border-gray-200 py-2 px-4">Square, Shiplap</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-secondary">High R-Value</Badge>
                    <Badge className="bg-secondary">Moisture Resistant</Badge>
                    <Badge className="bg-secondary">High Compressive Strength</Badge>
                    <Badge className="bg-secondary">Durable</Badge>
                    <Badge className="bg-secondary">Easy Installation</Badge>
                  </div>
                  
                  <Button className="w-full md:w-auto">
                    Request Technical Datasheet <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-primary mb-4">XPS Product Gallery</h3>
                  <div className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="XPS Board" 
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1581092921461-39b11a63ae62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="XPS Installation" 
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1565766546929-af019b260a66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="XPS Application" 
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        {/* EPS Content */}
        <TabsContent value="eps">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-heading font-bold text-2xl text-primary mb-4">Expanded Polystyrene (EPS)</h2>
                  <p className="mb-4 text-gray-700">
                    Expanded Polystyrene (EPS) is a lightweight, versatile insulation material that offers an excellent 
                    balance of thermal performance and affordability. It's composed of small, solid beads of polystyrene 
                    that are expanded and fused together.
                  </p>
                  <p className="mb-6 text-gray-700">
                    Our EPS products are manufactured using premium quality raw materials and are designed to provide 
                    reliable insulation for a wide range of applications.
                  </p>
                  
                  <h3 className="font-heading font-semibold text-xl text-primary mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <Leaf className="h-5 w-5 text-secondary mr-2 mt-1" />
                      <div>
                        <p className="font-semibold">Lightweight</p>
                        <p className="text-sm text-gray-600">Easy to handle and install</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Flame className="h-5 w-5 text-secondary mr-2 mt-1" />
                      <div>
                        <p className="font-semibold">Good Thermal Insulation</p>
                        <p className="text-sm text-gray-600">Effective temperature control</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ShieldCheck className="h-5 w-5 text-secondary mr-2 mt-1" />
                      <div>
                        <p className="font-semibold">Cost-Effective</p>
                        <p className="text-sm text-gray-600">Excellent value for performance</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Ban className="h-5 w-5 text-secondary mr-2 mt-1" />
                      <div>
                        <p className="font-semibold">Versatile</p>
                        <p className="text-sm text-gray-600">Suitable for numerous applications</p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-heading font-semibold text-xl text-primary mb-3">Applications</h3>
                  <ul className="list-disc pl-5 mb-6 text-gray-700">
                    <li>Wall insulation (cavity and external walls)</li>
                    <li>Roof insulation</li>
                    <li>Floor insulation</li>
                    <li>External thermal insulation composite systems (ETICS)</li>
                    <li>Packaging</li>
                    <li>Void formation</li>
                  </ul>
                  
                  <h3 className="font-heading font-semibold text-xl text-primary mb-3">Available Sizes</h3>
                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-200 py-2 px-4 text-left">Thickness (mm)</th>
                          <th className="border border-gray-200 py-2 px-4 text-left">Board Size (mm)</th>
                          <th className="border border-gray-200 py-2 px-4 text-left">Density (kg/m³)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 py-2 px-4">10-300</td>
                          <td className="border border-gray-200 py-2 px-4">600 x 1200</td>
                          <td className="border border-gray-200 py-2 px-4">15-35</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 py-2 px-4">10-300</td>
                          <td className="border border-gray-200 py-2 px-4">1000 x 1000</td>
                          <td className="border border-gray-200 py-2 px-4">15-35</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-secondary">Lightweight</Badge>
                    <Badge className="bg-secondary">Cost-Effective</Badge>
                    <Badge className="bg-secondary">Versatile</Badge>
                    <Badge className="bg-secondary">Recyclable</Badge>
                    <Badge className="bg-secondary">Easy to Cut</Badge>
                  </div>
                  
                  <Button className="w-full md:w-auto">
                    Request Technical Datasheet <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-primary mb-4">EPS Product Gallery</h3>
                  <div className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1565766546929-af019b260a66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="EPS Board" 
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1594815550232-e615b7a46f84?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="EPS Installation" 
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1581092160607-ee22bc773ac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="EPS Application" 
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <Separator className="my-16" />
      
      <div className="mb-16">
        <h2 className="font-heading font-bold text-3xl text-primary mb-8 text-center" id="specifications">Technical Specifications</h2>
        <Card>
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 py-3 px-4 text-left">Property</th>
                    <th className="border border-gray-200 py-3 px-4 text-left">XPS</th>
                    <th className="border border-gray-200 py-3 px-4 text-left">EPS</th>
                    <th className="border border-gray-200 py-3 px-4 text-left">Standard</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 py-3 px-4 font-medium">Thermal Conductivity (W/mK)</td>
                    <td className="border border-gray-200 py-3 px-4">0.029 - 0.036</td>
                    <td className="border border-gray-200 py-3 px-4">0.035 - 0.040</td>
                    <td className="border border-gray-200 py-3 px-4">EN 13164/13163</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 py-3 px-4 font-medium">Compressive Strength (kPa)</td>
                    <td className="border border-gray-200 py-3 px-4">200 - 700</td>
                    <td className="border border-gray-200 py-3 px-4">60 - 250</td>
                    <td className="border border-gray-200 py-3 px-4">EN 826</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-3 px-4 font-medium">Water Absorption (vol %)</td>
                    <td className="border border-gray-200 py-3 px-4">≤ 0.7</td>
                    <td className="border border-gray-200 py-3 px-4">≤ 5.0</td>
                    <td className="border border-gray-200 py-3 px-4">EN 12087</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 py-3 px-4 font-medium">Fire Classification</td>
                    <td className="border border-gray-200 py-3 px-4">E</td>
                    <td className="border border-gray-200 py-3 px-4">E</td>
                    <td className="border border-gray-200 py-3 px-4">EN 13501-1</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-3 px-4 font-medium">Density (kg/m³)</td>
                    <td className="border border-gray-200 py-3 px-4">28 - 45</td>
                    <td className="border border-gray-200 py-3 px-4">15 - 35</td>
                    <td className="border border-gray-200 py-3 px-4">EN 1602</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div id="guides">
        <h2 className="font-heading font-bold text-3xl text-primary mb-8 text-center">Installation Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6">
              <h3 className="font-heading font-semibold text-xl text-primary mb-3">Wall Insulation Guide</h3>
              <p className="text-gray-700 mb-4">
                Step-by-step instructions for proper installation of thermal insulation on exterior and interior walls.
              </p>
              <Button variant="outline" className="w-full">
                Download PDF
              </Button>
            </CardContent>
          </Card>
          
          <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6">
              <h3 className="font-heading font-semibold text-xl text-primary mb-3">Roof Insulation Guide</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive guide for installing insulation on flat and pitched roofs for maximum thermal efficiency.
              </p>
              <Button variant="outline" className="w-full">
                Download PDF
              </Button>
            </CardContent>
          </Card>
          
          <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6">
              <h3 className="font-heading font-semibold text-xl text-primary mb-3">Foundation Insulation Guide</h3>
              <p className="text-gray-700 mb-4">
                Technical guide for proper installation of XPS insulation in foundation and below-grade applications.
              </p>
              <Button variant="outline" className="w-full">
                Download PDF
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Products;
