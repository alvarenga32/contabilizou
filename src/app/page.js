"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Check, 
  ArrowRight, 
  ChevronDown, 
  X, 
  Menu, 
  HelpCircle, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  FileText, 
  Phone, 
  Mail, 
  Building2, 
  CheckCircle2, 
  Star, 
  MapPin, 
  CreditCard, 
  Lock 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.css";

export default function Home() {
  // Estados para as Interações
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [journey, setJourney] = useState("abrir"); // "abrir" | "migrar"
  const [billingPeriod, setBillingPeriod] = useState("annual"); // "monthly" | "annual"
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Estado para o Modal de Contato
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFormStep, setModalFormStep] = useState("input"); // "input" | "loading" | "success"
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    segmento: "prestador",
    faturamento: "25000"
  });

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setModalFormStep("loading");
    
    // Simular envio de lead
    setTimeout(() => {
      setModalFormStep("success");
    }, 1500);
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setModalFormStep("input");
    setFormData({
      nome: "",
      email: "",
      whatsapp: "",
      segmento: "prestador",
      faturamento: "25000"
    });
  };

  const openContactModal = () => {
    setIsModalOpen(true);
  };

  // FAQ mock data
  const faqData = [
    {
      question: "A Contabilizou tem contadores de verdade?",
      answer: "Sim! Somos uma empresa de contabilidade completa regulada pelo CRC (Conselho Regional de Contabilidade). Contamos com uma equipe de centenas de contadores e assessores especialistas focados em garantir que sua empresa esteja 100% regularizada e pagando o mínimo de impostos possível."
    },
    {
      question: "O que é contabilidade online ou contador online?",
      answer: "A contabilidade online é um modelo moderno que utiliza uma plataforma digital para facilitar a troca de documentos e informações entre você e o seu contador. Toda a burocracia (cálculo de impostos, emissão de guias, relatórios contábeis, folha de pagamento) é feita pelos nossos especialistas, enquanto você gerencia tudo de forma transparente pelo nosso site ou app."
    },
    {
      question: "Como funciona a abertura de empresa online grátis?",
      answer: "Nós fazemos todo o processo de abertura do seu CNPJ sem cobrar honorários de serviço! Você realiza o cadastro na nossa plataforma, nós avaliamos seu modelo de negócio, confeccionamos os documentos oficiais de registro e orientamos no pagamento das taxas obrigatórias do governo (Junta Comercial e Prefeitura). Assim que o CNPJ é emitido, sua contabilidade passa a ser gerida por nós."
    },
    {
      question: "A Contabilizou atende o meu tipo de empresa?",
      answer: "Atendemos prestadores de serviços, profissionais de TI, médicos, consultores, agências, e micro e pequenas empresas (enquadradas no Simples Nacional e Lucro Presumido). Também oferecemos serviços específicos para desenquadramento de MEI para ME e migração de contabilidade tradicional."
    },
    {
      question: "O que está incluso na mensalidade da Contabilizou?",
      answer: "Tudo o que a sua empresa precisa para estar em dia com o governo: cálculo de impostos, envio das obrigações acessórias federais/estaduais/municipais, relatórios contábeis oficiais assinados por contador (Balanço Patrimonial, DRE, Balancetes), folha de pagamento dos sócios (pró-labore), atendimento multicanal e uma conta PJ digital integrada sem tarifas."
    },
    {
      question: "Como funciona a integração com a conta PJ digital?",
      answer: "Ao abrir ou migrar sua empresa para a Contabilizou, você ganha acesso opcional à nossa conta PJ integrada. Nela, o extrato bancário se conecta automaticamente com a contabilidade, dispensando o envio manual de relatórios de extrato. Além disso, a conta PJ oferece PIX gratuito ilimitado, emissão de boletos de cobrança e cartão empresarial."
    }
  ];

  // Benefícios mock data
  const benefitsData = [
    {
      icon: <Phone size={24} />,
      title: "Atendimento Multicanal",
      desc: "Você escolhe como quer falar com a gente: por telefone, WhatsApp, chat ou e-mail de forma rápida, sem filas e sem burocracia."
    },
    {
      icon: <CreditCard size={24} />,
      title: "Conta PJ 100% Integrada",
      desc: "Uma conta PJ gratuita e conectada diretamente à contabilidade. Conciliação bancária automática que poupa horas do seu tempo mensal."
    },
    {
      icon: <Activity size={24} />,
      title: "Saúde & Benefícios PJ",
      desc: "Acesso exclusivo a planos de saúde corporativos, consultas com psicólogos, nutricionistas da Starbem e academias TotalPass."
    },
    {
      icon: <FileText size={24} />,
      title: "Impostos & Rotinas em Dia",
      desc: "Cálculo e emissão de guias de impostos, folha de pagamento, pró-labore dos sócios e envio das declarações obrigatórias."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Certificado Digital Grátis",
      desc: "Fornecemos o certificado digital obrigatório de forma totalmente gratuita nos planos anuais para você assinar notas com segurança."
    },
    {
      icon: <Building2 size={24} />,
      title: "Escritório Virtual",
      desc: "Proteja seu endereço residencial registrando sua empresa em nosso endereço fiscal de prestígio, com gestão profissional de correspondências."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Segurança Certificada",
      desc: "Nossos contadores garantem conformidade com a Receita Federal e Prefeitura. Proteção total contra multas por atraso de obrigações."
    },
    {
      icon: <Star size={24} />,
      title: "Parceiro do seu Sucesso",
      desc: "Assessoria dedicada que estuda o faturamento da sua empresa para garantir que você pague o menor imposto legal possível (Fator R)."
    }
  ];

  return (
    <div className={styles.container}>
      
      {/* --- HEADER --- */}
      <header className={styles.header}>
        <div className={styles.navbar}>
          <a href="#" className={styles.logo}>
            Contabilizou<span className={styles.logoDot}>.</span>
          </a>
          
          <nav>
            <ul className={styles.navLinks}>
              <li className={styles.navItem}>
                <span className={styles.navLink}>
                  Serviços <ChevronDown size={14} />
                </span>
                <div className={styles.dropdownMenu}>
                  <div className={styles.dropdownItem}>
                    <Building2 className={styles.dropdownIcon} size={18} />
                    <div>
                      <div className={styles.dropdownTitle}>Abertura de Empresa</div>
                      <div className={styles.dropdownDesc}>Abrimos seu CNPJ sem cobrar honorários contábeis.</div>
                    </div>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Sparkles className={styles.dropdownIcon} size={18} />
                    <div>
                      <div className={styles.dropdownTitle}>Migração de Contador</div>
                      <div className={styles.dropdownDesc}>Trazemos seu CNPJ de forma rápida e regular.</div>
                    </div>
                  </div>
                  <div className={styles.dropdownItem}>
                    <CreditCard className={styles.dropdownIcon} size={18} />
                    <div>
                      <div className={styles.dropdownTitle}>Contabilizou.bank</div>
                      <div className={styles.dropdownDesc}>Conta PJ integrada grátis com PIX e boletos.</div>
                    </div>
                  </div>
                  <div className={styles.dropdownItem}>
                    <Building2 className={styles.dropdownIcon} size={18} />
                    <div>
                      <div className={styles.dropdownTitle}>Escritório Virtual</div>
                      <div className={styles.dropdownDesc}>Endereço fiscal seguro para registrar seu CNPJ.</div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className={styles.navItem}>
                <a href="#planos" className={styles.navLink}>Planos</a>
              </li>
              <li className={styles.navItem}>
                <a href="#como-funciona" className={styles.navLink}>Como Funciona</a>
              </li>
              <li className={styles.navItem}>
                <a href="#faq" className={styles.navLink}>Dúvidas</a>
              </li>
            </ul>
          </nav>
          
          <div className={styles.navActions}>
            <button className={styles.btnText} onClick={openContactModal}>Entrar</button>
            <button className={styles.btnPrimary} onClick={openContactModal}>Abra sua Empresa Grátis</button>
          </div>
          
          <div 
            className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerActive : ""}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <a href="#" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#planos" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Planos</a>
            <a href="#como-funciona" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Como Funciona</a>
            <a href="#faq" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Perguntas Frequentes</a>
            <div className={styles.mobileActions}>
              <button className={styles.btnSecondary} onClick={() => { setMobileMenuOpen(false); openContactModal(); }}>Login</button>
              <button className={styles.btnPrimary} onClick={() => { setMobileMenuOpen(false); openContactModal(); }}>Falar com Especialista</button>
            </div>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <Sparkles size={14} /> Contabilidade do Futuro
            </div>
            <h1 className={styles.heroTitle}>
              Da abertura do CNPJ até a contabilidade completa, <span className={styles.heroTitleHighlight}>conte com a gente</span>.
            </h1>
            <p className={styles.heroSubtitle}>
              Tenha uma contabilidade online completa, prática e muito mais econômica. Regularize sua empresa e pague o mínimo de impostos.
            </p>
            
            <div className={styles.heroFeatures}>
              <div className={styles.heroFeatureItem}>
                <Check className={styles.checkIcon} size={20} />
                <span>Abertura gratuita de CNPJ para serviços</span>
              </div>
              <div className={styles.heroFeatureItem}>
                <Check className={styles.checkIcon} size={20} />
                <span>Assessores especialistas dedicados ao seu negócio</span>
              </div>
              <div className={styles.heroFeatureItem}>
                <Check className={styles.checkIcon} size={20} />
                <span>Atendimento via WhatsApp, telefone ou chat</span>
              </div>
            </div>
            
            <div className={styles.heroActions}>
              <button className={styles.btnPrimary} onClick={openContactModal}>Começar Agora</button>
              <button className={styles.btnSecondary} onClick={openContactModal}>Falar com Consultor</button>
            </div>
          </div>
          
          <div className={styles.heroImageContainer}>
            <div className={styles.heroGlow}></div>
            <Image 
              src="/hero_accountant.png" 
              alt="Contador profissional sorrindo" 
              width={520} 
              height={450} 
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* --- BANNER MEI --- */}
      <section className={styles.meiBanner}>
        <div className={styles.meiContainer}>
          <div className={styles.meiTextContainer}>
            <Building2 className={styles.meiIcon} size={28} />
            <div>
              <div className={styles.meiTitle}>Sua empresa precisa deixar de ser MEI?</div>
              <div className={styles.meiDesc}>Fazemos todo o processo de desenquadramento de MEI para ME de forma simples e segura.</div>
            </div>
          </div>
          <button className={styles.btnCyan} onClick={openContactModal}>Desenquadrar MEI</button>
        </div>
      </section>

      {/* --- SOLUTIONS & BENEFITS SECTION --- */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Escritório de contabilidade online feito para você</h2>
          <p className={styles.sectionSubtitle}>
            Unimos inteligência tecnológica e contadores reais para dar todo o suporte necessário que sua empresa precisa para decolar.
          </p>
        </div>
        
        <div className={styles.benefitsGrid}>
          {benefitsData.map((benefit, idx) => (
            <div key={idx} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                {benefit.icon}
              </div>
              <h3 className={styles.benefitCardTitle}>{benefit.title}</h3>
              <p className={styles.benefitCardDesc}>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- HOW IT WORKS / TOGGLE JOURNEY SECTION --- */}
      <section id="como-funciona" className={styles.sectionAlt}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Veja como é fácil começar</h2>
          <p className={styles.sectionSubtitle}>
            Escolha sua jornada e deixe a burocracia contábil nas mãos da maior plataforma de contabilidade do país.
          </p>
        </div>
        
        <div className={styles.journeyWrapper}>
          <div className={styles.toggleContainer}>
            <div className={styles.toggleSwitch}>
              <button 
                className={`${styles.toggleBtn} ${journey === "abrir" ? styles.toggleBtnActive : ""}`}
                onClick={() => setJourney("abrir")}
              >
                Quero Abrir Empresa (CNPJ Novo)
              </button>
              <button 
                className={`${styles.toggleBtn} ${journey === "migrar" ? styles.toggleBtnActive : ""}`}
                onClick={() => setJourney("migrar")}
              >
                Já Tenho Empresa (Migrar de Contador)
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {journey === "abrir" ? (
              <motion.div 
                key="abrir"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className={styles.stepsGrid}
              >
                <div className={styles.stepConnector}></div>
                
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>1</div>
                  <h3 className={styles.stepCardTitle}>Cadastro Rápido</h3>
                  <p className={styles.stepCardDesc}>Preencha seus dados online em menos de 5 minutos na nossa plataforma.</p>
                </div>
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>2</div>
                  <h3 className={styles.stepCardTitle}>Estudo Tributário</h3>
                  <p className={styles.stepCardDesc}>Avaliamos seu tipo de serviço para garantir o enquadramento mais econômico.</p>
                </div>
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>3</div>
                  <h3 className={styles.stepCardTitle}>Confecção Documental</h3>
                  <p className={styles.stepCardDesc}>Elaboramos o contrato social e te instruímos a pagar as taxas de registro.</p>
                </div>
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>4</div>
                  <h3 className={styles.stepCardTitle}>CNPJ Ativo!</h3>
                  <p className={styles.stepCardDesc}>Nossos especialistas registram sua empresa na Junta Comercial. Tudo pronto!</p>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="migrar"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className={`${styles.stepsGrid} ${styles.stepsGrid3}`}
              >
                <div className={styles.stepConnector}></div>
                
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>1</div>
                  <h3 className={styles.stepCardTitle}>Envio de CNPJ</h3>
                  <p className={styles.stepCardDesc}>Preencha suas informações para que nossa plataforma analise se atendemos seu segmento.</p>
                </div>
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>2</div>
                  <h3 className={styles.stepCardTitle}>Transição Assistida</h3>
                  <p className={styles.stepCardDesc}>Nossa equipe cuida de toda a migração junto ao seu antigo contador sem custos.</p>
                </div>
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>3</div>
                  <h3 className={styles.stepCardTitle}>Sucesso Contabilizou</h3>
                  <p className={styles.stepCardDesc}>Sua contabilidade passa a ser gerida de forma muito mais simples, prática e econômica.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className={styles.journeyCTA}>
            <button className={styles.btnPrimary} onClick={openContactModal}>
              {journey === "abrir" ? "Quero Abrir Minha Empresa Grátis" : "Quero Mudar de Contador Hoje"}
            </button>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="planos" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Planos de acordo com o seu perfil</h2>
          <p className={styles.sectionSubtitle}>
            Transparência total e custos baixos que se ajustam ao faturamento e estágio de crescimento do seu negócio.
          </p>
        </div>

        <div className={styles.billingToggle}>
          <span className={`${styles.billingLabel} ${billingPeriod === "monthly" ? styles.billingActive : ""}`}>Mensal</span>
          <div 
            className={styles.toggleSwitch} 
            style={{ cursor: "pointer" }} 
            onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "annual" : "monthly")}
          >
            <div className={`${styles.toggleBtn} ${billingPeriod === "annual" ? styles.toggleBtnActive : ""}`}>
              Anual <span className={styles.billingDiscountBadge}>20% OFF</span>
            </div>
          </div>
          <span className={`${styles.billingLabel} ${billingPeriod === "annual" ? styles.billingActive : ""}`}>Anual (Com Desconto)</span>
        </div>

        <div className={styles.pricingGrid}>
          {/* Plano Padrão */}
          <div className={styles.planCard}>
            <div className={styles.planHeader}>
              <h3 className={styles.planName}>Padrão</h3>
              <p className={styles.planDesc}>Essencial para quem quer regularizar o negócio com controle na plataforma online.</p>
              
              <div className={styles.planPriceWrapper}>
                <span className={styles.planPriceSub}>Ideal até R$ 25 mil/mês*</span>
                <div className={styles.planPrice}>
                  <span className={styles.planPriceSymbol}>R$</span>
                  <span className={styles.planPriceValue}>
                    {billingPeriod === "annual" ? "156" : "195"}
                  </span>
                  <span className={styles.planPricePeriod}>/mês</span>
                </div>
              </div>
            </div>

            <ul className={styles.planFeaturesList}>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <span>Abertura de empresa sem taxas de honorários</span>
              </li>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <span>Cálculo automático de guias de impostos</span>
              </li>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <span>Envio de obrigações acessórias do CNPJ</span>
              </li>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <span>Atendimento via chat e e-mail (9h às 17h30)</span>
              </li>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <span>Relatórios contábeis oficiais (Balanço, DRE)</span>
              </li>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <span>Conta PJ digital gratuita e conectada</span>
              </li>
              <li className={styles.planFeatureItem + " " + styles.planFeatureItemCrossed}>
                <X className={styles.planFeatureCross} size={16} />
                <span>Certificado digital gratuito incluso</span>
              </li>
              <li className={styles.planFeatureItem + " " + styles.planFeatureItemCrossed}>
                <X className={styles.planFeatureCross} size={16} />
                <span>Assessor e Analista contábil dedicados</span>
              </li>
            </ul>

            <button className={styles.btnSecondary} onClick={openContactModal}>Contratar Padrão</button>
          </div>

          {/* Plano Multibenefícios */}
          <div className={`${styles.planCard} ${styles.planFeatured}`}>
            <div className={styles.planRibbon}>Mais Indicado</div>
            <div className={styles.planHeader}>
              <h3 className={styles.planName}>Multibenefícios</h3>
              <p className={styles.planDesc}>Perfeito para prestadores de serviço que buscam cuidar da saúde e bem-estar do sócio.</p>
              
              <div className={styles.planPriceWrapper}>
                <span className={styles.planPriceSub}>Ideal até R$ 50 mil/mês*</span>
                <div className={styles.planPrice}>
                  <span className={styles.planPriceSymbol}>R$</span>
                  <span className={styles.planPriceValue}>
                    {billingPeriod === "annual" ? "196" : "245"}
                  </span>
                  <span className={styles.planPricePeriod}>/mês</span>
                </div>
              </div>
            </div>

            <ul className={styles.planFeaturesList}>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <strong>Tudo do Plano Padrão incluso</strong>
              </li>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <span>Certificado Digital gratuito incluso no plano</span>
              </li>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <span>Atendimento WhatsApp estendido (9h às 22h)</span>
              </li>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <span>Telemedicina ilimitada grátis (Starbem/Conexa)</span>
              </li>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <span>Plano odontológico e Seguro de vida R$ 50 mil</span>
              </li>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <span>Parcerias e descontos em academias (TotalPass)</span>
              </li>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <span>Pró-labore de até 2 sócios sem cobranças extras</span>
              </li>
              <li className={styles.planFeatureItem + " " + styles.planFeatureItemCrossed}>
                <X className={styles.planFeatureCross} size={16} />
                <span>Assessor e Analista contábil dedicados</span>
              </li>
            </ul>

            <button className={styles.btnPrimary} onClick={openContactModal}>Contratar Multibenefícios</button>
          </div>

          {/* Plano Experts Essencial */}
          <div className={styles.planCard}>
            <div className={styles.planHeader}>
              <h3 className={styles.planName}>Experts Essencial</h3>
              <p className={styles.planDesc}>Atendimento VIP com assessor exclusivo que executa todas as obrigações para você.</p>
              
              <div className={styles.planPriceWrapper}>
                <span className={styles.planPriceSub}>Ideal até R$ 100 mil/mês*</span>
                <div className={styles.planPrice}>
                  <span className={styles.planPriceSymbol}>R$</span>
                  <span className={styles.planPriceValue}>
                    {billingPeriod === "annual" ? "383" : "479"}
                  </span>
                  <span className={styles.planPricePeriod}>/mês</span>
                </div>
              </div>
            </div>

            <ul className={styles.planFeaturesList}>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <strong>Tudo do Plano Multibenefícios incluso</strong>
              </li>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <span>Assessor Contábil e Financeiro Dedicado</span>
              </li>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <span>Atendimento via Telefone direto e prioritário</span>
              </li>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <span>Cálculo e emissão de notas fiscais ilimitadas</span>
              </li>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <span>Gestão completa da folha de pagamento de sócios</span>
              </li>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <span>Planejamento tributário trimestral avançado</span>
              </li>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <span>Suporte em licitações e cadastros corporativos</span>
              </li>
              <li className={styles.planFeatureItem}>
                <Check className={styles.planFeatureCheck} size={16} />
                <span>Parcerias especiais para seguro saúde corporativo</span>
              </li>
            </ul>

            <button className={styles.btnSecondary} onClick={openContactModal}>Contratar Experts</button>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Mais de 100 mil empresas confiam no nosso trabalho</h2>
          <p className={styles.sectionSubtitle}>
            Veja o depoimento de quem já economizou tempo e burocracia gerenciando seu CNPJ com a gente.
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <div>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className={styles.testimonialQuote}>
                &ldquo;Migrei da contabilidade física para a Contabilizou há 8 meses e a economia foi imediata. A conta PJ integrada é fantástica, as guias de impostos chegam sozinhas e o extrato concilia na hora.&rdquo;
              </p>
            </div>
            <div className={styles.testimonialUser}>
              <div className={styles.testimonialAvatar}>RC</div>
              <div>
                <div className={styles.testimonialName}>Rodrigo Campos</div>
                <div className={styles.testimonialRole}>Desenvolvedor PJ • São Paulo/SP</div>
              </div>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <div>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className={styles.testimonialQuote}>
                &ldquo;Todo o processo de abertura da minha clínica médica foi super prático e gratuito. O assessor do plano Experts me acompanha por WhatsApp de forma dedicada. Muito seguro.&rdquo;
              </p>
            </div>
            <div className={styles.testimonialUser}>
              <div className={styles.testimonialAvatar}>MA</div>
              <div>
                <div className={styles.testimonialName}>Dra. Mariana Alencar</div>
                <div className={styles.testimonialRole}>Medicina Preventiva • Curitiba/PR</div>
              </div>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <div>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className={styles.testimonialQuote}>
                &ldquo;Uso o plano Multibenefícios e a telemedicina me salvou muito. Ter consultas médicas virtuais e TotalPass integrado ao plano contábil é uma sacada genial de benefícios que nenhuma contabilidade tradicional tem.&rdquo;
              </p>
            </div>
            <div className={styles.testimonialUser}>
              <div className={styles.testimonialAvatar}>FB</div>
              <div>
                <div className={styles.testimonialName}>Felipe Barbosa</div>
                <div className={styles.testimonialRole}>Consultor de Negócios • Belo Horizonte/MG</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Perguntas Frequentes</h2>
          <p className={styles.sectionSubtitle}>
            Ficou com alguma dúvida? Confira as respostas para as perguntas mais comuns.
          </p>
        </div>

        <div className={styles.faqWrapper}>
          {faqData.map((faq, idx) => (
            <div 
              key={idx} 
              className={`${styles.faqItem} ${activeFaq === idx ? styles.faqItemActive : ""}`}
            >
              <button className={styles.faqQuestion} onClick={() => toggleFaq(idx)}>
                <span>{faq.question}</span>
                <ChevronDown className={styles.faqIcon} size={20} />
              </button>
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGrid}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              A hora de investir no sucesso da sua empresa <span className={styles.ctaTitleHighlight}>é agora</span>!
            </h2>
            <p className={styles.ctaDesc}>
              Abra seu CNPJ gratuitamente ou traga sua empresa atual para a maior contabilidade online do Brasil. Fale com os nossos especialistas e garanta toda a tranquilidade que sua gestão merece.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.btnCyan} onClick={openContactModal}>Começar Agora</button>
              <button 
                className={styles.btnSecondary} 
                style={{ borderColor: "var(--brand-cyan)", color: "var(--brand-cyan)" }}
                onClick={openContactModal}
              >
                Falar com Especialista
              </button>
            </div>
          </div>
          
          <div className={styles.ctaImageContainer}>
            <Image 
              src="/team_accountants.png" 
              alt="Time de contadores da Contabilizou" 
              width={520} 
              height={380} 
              className={styles.ctaImage}
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrandColumn}>
            <a href="#" className={styles.logo}>
              Contabilizou<span className={styles.logoDot}>.</span>
            </a>
            <p className={styles.footerBrandDesc}>
              A contabilidade online descomplicada que cuida do seu CNPJ do início ao fim com especialistas e tecnologia.
            </p>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">F</a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">I</a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">L</a>
              <a href="#" className={styles.socialIcon} aria-label="YouTube">Y</a>
            </div>
          </div>

          <div>
            <h4 className={styles.footerColumnTitle}>Serviços</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#" className={styles.footerLink}>Abertura de Empresa</a></li>
              <li><a href="#" className={styles.footerLink}>Migração de Contador</a></li>
              <li><a href="#" className={styles.footerLink}>Escritório Virtual</a></li>
              <li><a href="#" className={styles.footerLink}>Contabilizou.bank</a></li>
              <li><a href="#" className={styles.footerLink}>Desenquadrar MEI</a></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.footerColumnTitle}>Calculadoras</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#" className={styles.footerLink}>Custo de Abertura</a></li>
              <li><a href="#" className={styles.footerLink}>CLT x PJ</a></li>
              <li><a href="#" className={styles.footerLink}>Cálculo do Fator R</a></li>
              <li><a href="#" className={styles.footerLink}>Tabela Simples Nacional</a></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.footerColumnTitle}>Empresa</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#" className={styles.footerLink}>Quem Somos</a></li>
              <li><a href="#" className={styles.footerLink}>Blog Contabilizou</a></li>
              <li><a href="#" className={styles.footerLink}>Trabalhe Conosco</a></li>
              <li><a href="#" className={styles.footerLink}>Políticas de Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.footerColumnTitle}>Fale Conosco</h4>
            <ul className={styles.footerLinks}>
              <li><span className={styles.footerLink}>0800 591 2345</span></li>
              <li><span className={styles.footerLink}>WhatsApp Comercial</span></li>
              <li><span className={styles.footerLink}>suporte@contabilizou.com.br</span></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>
            &copy; 2026 Contabilizou Contabilidade Digital S.A. Todos os direitos reservados.
          </p>
          <p>
            Avenida Paulista, 1106, Bela Vista, São Paulo/SP - CEP 01310-100 | Registro CRC/SP sob nº 12.345/O.
          </p>
          <p>
            *A isenção de honorários de abertura é condicionada à contratação do serviço contábil anual da Contabilizou. As taxas governamentais da Junta Comercial e Prefeitura não estão inclusas na isenção e devem ser pagas pelo cliente.
          </p>
        </div>
      </footer>

      {/* --- CONTACT MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetModal}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.modalClose} onClick={resetModal}>
                <X size={24} />
              </button>

              {modalFormStep === "input" && (
                <>
                  <h3 className={styles.modalTitle}>Fale com Nossos Especialistas</h3>
                  <p className={styles.modalDesc}>Preencha abaixo e entraremos em contato via WhatsApp ou Ligação para tirar todas as suas dúvidas.</p>
                  
                  <form className={styles.modalForm} onSubmit={handleFormSubmit}>
                    <div className={styles.formGroup}>
                      <label htmlFor="nome" className={styles.formLabel}>Nome Completo</label>
                      <input 
                        type="text" 
                        id="nome" 
                        name="nome" 
                        required 
                        className={styles.formInput} 
                        placeholder="Ex: Kaique Alvarenga"
                        value={formData.nome}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>E-mail Corporativo</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className={styles.formInput} 
                        placeholder="Ex: kaique@suaempresa.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="whatsapp" className={styles.formLabel}>WhatsApp com DDD</label>
                      <input 
                        type="tel" 
                        id="whatsapp" 
                        name="whatsapp" 
                        required 
                        className={styles.formInput} 
                        placeholder="Ex: (11) 99999-9999"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="segmento" className={styles.formLabel}>Segmento da sua Empresa</label>
                      <select 
                        id="segmento" 
                        name="segmento" 
                        className={styles.formSelect}
                        value={formData.segmento}
                        onChange={handleInputChange}
                      >
                        <option value="prestador">Prestação de Serviços (TI, Médicos, Consultoria)</option>
                        <option value="comercio">Comércio / E-commerce</option>
                        <option value="mei">Quero Desenquadrar meu MEI</option>
                        <option value="outros">Outros Segmentos</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="faturamento" className={styles.formLabel}>Faturamento Mensal Estimado</label>
                      <select 
                        id="faturamento" 
                        name="faturamento" 
                        className={styles.formSelect}
                        value={formData.faturamento}
                        onChange={handleInputChange}
                      >
                        <option value="25000">Até R$ 25.000 / mês</option>
                        <option value="50000">De R$ 25.000 a R$ 50.000 / mês</option>
                        <option value="100000">De R$ 50.000 a R$ 100.000 / mês</option>
                        <option value="plus">Acima de R$ 100.000 / mês</option>
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      className={styles.btnPrimary} 
                      style={{ width: "100%", marginTop: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                    >
                      Solicitar Atendimento <ArrowRight size={16} />
                    </button>
                  </form>
                  <p style={{ fontSize: "11px", color: "var(--neutral-500)", marginTop: "16px", display: "flex", items: "center", justifyContent: "center", gap: "4px" }}>
                    <Lock size={12} /> Seus dados estão seguros e criptografados.
                  </p>
                </>
              )}

              {modalFormStep === "loading" && (
                <div className={styles.successMessage} style={{ padding: "40px 0" }}>
                  <div style={{ width: "50px", height: "50px", border: "4px solid var(--neutral-200)", borderTopColor: "var(--brand-blue)", borderRadius: "50%", animation: "pulseSlow 1.5s infinite linear" }}></div>
                  <h3 className={styles.modalTitle} style={{ marginTop: "16px" }}>Enviando Solicitação...</h3>
                  <p className={styles.modalDesc}>Nossos servidores estão processando seus dados de lead.</p>
                </div>
              )}

              {modalFormStep === "success" && (
                <div className={styles.successMessage} style={{ padding: "20px 0" }}>
                  <CheckCircle2 size={64} className={styles.successIcon} />
                  <h3 className={styles.modalTitle}>Solicitação Concluída!</h3>
                  <p className={styles.modalDesc} style={{ marginBottom: "24px" }}>
                    Obrigado, <strong>{formData.nome}</strong>! Nossos assessores contábeis já receberam seu contato e falarão com você pelo WhatsApp <strong>{formData.whatsapp}</strong> em alguns minutos.
                  </p>
                  <button className={styles.btnPrimary} onClick={resetModal} style={{ width: "60%" }}>Fechar Janela</button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
