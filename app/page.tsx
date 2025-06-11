import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Phone, Mail, MapPin, Clock, Award, Users, Stethoscope, Calendar, Shield, Star, GraduationCap, BookOpen, Activity } from "lucide-react";
import { DoctoraliaButton } from "@/components/doctoralia-button";
import { GoogleCalendarButton } from "@/components/google-calendar-button";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Header } from "@/components/header";
import { ContactButtons } from "@/components/contact-buttons";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { QuickWhatsAppButton, ContactLinkButton } from "@/components/quick-contact-buttons";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />

      {/* Header/Navigation */}
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Resolva seus problemas do <span className="text-blue-600">coração</span> com segurança
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Consultas cardiológicas personalizadas com mais de 30 anos de experiência. 
              Tratamento contínuo e planos adaptados às suas necessidades de saúde cardiovascular.
            </p>
            
            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <GoogleCalendarButton />
              <ContactButtons variant="hero" showLabels={true} />
            </div>

            {/* Quick Contact Strip */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center space-x-2 text-gray-700">
                  <WhatsAppIcon className="h-5 w-5 text-green-500" />
                  <span className="font-medium">(13) 99790-5778</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">(13) 3221-5375</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Av. Conselheiro Nébias, 756</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tratamento Contínuo - Destaque */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Activity className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Tratamento Contínuo Personalizado</h3>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Não apenas uma consulta, mas um acompanhamento completo da sua saúde cardiovascular. 
              Planos de tratamento adaptados ao seu estilo de vida e necessidades específicas.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div className="bg-white/10 rounded-lg p-6">
                <Calendar className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                <h4 className="font-semibold mb-2">Acompanhamento Regular</h4>
                <p className="text-blue-100 text-sm">Consultas programadas para monitoramento contínuo</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Heart className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                <h4 className="font-semibold mb-2">Plano Personalizado</h4>
                <p className="text-blue-100 text-sm">Tratamento adaptado às suas necessidades específicas</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Shield className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                <h4 className="font-semibold mb-2">Prevenção Ativa</h4>
                <p className="text-blue-100 text-sm">Foco na prevenção e qualidade de vida</p>
              </div>
            </div>
            
            {/* Quick Contact in Hero Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuickWhatsAppButton />
              <GoogleCalendarButton />
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
                    <div className="space-y-3">
                      <DoctoraliaButton />
                      <ContactButtons variant="compact" showLabels={false} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tratamentos e Consultas */}
      <section id="tratamentos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Consultas e Tratamentos</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Foco na resolução dos seus problemas cardiovasculares com consultas detalhadas 
              e planos de tratamento personalizados para cada paciente.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Consulta Cardiológica Completa</CardTitle>
                <CardDescription>
                  Avaliação detalhada da sua saúde cardiovascular com tempo adequado para cada paciente.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Tratamento de Hipertensão</CardTitle>
                <CardDescription>
                  Especialização em hipertensão arterial com planos de controle personalizados.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Planos Preventivos</CardTitle>
                <CardDescription>
                  Prevenção de doenças cardiovasculares com acompanhamento contínuo.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Atendimento Acessível</CardTitle>
                <CardDescription>
                  Consultas com agendamento flexível e múltiplas formas de contato.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Acompanhamento Contínuo</CardTitle>
                <CardDescription>
                  Monitoramento regular da sua saúde cardiovascular com consultas programadas.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Orientação Educativa</CardTitle>
                <CardDescription>
                  Educação sobre saúde cardiovascular e mudanças de estilo de vida.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Educativo */}
      <section id="blog" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <BookOpen className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Blog Educativo</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conteúdo educativo sobre saúde cardiovascular, dicas de prevenção e informações 
              atualizadas sobre cardiologia para você e sua família.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Prevenção de Infartos</h4>
                <p className="text-gray-600 mb-4">Como identificar sinais precoces e prevenir problemas cardíacos graves.</p>
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  Ler Artigo
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                  <Activity className="h-12 w-12 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Exercícios para o Coração</h4>
                <p className="text-gray-600 mb-4">Atividades físicas seguras e benéficas para a saúde cardiovascular.</p>
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  Ler Artigo
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                  <Shield className="h-12 w-12 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Alimentação Saudável</h4>
                <p className="text-gray-600 mb-4">Dicas nutricionais para manter o coração saudável e forte.</p>
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  Ler Artigo
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <BookOpen className="mr-2 h-5 w-5" />
              Ver Todos os Artigos
            </Button>
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
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <WhatsAppIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <div className="text-gray-600">(13) 99790-5778</div>
                    <ContactLinkButton 
                      type="whatsapp"
                      className="text-green-600 hover:text-green-700 text-sm font-medium"
                    >
                      Clique para conversar →
                    </ContactLinkButton>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Telefone</div>
                    <div className="text-gray-600">(13) 3221-5375</div>
                    <ContactLinkButton 
                      type="phone"
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Clique para ligar →
                    </ContactLinkButton>
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
                    Múltiplas formas de agendamento para sua comodidade.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <GoogleCalendarButton />
                  <ContactButtons />
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
                <li><a href="#tratamentos" className="hover:text-blue-400 transition-colors">Tratamentos</a></li>
                <li><a href="#blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Contato</h5>
              <div className="space-y-2 text-gray-400">
                <div>(13) 99790-5778</div>
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
