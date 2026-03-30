import Link from 'next/link';
import { ArrowRight, Check, Eye, BarChart3, MessageSquare, Settings, Database, Lock, HeadphonesIcon, Code, Zap, CheckCircle2, Search, Bot, Sparkles, Shield, Play, Users, Mail } from 'lucide-react';

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-50 pt-20 pb-24 text-center px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="github-badge mb-6">
            OUR SERVICES
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Comprehensive Solutions for Every Business Need
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            From AI-powered reputation management to custom software development, we provide end-to-end solutions that drive measurable results and sustainable growth.
          </p>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {/* Card 1 */}
            <div className="notion-card">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Search & Reputation</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Dominate search results and build unbreakable trust with AI-powered SEO and centralized reputation management.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> AI-Driven Local SEO</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Review Centralization</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Reputation Audits</li>
              </ul>
              <Link href="/services/ai-search" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="notion-card">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Bot className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Intelligent Automation</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Transform tools into active team members with autonomous agents and intelligent workflow orchestration.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Autonomous Sales Agents</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Knowledge Brains (RAG)</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Multi-Agent Workflows</li>
              </ul>
              <Link href="/services/intelligent-automation" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="notion-card">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Software</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Build specialized tools tailored to your unique workflows, from custom AI copilots to mini-ERP systems.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Bespoke AI Integration</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Niche E-commerce Engines</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Operations Efficiency Tools</li>
              </ul>
              <Link href="/services/custom-software" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="notion-card">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Data & Analytics</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Turn chaotic data into your most valuable asset with structured modeling and universal connectors.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Spreadsheet to Engine</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Universal Data Sync</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Data Governance</li>
              </ul>
              <Link href="/services/data-architecture" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 5 */}
            <div className="notion-card">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Digital Marketing</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Deploy a strategic hybrid model where authentic human expertise meets AI efficiency for real connection.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Authentic Video Service</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> AI-Proof Community Mgmt</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="mr-2 h-5 w-5 text-emerald-500 shrink-0" /> Hybrid Email Strategy</li>
              </ul>
              <Link href="/services/digital-marketing" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 1: AI Search */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="github-badge mb-6">
                AI SEARCH & REPUTATION (AISO)
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Dominate Search Results and Build Unbreakable Trust</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We combine AI-powered search optimization with centralized reputation management to ensure customers find you and choose you.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Search className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">AI-Driven Local SEO</h4>
                    <p className="text-slate-600 text-sm mt-1">Analyze search intent and optimize for E-E-A-T to secure high-value local citations.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Review Centralization</h4>
                    <p className="text-slate-600 text-sm mt-1">Unified dashboard pulling reviews from Google, Yelp, Facebook, and industry sites.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Intelligent Profile Management</h4>
                    <p className="text-slate-600 text-sm mt-1">AI-drafted context-aware responses and consistent NAP data across all platforms.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 font-medium text-white hover:bg-blue-700 transition-colors">
                  <ArrowRight className="mr-2 h-4 w-4" /> Start Free Trial
                </Link>
                <Link href="/services/ai-search" className="inline-flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-6 font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
            <div>
              <div className="rounded-2xl bg-slate-100 aspect-square md:aspect-[4/3] flex items-center justify-center mb-8">
                <span className="text-slate-400 font-medium">AISO Dashboard Preview</span>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-8">
                <div>
                  <div className="text-3xl font-mono font-extrabold text-blue-600 mb-1">250%</div>
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Avg. Traffic Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-mono font-extrabold text-blue-600 mb-1">4.7<span className="text-xl">★</span></div>
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Avg. Rating Improvement</div>
                </div>
                <div>
                  <div className="text-3xl font-mono font-extrabold text-blue-600 mb-1">98%</div>
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Response Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Intelligent Automation */}
      <section className="py-24 bg-slate-50 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl bg-slate-200 aspect-square md:aspect-[4/3] flex items-center justify-center mb-8">
                <span className="text-slate-500 font-medium">AI Agent Workflow</span>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-8">
                <div>
                  <div className="text-3xl font-mono font-extrabold text-blue-600 mb-1">20+</div>
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Hours Saved/Week</div>
                </div>
                <div>
                  <div className="text-3xl font-mono font-extrabold text-blue-600 mb-1">99.9%</div>
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-mono font-extrabold text-blue-600 mb-1">500+</div>
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Integrations</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="github-badge mb-6">
                INTELLIGENT AI & AUTOMATION
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Transform Tools into Active Team Members</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We architect autonomous agents and intelligent workflows that perceive context, make decisions, and execute tasks—turning your stack into a proactive engine.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm text-blue-600">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Autonomous Sales Agents</h4>
                    <p className="text-slate-600 text-sm mt-1">Lead-to-Book agents that engage, qualify, and book meetings autonomously.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm text-blue-600">
                    <Database className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Internal Knowledge Brains</h4>
                    <p className="text-slate-600 text-sm mt-1">RAG-powered AI trained on your manuals, SOPs, and project briefs for instant answers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm text-blue-600">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Multi-Agent Orchestration</h4>
                    <p className="text-slate-600 text-sm mt-1">Coordinated crews of specialized agents that hand off tasks to complete full workflows.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 font-medium text-white hover:bg-blue-700 transition-colors">
                  <ArrowRight className="mr-2 h-4 w-4" /> Get Started
                </Link>
                <Link href="/services/intelligent-automation" className="inline-flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-6 font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Custom Software */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="github-badge mb-6">
                CUSTOM SOFTWARE DEVELOPMENT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Build the Specialized Tools Your Business Needs</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We engineer custom web applications and software solutions tailored to your unique workflows—moving beyond restrictive off-the-shelf platforms.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Code className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Bespoke AI Implementation</h4>
                    <p className="text-slate-600 text-sm mt-1">Custom AI interfaces and integrations that work within your specific environment and brand.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Lock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Niche E-commerce Engines</h4>
                    <p className="text-slate-600 text-sm mt-1">Custom storefronts for unique business models, wholesale portals, and complex booking logic.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Settings className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Operations Efficiency (Mini-ERPs)</h4>
                    <p className="text-slate-600 text-sm mt-1">Streamlined, custom systems that eliminate app fatigue and manual data reconciliation.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 font-medium text-white hover:bg-blue-700 transition-colors">
                  <ArrowRight className="mr-2 h-4 w-4" /> Discuss Your Project
                </Link>
                <Link href="/services/custom-software" className="inline-flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-6 font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
            <div>
              <div className="rounded-2xl bg-slate-100 aspect-square md:aspect-[4/3] flex items-center justify-center mb-8">
                <span className="text-slate-400 font-medium">Custom Tool Interface</span>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-8">
                <div>
                  <div className="text-3xl font-mono font-extrabold text-blue-600 mb-1">100+</div>
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-mono font-extrabold text-blue-600 mb-1">95%</div>
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">On-Time Delivery</div>
                </div>
                <div>
                  <div className="text-3xl font-mono font-extrabold text-blue-600 mb-1">4.9/5</div>
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Client Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Data Architecture */}
      <section className="py-24 bg-slate-50 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl bg-slate-200 aspect-square md:aspect-[4/3] flex items-center justify-center mb-8">
                <span className="text-slate-500 font-medium">Data Pipeline Viz</span>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-8">
                <div>
                  <div className="text-3xl font-mono font-extrabold text-blue-600 mb-1">100%</div>
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Data Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-mono font-extrabold text-blue-600 mb-1">10x</div>
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Reporting Speed</div>
                </div>
                <div>
                  <div className="text-3xl font-mono font-extrabold text-blue-600 mb-1">0</div>
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Manual Silos</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="github-badge mb-6">
                DATA ARCHITECTURE & ANALYTICS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Turn Chaotic Data into Your Most Valuable Asset</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We organize, connect, and activate your scattered data—transforming it from a liability into a clear, actionable source of truth.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm text-blue-600">
                    <Database className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Spreadsheet to Engine Migration</h4>
                    <p className="text-slate-600 text-sm mt-1">Migrate core operational data from fragile spreadsheets to efficient, multi-user databases.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm text-blue-600">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Universal Data Connector</h4>
                    <p className="text-slate-600 text-sm mt-1">Build automated, bi-directional pipelines between your CRM, accounting, and e-commerce tools.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm text-blue-600">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Data Cleansing & Governance</h4>
                    <p className="text-slate-600 text-sm mt-1">De-duplicate and standardize historical data while building smart entry forms for future purity.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 font-medium text-white hover:bg-blue-700 transition-colors">
                  <ArrowRight className="mr-2 h-4 w-4" /> Get Data Audit
                </Link>
                <Link href="/services/data-architecture" className="inline-flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-6 font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 5: Digital Marketing */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="github-badge mb-6">
                DIGITAL MARKETING
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Where Human Expertise Meets AI Efficiency</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We deploy a strategic hybrid model: leveraging AI for data-driven scale while injecting irreplaceable human insight and creativity.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Play className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Authentic Storytelling Video</h4>
                    <p className="text-slate-600 text-sm mt-1">Blended production process that captures your personality with human coaching and AI amplification.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">AI-Proof Community Management</h4>
                    <p className="text-slate-600 text-sm mt-1">Human-led engagement strategically guided by AI monitoring and sentiment analysis.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Hybrid Email & Newsletter</h4>
                    <p className="text-slate-600 text-sm mt-1">Personally curated content powered by smart segmentation and send-time optimization.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 font-medium text-white hover:bg-blue-700 transition-colors">
                  <ArrowRight className="mr-2 h-4 w-4" /> Boost Your Marketing
                </Link>
                <Link href="/services/digital-marketing" className="inline-flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-6 font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
            <div>
              <div className="rounded-2xl bg-slate-100 aspect-square md:aspect-[4/3] flex items-center justify-center mb-8">
                <span className="text-slate-400 font-medium">Marketing Performance</span>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-8">
                <div>
                  <div className="text-3xl font-mono font-extrabold text-blue-600 mb-1">5x</div>
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Engagement Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-mono font-extrabold text-blue-600 mb-1">40%</div>
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Open Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-mono font-extrabold text-blue-600 mb-1">3x</div>
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">ROI Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24 bg-slate-50 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="github-badge mb-4">
              FEATURE COMPARISON
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Everything You Need in One Platform</h2>
            <p className="text-lg text-slate-600">Compare our services and find the perfect solution for your business needs.</p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-100">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/50">
                  <th className="py-5 px-6 font-bold text-slate-900 w-1/6">FEATURE</th>
                  <th className="py-5 px-6 font-bold text-slate-900 text-center w-1/6">AI Search</th>
                  <th className="py-5 px-6 font-bold text-slate-900 text-center w-1/6">Automation</th>
                  <th className="py-5 px-6 font-bold text-slate-900 text-center w-1/6">Custom Software</th>
                  <th className="py-5 px-6 font-bold text-slate-900 text-center w-1/6">Data & Analytics</th>
                  <th className="py-5 px-6 font-bold text-slate-900 text-center w-1/6">Digital Marketing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-5 px-6 text-slate-700 font-medium">AI-Powered Optimization</td>
                  <td className="py-5 px-6 text-center"><CheckCircle2 className="inline-block h-5 w-5 text-emerald-500" /></td>
                  <td className="py-5 px-6 text-center"><CheckCircle2 className="inline-block h-5 w-5 text-emerald-500" /></td>
                  <td className="py-5 px-6 text-center"><CheckCircle2 className="inline-block h-5 w-5 text-emerald-500" /></td>
                  <td className="py-5 px-6 text-center"><CheckCircle2 className="inline-block h-5 w-5 text-emerald-500" /></td>
                  <td className="py-5 px-6 text-center"><CheckCircle2 className="inline-block h-5 w-5 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-5 px-6 text-slate-700 font-medium">Custom Workflows</td>
                  <td className="py-5 px-6 text-center"><div className="inline-flex h-6 w-6 rounded-full bg-slate-100 items-center justify-center"><span className="text-slate-400 text-xs font-bold">X</span></div></td>
                  <td className="py-5 px-6 text-center"><CheckCircle2 className="inline-block h-5 w-5 text-emerald-500" /></td>
                  <td className="py-5 px-6 text-center"><CheckCircle2 className="inline-block h-5 w-5 text-emerald-500" /></td>
                  <td className="py-5 px-6 text-center"><CheckCircle2 className="inline-block h-5 w-5 text-emerald-500" /></td>
                  <td className="py-5 px-6 text-center"><div className="inline-flex h-6 w-6 rounded-full bg-slate-100 items-center justify-center"><span className="text-slate-400 text-xs font-bold">X</span></div></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-5 px-6 text-slate-700 font-medium">Real-Time Dashboards</td>
                  <td className="py-5 px-6 text-center"><CheckCircle2 className="inline-block h-5 w-5 text-emerald-500" /></td>
                  <td className="py-5 px-6 text-center"><CheckCircle2 className="inline-block h-5 w-5 text-emerald-500" /></td>
                  <td className="py-5 px-6 text-center"><CheckCircle2 className="inline-block h-5 w-5 text-emerald-500" /></td>
                  <td className="py-5 px-6 text-center"><CheckCircle2 className="inline-block h-5 w-5 text-emerald-500" /></td>
                  <td className="py-5 px-6 text-center"><CheckCircle2 className="inline-block h-5 w-5 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-5 px-6 text-slate-700 font-medium">API & Tool Integration</td>
                  <td className="py-5 px-6 text-center"><CheckCircle2 className="inline-block h-5 w-5 text-emerald-500" /></td>
                  <td className="py-5 px-6 text-center"><CheckCircle2 className="inline-block h-5 w-5 text-emerald-500" /></td>
                  <td className="py-5 px-6 text-center"><CheckCircle2 className="inline-block h-5 w-5 text-emerald-500" /></td>
                  <td className="py-5 px-6 text-center"><CheckCircle2 className="inline-block h-5 w-5 text-emerald-500" /></td>
                  <td className="py-5 px-6 text-center"><CheckCircle2 className="inline-block h-5 w-5 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-5 px-6 text-slate-700 font-medium">Human-in-the-loop</td>
                  <td className="py-5 px-6 text-center"><div className="inline-flex h-6 w-6 rounded-full bg-slate-100 items-center justify-center"><span className="text-slate-400 text-xs font-bold">X</span></div></td>
                  <td className="py-5 px-6 text-center"><div className="inline-flex h-6 w-6 rounded-full bg-slate-100 items-center justify-center"><span className="text-slate-400 text-xs font-bold">X</span></div></td>
                  <td className="py-5 px-6 text-center"><div className="inline-flex h-6 w-6 rounded-full bg-slate-100 items-center justify-center"><span className="text-slate-400 text-xs font-bold">X</span></div></td>
                  <td className="py-5 px-6 text-center"><div className="inline-flex h-6 w-6 rounded-full bg-slate-100 items-center justify-center"><span className="text-slate-400 text-xs font-bold">X</span></div></td>
                  <td className="py-5 px-6 text-center"><CheckCircle2 className="inline-block h-5 w-5 text-emerald-500" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="github-badge mb-4">
              PRICING
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-600">Choose the plan that fits your business. All plans include 24/7 support and free updates.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
              <p className="text-slate-500 text-sm mb-6">Perfect for small businesses getting started</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">$</span>
                <span className="text-5xl font-extrabold text-slate-900">299</span>
                <span className="text-slate-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start text-sm text-slate-700"><Check className="mr-3 h-5 w-5 text-emerald-500 shrink-0" /> Up to 3 locations</li>
                <li className="flex items-start text-sm text-slate-700"><Check className="mr-3 h-5 w-5 text-emerald-500 shrink-0" /> Review monitoring & responses</li>
                <li className="flex items-start text-sm text-slate-700"><Check className="mr-3 h-5 w-5 text-emerald-500 shrink-0" /> Basic SEO optimization</li>
                <li className="flex items-start text-sm text-slate-700"><Check className="mr-3 h-5 w-5 text-emerald-500 shrink-0" /> Email support</li>
              </ul>
              <Link href="/contact" className="block w-full rounded-md border border-slate-200 bg-white py-3 text-center font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                Start Free Trial
              </Link>
            </div>

            {/* Professional */}
            <div className="rounded-2xl border-2 border-blue-600 bg-white p-8 shadow-lg relative flex flex-col transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Professional</h3>
              <p className="text-slate-500 text-sm mb-6">For growing businesses that need more</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">$</span>
                <span className="text-5xl font-extrabold text-slate-900">699</span>
                <span className="text-slate-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start text-sm text-slate-700"><Check className="mr-3 h-5 w-5 text-emerald-500 shrink-0" /> Up to 10 locations</li>
                <li className="flex items-start text-sm text-slate-700"><Check className="mr-3 h-5 w-5 text-emerald-500 shrink-0" /> Advanced automation workflows</li>
                <li className="flex items-start text-sm text-slate-700"><Check className="mr-3 h-5 w-5 text-emerald-500 shrink-0" /> Priority support</li>
                <li className="flex items-start text-sm text-slate-700"><Check className="mr-3 h-5 w-5 text-emerald-500 shrink-0" /> API access</li>
                <li className="flex items-start text-sm text-slate-700"><Check className="mr-3 h-5 w-5 text-emerald-500 shrink-0" /> Custom integrations</li>
              </ul>
              <Link href="/contact" className="block w-full rounded-md bg-blue-600 py-3 text-center font-medium text-white hover:bg-blue-700 transition-colors">
                Start Free Trial
              </Link>
            </div>

            {/* Enterprise */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
              <p className="text-slate-500 text-sm mb-6">For large organizations with custom needs</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">$</span>
                <span className="text-5xl font-extrabold text-slate-900">Custom</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start text-sm text-slate-700"><Check className="mr-3 h-5 w-5 text-emerald-500 shrink-0" /> Unlimited locations</li>
                <li className="flex items-start text-sm text-slate-700"><Check className="mr-3 h-5 w-5 text-emerald-500 shrink-0" /> Custom software development</li>
                <li className="flex items-start text-sm text-slate-700"><Check className="mr-3 h-5 w-5 text-emerald-500 shrink-0" /> Dedicated account manager</li>
                <li className="flex items-start text-sm text-slate-700"><Check className="mr-3 h-5 w-5 text-emerald-500 shrink-0" /> SLA guarantee</li>
                <li className="flex items-start text-sm text-slate-700"><Check className="mr-3 h-5 w-5 text-emerald-500 shrink-0" /> White-label options</li>
              </ul>
              <Link href="/contact" className="block w-full rounded-md border border-slate-200 bg-white py-3 text-center font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="github-badge mb-4">
              FAQ
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know about our services. Can&apos;t find the answer you&apos;re looking for? Contact our support team.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-3">How quickly can I get started?</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Most clients are up and running within 48 hours. Our streamlined onboarding process includes setup assistance, training, and initial configuration to ensure a smooth start.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Is my data secure?</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Yes. We use bank-level encryption, are SOC 2 certified, and comply with GDPR and CCPA regulations. Your data is stored in secure, redundant data centers with 24/7 monitoring.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Can I switch plans later?</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we&apos;ll prorate any billing adjustments.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Do you offer custom development?</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Yes! Our expert development team can build custom features, integrations, or entirely new software solutions tailored to your specific business needs.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 md:col-span-2 lg:col-span-1">
              <h4 className="text-lg font-bold text-slate-900 mb-3">What integrations do you support?</h4>
              <p className="text-slate-600 text-sm leading-relaxed">We integrate with 500+ platforms including major CRMs, marketing tools, payment processors, and business software. If we don&apos;t support your tool, we can build a custom integration.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 md:col-span-2 lg:col-span-1">
              <h4 className="text-lg font-bold text-slate-900 mb-3">What kind of support do you provide?</h4>
              <p className="text-slate-600 text-sm leading-relaxed">All plans include 24/7 email support. Professional and Enterprise plans get priority support with faster response times. Enterprise clients also receive a dedicated account manager.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
