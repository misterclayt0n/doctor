
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Phone, Mail, MapPin, Clock, Award, Users, Stethoscope, Calendar, Shield, Star, GraduationCap, BookOpen, Activity } from "lucide-react";
import { DoctoraliaButton } from "@/components/doctoralia-button";
import { GoogleCalendarButton } from "@/components/google-calendar-button";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Header } from "@/components/header";
import { ContactButtons } from "@/components/contact-buttons";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { QuickWhatsAppButton, ContactLinkButton } from "@/components/quick-contact-buttons";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { OfficeGallery } from "@/components/office-gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />

      {/* Header/Navigation */}
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Coluna de texto */}
            <div className="text-center lg:text-left initial-hidden animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-600 mb-6 initial-hidden animate-fade-in-up delay-100">
                Resolva seus problemas de{" "}
                <FlipWords
                  words={["coração", "saúde", "confiança"]}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 font-bold"
                  duration={2500}
                />{" "}
                <span className="font-bold text-slate-800 drop-shadow-lg">
                  com segurança
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                    .
                  </span>
                </span>
              </h2>
              <p className="lg:text-xl leading-relaxed text-slate-500 mb-8 max-w-3xl mx-auto lg:mx-0 initial-hidden animate-fade-in-up delay-200">
                Consultas cardiológicas personalizadas com mais de 30 anos de experiência. 
                Tratamento contínuo e planos adaptados às suas necessidades de saúde cardiovascular.
                <br />
                <br />
                <span className="font-semibold text-slate-700">
                  Especialista em Cardiologia com formação USP e experiência internacional!
                </span>
              </p>
              
              {/* Main CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 initial-hidden animate-fade-in-up delay-300">
                <GoogleCalendarButton />
                <ContactButtons variant="hero" showLabels={true} />
              </div>

              {/* Quick Contact Strip */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-slate-200 shadow-xl hover-lift initial-hidden animate-fade-in-up delay-400">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
                  <div className="flex items-center space-x-2 text-slate-700">
                    <WhatsAppIcon className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="font-medium whitespace-nowrap">(13) 99790-5778</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-700">
                    <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="font-medium whitespace-nowrap">(13) 3221-5375</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-700">
                    <Activity className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="font-medium">Av. Conselheiro Nébias, 756</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna da foto */}
            <div className="flex justify-center lg:justify-end initial-hidden animate-fade-in-right delay-200">
              <div className="relative hover-lift">
                <Image
                  src="/doctor.jpeg"
                  alt="Dr. Rodolfo Leite Arantes"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl object-cover w-80 h-96 md:w-96 md:h-[500px] hover-glow"
                  priority
                />
                {/* Badge de credencial */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-blue-100 hover-lift">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">30+</div>
                    <div className="text-sm text-gray-600">Anos de<br/>Experiência</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tratamento Contínuo - Destaque */}
      <section className="py-16 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Activity className="h-20 w-20 mx-auto mb-6 text-blue-300 animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Tratamento Contínuo Personalizado</h3>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Não apenas uma consulta, mas um acompanhamento completo da sua saúde cardiovascular. 
              Planos de tratamento adaptados ao seu estilo de vida e necessidades específicas.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Activity className="h-10 w-10 mx-auto mb-3 text-blue-300 animate-float" />
                <h4 className="font-semibold mb-2">Acompanhamento Regular</h4>
                <p className="text-slate-200 text-sm">Consultas programadas para monitoramento contínuo</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Activity className="h-10 w-10 mx-auto mb-3 text-blue-300 animate-float" style={{animationDelay: '1s'}} />
                <h4 className="font-semibold mb-2">Plano Personalizado</h4>
                <p className="text-slate-200 text-sm">Tratamento adaptado às suas necessidades específicas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Activity className="h-10 w-10 mx-auto mb-3 text-blue-300 animate-float" style={{animationDelay: '2s'}} />
                <h4 className="font-semibold mb-2">Prevenção Ativa</h4>
                <p className="text-slate-200 text-sm">Foco na prevenção e qualidade de vida</p>
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
            <div className="text-center initial-hidden animate-fade-in-up hover-lift">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div className="text-center initial-hidden animate-fade-in-up delay-100 hover-lift">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">20.000+</div>
              <div className="text-gray-600">Pacientes Atendidos</div>
            </div>
            <div className="text-center initial-hidden animate-fade-in-up delay-200 hover-lift">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                ))}
              </div>
              <div className="text-gray-600">Avaliação no Doctoralia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria do Consultório */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/40 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4 initial-hidden animate-fade-in-up">
              Nosso Consultório
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto initial-hidden animate-fade-in-up delay-100">
              Conheça nosso espaço moderno e acolhedor, projetado para oferecer o máximo conforto 
              e tranquilidade durante sua consulta cardiológica.
            </p>
          </div>

          {/* Carousel horizontal */}
          <div className="relative initial-hidden animate-fade-in-up delay-200">
            <OfficeGallery />
            
            {/* Indicador de scroll */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2 text-gray-500 text-sm">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <span>Deslize para ver mais</span>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          </div>

          {/* Informações do consultório */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover-lift initial-hidden animate-fade-in-up delay-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Activity className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-float" />
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Localização Privilegiada</h4>
                <p className="text-slate-600">
                  Centro de Santos, com fácil acesso e próximo ao transporte público.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover-lift initial-hidden animate-fade-in-up delay-400 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Activity className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-float" style={{animationDelay: '1s'}} />
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Ambiente Seguro</h4>
                <p className="text-slate-600">
                  Protocolos de segurança e higienização seguindo todas as normas sanitárias.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover-lift initial-hidden animate-fade-in-up delay-500 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Activity className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-float" style={{animationDelay: '2s'}} />
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Atendimento Humanizado</h4>
                <p className="text-slate-600">
                  Espaço acolhedor projetado para seu conforto e bem-estar durante a consulta.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/60">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Coluna principal com informações do médico */}
            <div className="lg:col-span-2">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Dr. Rodolfo Leite Arantes</h3>
              
              {/* Card com formação acadêmica */}
              <Card className="mb-8 border-slate-200 bg-white/80 backdrop-blur-sm shadow-lg">
                <CardHeader>
                                      <div className="flex items-center space-x-3 mb-4">
                      <Activity className="h-8 w-8 text-blue-600 animate-pulse" />
                      <CardTitle className="text-2xl text-slate-900">Formação Acadêmica e Experiência</CardTitle>
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
                    de São Paulo-Campus Baixada Santista. Professor de Cardiologia- universidade de Ribeirão Preto- Campus Guaruja
                  </p>
                </CardContent>
              </Card>

              {/* Credenciais e especialidades */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-slate-200 bg-white/80 backdrop-blur-sm shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Activity className="h-6 w-6 text-blue-600 animate-pulse" />
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
                      <span className="text-gray-700">Professor Cardiologia - Unaerp</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 bg-white/80 backdrop-blur-sm shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Activity className="h-6 w-6 text-blue-600 animate-pulse" />
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
              <Card className="border-slate-200 bg-white/90 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center">
                    {/* Foto profissional do doutor */}
                    <div className="w-48 h-60 mx-auto mb-6 rounded-lg overflow-hidden shadow-lg border-2 border-blue-300">
                      <Image
                        src="/doctor2.jpeg"
                        alt="Dr. Rodolfo Leite Arantes"
                        width={192}
                        height={240}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <Activity className="h-6 w-6 text-blue-600 animate-pulse" />
                      <h4 className="text-2xl font-bold text-slate-900">Missão</h4>
                    </div>
                    <p className="text-slate-600 mb-6">
                      Proporcionar cuidados cardiológicos de excelência, combinando conhecimento 
                      científico, tecnologia avançada e atenção humanizada para promover a saúde 
                      cardiovascular dos nossos pacientes.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Card com avaliações e link do Doctoralia */}
              <Card className="border-slate-200 bg-white/90 backdrop-blur-sm shadow-xl">
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
            <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 initial-hidden animate-fade-in-up hover-lift bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 animate-float shadow-lg">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Consulta Cardiológica Completa</CardTitle>
                <CardDescription>
                  Avaliação detalhada da sua saúde cardiovascular com tempo adequado para cada paciente.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 initial-hidden animate-fade-in-up delay-100 hover-lift bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 animate-float shadow-lg" style={{animationDelay: '1s'}}>
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Tratamento de Hipertensão</CardTitle>
                <CardDescription>
                  Especialização em hipertensão arterial com planos de controle personalizados.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 initial-hidden animate-fade-in-up delay-200 hover-lift bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 animate-float shadow-lg" style={{animationDelay: '2s'}}>
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Planos Preventivos</CardTitle>
                <CardDescription>
                  Prevenção de doenças cardiovasculares com acompanhamento contínuo.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 initial-hidden animate-fade-in-up delay-300 hover-lift bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 animate-float shadow-lg" style={{animationDelay: '3s'}}>
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Atendimento Acessível</CardTitle>
                <CardDescription>
                  Consultas com agendamento flexível e múltiplas formas de contato.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 initial-hidden animate-fade-in-up delay-400 hover-lift bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 animate-float shadow-lg" style={{animationDelay: '4s'}}>
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Acompanhamento Contínuo</CardTitle>
                <CardDescription>
                  Monitoramento regular da sua saúde cardiovascular com consultas programadas.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 initial-hidden animate-fade-in-up delay-500 hover-lift bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 animate-float shadow-lg" style={{animationDelay: '5s'}}>
                  <Activity className="h-6 w-6 text-blue-600" />
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

      {/* Blog Educativo - COMENTADO TEMPORARIAMENTE */}
      {/* 
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
      */}

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
                    <div className="text-gray-600 whitespace-nowrap">(13) 99790-5778</div>
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
                    <div className="text-gray-600 whitespace-nowrap">(13) 3221-5375</div>
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
                    <div className="text-gray-600">arantes.dr@gmail.com</div>
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
                    Consultório localizado no prédio Helbor, Santos, com fácil acesso e estacionamento.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.8!2d-46.3344!3d-23.9667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU4JzAwLjEiUyA0NsKwMjAnMDMuOCJX!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização do Consultório Dr. Rodolfo Leite Arantes"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <a
                      href="https://www.google.com/maps/search/Av.+Conselheiro+N%C3%A9bias,+756,+Santos+-+SP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm font-medium">Abrir no Google Maps</span>
                    </a>
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
                <Image
                  src="/cardio_arantes_logo.jpeg"
                  alt="Logo Dr. Rodolfo Leite Arantes"
                  width={48}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
                <h4 className="text-2xl font-bold">Dr. Rodolfo Leite Arantes</h4>
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
                <li><a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Contato</h5>
              <div className="space-y-2 text-gray-400">
                <div className="whitespace-nowrap">(13) 99790-5778</div>
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
