import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Phone, Mail, MapPin, Clock, Award, Users, Stethoscope, Calendar, Shield, ChevronLeft, ChevronRight, Star, GraduationCap } from "lucide-react";
import { DoctoraliaButton } from "@/components/doctoralia-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Dr. Cardios</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
            <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">Serviços</a>
            <a href="#consultorio" className="text-gray-700 hover:text-blue-600 transition-colors">Consultório</a>
            <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Agendar Consulta
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Cuidando do seu <span className="text-blue-600">coração</span> com excelência
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Especialista em cardiologia com mais de 30 anos de experiência, oferecendo 
              atendimento personalizado e tecnologia de ponta para cuidar da sua saúde cardiovascular.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consulta
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                Contato Direto
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">20.000+</div>
              <div className="text-gray-600">Pacientes Atendidos</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-gray-600">Avaliação no Doctoralia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Coluna principal com informações do médico */}
            <div className="lg:col-span-2">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Dr. Rodolfo Leite Arantes</h3>
              
              {/* Card com formação acadêmica */}
              <Card className="mb-8 border-blue-100">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                    <CardTitle className="text-2xl text-gray-900">Formação Acadêmica e Experiência</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Graduado em Medicina pela Faculdade de Ciências Médicas de Santos em 1995. 
                    Possui título de especialista pela Sociedade Brasileira de Cardiologia desde 1999.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Concluiu o Doutorado em Ciências, com concentração em Cardiologia, pelo programa 
                    de Pós-graduação do Departamento de Cardiopneumologia da Faculdade de Medicina da 
                    Universidade de São Paulo. Desenvolveu o projeto de pesquisa na Unidade de 
                    Hipertensão do Instituto do Coração, InCor-HCFMUSP.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Atualmente é professor colaborador de pós-graduação pela Universidade Federal 
                    de São Paulo-Campus Baixada Santista, e Coordenador da residência de Clínica 
                    Médica no Hospital Ana Costa- Santos SP.
                  </p>
                </CardContent>
              </Card>

              {/* Credenciais e especialidades */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-blue-100">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Award className="h-6 w-6 text-blue-600" />
                      <span>Credenciais</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Especialista pela SBC (1999)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Doutor em Cardiologia - USP</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Professor Colaborador - UNIFESP</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-100">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Stethoscope className="h-6 w-6 text-blue-600" />
                      <span>Especialidades</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Heart className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Cardiologia Clínica</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Hipertensão Arterial</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Ergometria</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Coluna lateral com foto e links */}
            <div className="space-y-6">
              <Card className="border-blue-100">
                <CardContent className="p-8">
                  <div className="text-center">
                    {/* Espaço para foto profissional do doutor */}
                    <div className="w-48 h-60 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mx-auto mb-6 flex items-center justify-center border-2 border-blue-300">
                      <div className="text-center">
                        <Users className="h-16 w-16 text-blue-600 mx-auto mb-2" />
                        <span className="text-blue-600 text-sm">Foto do doctor kkk</span>
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Missão</h4>
                    <p className="text-gray-600 mb-6">
                      Proporcionar cuidados cardiológicos de excelência, combinando conhecimento 
                      científico, tecnologia avançada e atenção humanizada para promover a saúde 
                      cardiovascular dos nossos pacientes.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Card com avaliações e link do Doctoralia */}
              <Card className="border-blue-100">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg font-semibold text-gray-900 mb-2">182 Avaliações</p>
                    <p className="text-gray-600 mb-4">Veja o que os pacientes dizem sobre o atendimento</p>
                    <DoctoraliaButton />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços cardiológicos com tecnologia de ponta 
              e atendimento personalizado.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Consulta Cardiológica</CardTitle>
                <CardDescription>
                  Avaliação completa da saúde cardiovascular com exame físico detalhado.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Eletrocardiograma</CardTitle>
                <CardDescription>
                  Exame não invasivo para avaliação da atividade elétrica do coração.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Ecocardiograma</CardTitle>
                <CardDescription>
                  Ultrassom do coração para avaliação detalhada das estruturas cardíacas.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Teste Ergométrico</CardTitle>
                <CardDescription>
                  Avaliação da capacidade física e resposta cardiovascular ao exercício.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Holter 24h</CardTitle>
                <CardDescription>
                  Monitoramento contínuo do ritmo cardíaco durante 24 horas.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Check-up Preventivo</CardTitle>
                <CardDescription>
                  Avaliação completa para prevenção de doenças cardiovasculares.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultório */}
      <section id="consultorio" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Nosso Consultório</h3>
            <p className="text-xl text-gray-600">
              Ambiente moderno e acolhedor, equipado com tecnologia de ponta
            </p>
          </div>

          {/* Carrossel de Imagens do Consultório */}
          <div className="relative">
            <Card className="p-8">
              <div className="relative">
                <div className="flex items-center justify-center h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 border-2 border-blue-300">
                  <div className="text-center">
                    <Heart className="h-20 w-20 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-blue-600 mb-2">Imagens do Consultório</h4>
                    <p className="text-blue-500">Isso aqui vai ser um scroll de imagens</p>
                  </div>
                </div>
                
                {/* Controles do carrossel */}
                <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all">
                  <ChevronLeft className="h-6 w-6 text-blue-600" />
                </button>
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all">
                  <ChevronRight className="h-6 w-6 text-blue-600" />
                </button>

                {/* Indicadores do carrossel */}
                <div className="flex justify-center space-x-2 mt-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
                </div>
              </div>
            </Card>

            {/* Grid de informações sobre o consultório */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Tecnologia Avançada</h4>
                <p className="text-gray-600">Equipamentos de última geração para diagnósticos precisos</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Ambiente Acolhedor</h4>
                <p className="text-gray-600">Espaço pensado para o conforto e bem-estar dos pacientes</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Atendimento Personalizado</h4>
                <p className="text-gray-600">Equipe dedicada e tempo adequado para cada consulta</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h3>
            <p className="text-xl text-gray-600">
              Agende sua consulta e cuide da saúde do seu coração
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 mb-6">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Telefone</div>
                    <div className="text-gray-600">(13) 99999-9999</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">E-mail</div>
                    <div className="text-gray-600">contato@drcardios.com.br</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Endereço</div>
                    <div className="text-gray-600">
                      Av. Conselheiro Nébias, 756<br />
                      Conj. 2007 - Santos/SP
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Horário de Atendimento</div>
                    <div className="text-gray-600">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-8 bg-blue-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">Agende sua Consulta</CardTitle>
                  <CardDescription className="text-blue-100">
                    Entre em contato conosco para agendar sua consulta e cuidar da saúde do seu coração.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                    <Calendar className="mr-2 h-5 w-5" />
                    Agendar Agora
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 mb-4">Localização</CardTitle>
                  <CardDescription>
                    Consultório localizado no centro de Santos, com fácil acesso e estacionamento.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-8 w-8 mx-auto mb-2" />
                      <span className="text-sm">Mapa do Google</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-blue-400" />
                <h4 className="text-2xl font-bold">Dr. Cardios</h4>
              </div>
              <p className="text-gray-400 mb-4">
                Dr. Rodolfo Leite Arantes - Especialista em cardiologia comprometido com a saúde cardiovascular dos nossos pacientes.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Links Rápidos</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#inicio" className="hover:text-blue-400 transition-colors">Início</a></li>
                <li><a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre</a></li>
                <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Serviços</a></li>
                <li><a href="#consultorio" className="hover:text-blue-400 transition-colors">Consultório</a></li>
                <li><a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Contato</h5>
              <div className="space-y-2 text-gray-400">
                <div>(13) 99999-9999</div>
                <div>contato@drcardios.com.br</div>
                <div>Av. Conselheiro Nébias, 756<br />Conj. 2007 - Santos/SP</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dr. Cardios - Dr. Rodolfo Leite Arantes. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
