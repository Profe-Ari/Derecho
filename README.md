<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Derecho Procesal - Material de Estudio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #FDFBF8;
            color: #4A4A4A;
        }
        
        .sidebar-link {
            transition: all 0.3s ease;
        }
        
        .sidebar-link:hover {
            transform: translateX(5px);
        }
        
        .sidebar-link.active {
            background-color: #EAE3D9;
            color: #795548;
            font-weight: 600;
        }
        
        .tab-btn {
            transition: all 0.3s ease;
        }
        
        .tab-btn.active {
            border-bottom: 2px solid #A1887F;
            color: #795548;
            font-weight: 600;
        }
        
        .accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-out;
        }
        
        .accordion-content.open {
            max-height: 2000px;
            transition: max-height 0.7s ease-in;
        }
        
        .accordion-icon {
            transition: transform 0.3s ease;
        }
        
        .accordion-header.open .accordion-icon {
            transform: rotate(180deg);
        }
        
        .progress-bar {
            transition: width 0.5s ease;
        }
        
        .card-hover {
            transition: all 0.3s ease;
        }
        
        .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        .gradient-bg-1 {
            background: linear-gradient(135deg, #FF9A8B 0%, #FF6A88 100%);
        }
        
        .gradient-bg-2 {
            background: linear-gradient(135deg, #6A11CB 0%, #2575FC 100%);
        }
        
        .gradient-bg-3 {
            background: linear-gradient(135deg, #F093FB 0%, #F5576C 100%);
        }
        
        .gradient-bg-4 {
            background: linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%);
        }
        
        .gradient-bg-5 {
            background: linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 100%);
        }
        
        .gradient-bg-6 {
            background: linear-gradient(135deg, #FFD26F 0%, #3677FF 100%);
        }
        
        .gradient-bg-7 {
            background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
        }
        
        .gradient-bg-8 {
            background: linear-gradient(135deg, #FC466B 0%, #3F5EFB 100%);
        }
        
        .pulse {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }
        
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            animation: fadeIn 0.3s;
        }
        
        @keyframes fadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
        }
        
        .modal-content {
            background-color: #fff;
            margin: 15% auto;
            padding: 20px;
            border-radius: 10px;
            width: 80%;
            max-width: 500px;
            text-align: center;
            animation: slideIn 0.3s;
        }
        
        @keyframes slideIn {
            from {transform: translateY(-50px); opacity: 0;}
            to {transform: translateY(0); opacity: 1;}
        }
        
        .image-overlay {
            background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7));
        }
        
        .feedback.correct {
            color: #4CAF50;
        }
        
        .feedback.incorrect {
            color: #F44336;
        }
        
        .trophy {
            font-size: 60px;
            color: #FFD700;
            animation: bounce 1s infinite;
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
            40% {transform: translateY(-20px);}
            60% {transform: translateY(-10px);}
        }
    </style>
</head>
<body>
    <!-- Barra de Progreso -->
    <div class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div class="container mx-auto px-4 py-2">
            <div class="flex justify-between items-center">
                <span class="text-sm font-medium">Tu Progreso</span>
                <span class="text-sm font-medium" id="progress-text">0%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="progress-bar bg-[#795548] h-2.5 rounded-full" style="width: 0%" id="progress-bar"></div>
            </div>
        </div>
    </div>

    <div class="flex h-screen pt-12">
        <!-- Barra Lateral -->
        <aside id="sidebar" class="w-64 bg-[#F5F1EB] p-4 overflow-y-auto transition-transform -translate-x-full md:translate-x-0 fixed md:relative h-full z-40">
            <h1 class="text-xl font-bold text-[#795548] mb-6">Derecho Procesal</h1>
            <nav>
                <ul>
                    <li><a href="#" class="sidebar-link block p-3 rounded-lg mb-2 text-sm font-medium" data-target="tema-1" style="background: linear-gradient(135deg, #FF9A8B 0%, #FF6A88 100%); color: white;">TEMA I: El Derecho Procesal</a></li>
                    <li><a href="#" class="sidebar-link block p-3 rounded-lg mb-2 text-sm font-medium" data-target="tema-2" style="background: linear-gradient(135deg, #6A11CB 0%, #2575FC 100%); color: white;">TEMA II: La Jurisdicción</a></li>
                    <li><a href="#" class="sidebar-link block p-3 rounded-lg mb-2 text-sm font-medium" data-target="tema-3" style="background: linear-gradient(135deg, #F093FB 0%, #F5576C 100%); color: white;">TEMA III: La Competencia</a></li>
                    <li><a href="#" class="sidebar-link block p-3 rounded-lg mb-2 text-sm font-medium" data-target="tema-4" style="background: linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%); color: white;">TEMA IV: La Acción</a></li>
                    <li><a href="#" class="sidebar-link block p-3 rounded-lg mb-2 text-sm font-medium" data-target="tema-5" style="background: linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 100%); color: white;">TEMA V: El Proceso</a></li>
                    <li><a href="#" class="sidebar-link block p-3 rounded-lg mb-2 text-sm font-medium" data-target="tema-6" style="background: linear-gradient(135deg, #FFD26F 0%, #3677FF 100%); color: white;">TEMA VI: Sujetos Procesales</a></li>
                    <li><a href="#" class="sidebar-link block p-3 rounded-lg mb-2 text-sm font-medium" data-target="tema-7" style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white;">TEMA VII: Actos Procesales</a></li>
                    <li><a href="#" class="sidebar-link block p-3 rounded-lg mb-2 text-sm font-medium" data-target="tema-8" style="background: linear-gradient(135deg, #FC466B 0%, #3F5EFB 100%); color: white;">TEMA VIII: Principios del Proceso</a></li>
                </ul>
            </nav>
            <div class="teacher-info mt-auto bg-[#A1887F] text-white p-4 rounded-lg">
                <p class="font-bold text-sm">MSc Arianda Salazar Boniche</p>
                <p class="text-xs">Docente</p>
            </div>
        </aside>

        <!-- Contenido Principal -->
        <main class="flex-1 p-4 md:p-8 overflow-y-auto">
            <button id="menu-toggle" class="md:hidden mb-4 p-2 rounded-md bg-[#EAE3D9] text-[#795548]">
                <i class="fas fa-bars"></i>
            </button>
            
            <div id="content-area">
                <!-- TEMA I: El Derecho Procesal -->
                <section id="tema-1" class="content-section">
                    <h2 class="text-3xl font-bold text-[#795548] mb-2">TEMA I: El Derecho Procesal</h2>
                    <p class="mb-6 text-gray-600">El derecho procesal es la rama del derecho que regula la forma en que se deben llevar a cabo los procedimientos legales, asegurando justicia y orden en el sistema judicial.</p>
                    
                    <!-- Accordion Item 1.1: Concepto de Derecho Procesal -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-1-1">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">1. Concepto de Derecho Procesal</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-1-1" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-1-1-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-1-1-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-1-1-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-1-1-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-1-1-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Derecho Procesal" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">El <strong>concepto de derecho procesal</strong> abarca un conjunto de normas que regulan cómo se deben llevar a cabo los procedimientos legales, asegurando justicia y orden en el sistema judicial.</p>
                                        
                                        <h4 class="font-semibold mb-2">Definición Formal</h4>
                                        <p class="text-sm mb-4">El derecho procesal es el conjunto de normas jurídicas que regulan la actividad de los tribunales y los procedimientos seguidos ante ellos, con el fin de garantizar la aplicación correcta del derecho de fondo y la tutela efectiva de los derechos.</p>
                                        
                                        <h4 class="font-semibold mb-2">Importancia en el Sistema Jurídico</h4>
                                        <p class="text-sm mb-4">El derecho procesal establece el marco dentro del cual se aplican las leyes sustantivas, asegurando su correcta implementación. Sin un proceso adecuado, los derechos sustantivos pueden volverse ineficaces, lo que puede llevar a injusticias.</p>
                                        
                                        <h4 class="font-semibold mb-2">Objeto del Derecho Procesal</h4>
                                        <p class="text-sm mb-4">El objeto del derecho procesal es garantizar la resolución de conflictos de manera justa y eficiente, proteger los derechos de las partes y asegurar el debido proceso en todas las etapas del juicio.</p>
                                        
                                        <h4 class="font-semibold mb-2">Características del Derecho Procesal</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Naturaleza Instrumental:</strong> Actúa como herramienta para alcanzar la justicia.</li>
                                            <li><strong>Carácter Público:</strong> Los procesos son accesibles a todos y se llevan a cabo de manera transparente.</li>
                                            <li><strong>Principios de Defensa e Igualdad:</strong> Garantizan que todas las partes tengan el derecho a la defensa y a ser tratadas con igualdad ante la ley.</li>
                                            <li><strong>Carácter Dinámico:</strong> Se adapta a las necesidades sociales y cambios en la sociedad.</li>
                                        </ul>
                                    </div>
                                    <div id="tab-1-1-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: Resolución de Conflicto Contractual</p>
                                                <p class="text-sm mt-2">Dos empresas entran en un litigio contractual por incumplimiento de un acuerdo de suministro. El derecho procesal establece los pasos que deben seguir: presentación de demanda, contestación, etapa probatoria, audiencia de conciliación y finalmente, sentencia. Este proceso garantiza que ambas partes puedan presentar su caso y que el juez resuelva basándose en la ley y las pruebas presentadas.</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Protección de Derechos Fundamentales</p>
                                                <p class="text-sm mt-2">Un ciudadano considera que sus derechos fundamentales han sido violados por una autoridad pública. Interpone un recurso de amparo, un procedimiento especial del derecho procesal constitucional que garantiza una protección rápida y efectiva. Este proceso se rige por normas específicas que aseguran una tutela judicial efectiva y el acceso a la justicia sin dilaciones indebidas.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Proceso Penal</p>
                                                <p class="text-sm mt-2">Una persona es acusada de un delito. El derecho procesal penal establece un proceso acusatorio donde se garantizan los derechos del imputado: presunción de inocencia, derecho a defensa, derecho a un juicio público y oral, y derecho a ser juzgado por un tribunal imparcial. Este proceso busca establecer la verdad material sobre los hechos y aplicar la sanción correspondiente si se comprueba la culpabilidad.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Proceso Administrativo</p>
                                                <p class="text-sm mt-2">Un ciudadano impugna una resolución administrativa que le niega un permiso de construcción. El derecho procesal administrativo establece un procedimiento especial que permite controlar la legalidad de los actos de la administración pública. Este proceso garantiza que las decisiones administrativas se ajusten a la ley y protegen los derechos de los ciudadanos frente a posibles abusos de poder.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-1-1-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Constitución Política de Costa Rica:</strong></p>
                                            <p>Artículo 41: Derecho a la justicia</p>
                                            <p>Artículo 47: Debido proceso legal</p>
                                            <p><br><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 1: Principios generales del proceso civil</p>
                                            <p>Artículo 2: Principios procesales</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 1: Principio de juicio previo</p>
                                            <p>Artículo 3: Principio de legalidad</p>
                                            <p><br><strong>Ley de Jurisdicción Constitucional:</strong></p>
                                            <p>Artículo 1: Recurso de amparo</p>
                                        </div>
                                    </div>
                                    <div id="tab-1-1-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Qué define el derecho procesal?</p>
                                                <label><input type="radio" name="q1" value="a"> A) Las normas que regulan los contratos</label>
                                                <label><input type="radio" name="q1" value="b"> B) Las normas que regulan los procedimientos judiciales</label>
                                                <label><input type="radio" name="q1" value="c"> C) Las normas que regulan la propiedad</label>
                                                <div class="feedback" data-question="q1"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿Cuál es una característica principal del derecho procesal?</p>
                                                <label><input type="radio" name="q2" value="a"> A) Carácter privado</label>
                                                <label><input type="radio" name="q2" value="b"> B) Naturaleza instrumental</label>
                                                <label><input type="radio" name="q2" value="c"> C) Estaticidad</label>
                                                <div class="feedback" data-question="q2"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿Qué garantiza el debido proceso?</p>
                                                <label><input type="radio" name="q3" value="a"> A) Solo la rapidez del juicio</label>
                                                <label><input type="radio" name="q3" value="b"> B) La defensa y la igualdad procesal</label>
                                                <label><input type="radio" name="q3" value="c"> C) El anonimato de las partes</label>
                                                <div class="feedback" data-question="q3"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿Cuál es el objeto principal del derecho procesal?</p>
                                                <label><input type="radio" name="q4" value="a"> A) Regular la propiedad privada</label>
                                                <label><input type="radio" name="q4" value="b"> B) Garantizar la resolución justa de conflictos</label>
                                                <label><input type="radio" name="q4" value="c"> C) Regular el comercio internacional</label>
                                                <div class="feedback" data-question="q4"></div>
                                            </div>
                                            <button onclick="checkAnswers('q1', 'q2', 'q3', 'q4')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Accordion Item 1.2: Características del Derecho Procesal -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-1-2">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">2. Características del Derecho Procesal</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-1-2" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-1-2-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-1-2-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-1-2-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-1-2-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-1-2-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Características del Derecho Procesal" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">Las <strong>características del derecho procesal</strong> son los atributos distintivos que definen esta rama del derecho y la diferencian de otras ramas jurídicas.</p>
                                        
                                        <h4 class="font-semibold mb-2">Características Generales</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Naturaleza General:</strong> Se aplica a una variedad de casos, garantizando un marco jurídico consistente para todos los procesos legales.</li>
                                            <li><strong>Carácter Público:</strong> Los procesos son accesibles a todos y se llevan a cabo de manera transparente.</li>
                                            <li><strong>Principios de Defensa e Igualdad:</strong> Garantizan que todas las partes tengan el derecho a la defensa y a ser tratadas con igualdad ante la ley.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Características Específicas</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Naturaleza Instrumental:</strong> Actúa como herramienta para alcanzar la justicia, facilitando el proceso judicial y la resolución de conflictos.</li>
                                            <li><strong>Carácter Dinámico:</strong> Se adapta a las necesidades sociales y cambios en la sociedad, evolucionando con el tiempo.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Relación con Otras Ramas del Derecho</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Interconexión con el Derecho Civil:</strong> Se aplica en el contexto del derecho civil, facilitando los procedimientos legales en disputas civiles.</li>
                                            <li><strong>Relación con el Derecho Penal:</strong> Determina cómo se aplican las leyes penales y asegura el debido proceso en los juicios criminales.</li>
                                            <li><strong>Vínculo con el Derecho Administrativo:</strong> Regula los procedimientos en los que se involucra el estado y sus entidades en la administración pública.</li>
                                        </ul>
                                    </div>
                                    <div id="tab-1-2-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: Carácter Público en un Juicio Oral</p>
                                                <p class="text-sm mt-2">En un juicio penal por corrupción, la audiencia es pública y puede ser transmitida en vivo por medios de comunicación. Cualquier persona puede asistir, lo que refleja el carácter público del derecho procesal penal. Esto garantiza la transparencia y el control social sobre la administración de justicia.</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Naturaleza Instrumental en un Proceso Civil</p>
                                                <p class="text-sm mt-2">En un proceso civil por incumplimiento de contrato, el procedimiento (derecho procesal) sirve como instrumento para hacer efectivo el derecho sustantivo (el contrato). Las normas procesales establecen cómo las partes deben actuar, qué pruebas pueden presentar y cómo el juez debe resolver, con el fin de hacer valer el derecho contractual.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Carácter Dinámico en el Proceso Constitucional</p>
                                                <p class="text-sm mt-2">El derecho procesal constitucional ha evolucionado para adaptarse a nuevas realidades sociales. Por ejemplo, la introducción de recursos como la acción de inconstitucionalidad o la consulta popular refleja cómo el derecho procesal se adapta para proteger nuevos derechos y mecanismos de participación democrática.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Principio de Igualdad en un Proceso Laboral</p>
                                                <p class="text-sm mt-2">En un proceso laboral, el juez debe garantizar que tanto el trabajador como el empleador tengan iguales oportunidades para presentar pruebas y argumentos. Si una parte está en desventaja económica, el juez puede tomar medidas para corregir el desequilibrio, aplicando el principio de igualdad procesal.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-1-2-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Constitución Política de Costa Rica:</strong></p>
                                            <p>Artículo 33: Igualdad ante la ley</p>
                                            <p>Artículo 39: Debido proceso</p>
                                            <p><br><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 2.1: Principio de igualdad procesal</p>
                                            <p>Artículo 2.2: Tutela judicial efectiva</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 3: Principio de publicidad</p>
                                            <p>Artículo 4: Principio de contradicción</p>
                                            <p><br><strong>Ley de Jurisdicción Constitucional:</strong></p>
                                            <p>Artículo 5: Principio de inmediación</p>
                                        </div>
                                    </div>
                                    <div id="tab-1-2-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Cuál es una característica específica del derecho procesal?</p>
                                                <label><input type="radio" name="q5" value="a"> A) Carácter privado</label>
                                                <label><input type="radio" name="q5" value="b"> B) Naturaleza instrumental</label>
                                                <label><input type="radio" name="q5" value="c"> C) Estaticidad</label>
                                                <div class="feedback" data-question="q5"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿Qué garantiza el carácter público del derecho procesal?</p>
                                                <label><input type="radio" name="q6" value="a"> A) El anonimato de las partes</label>
                                                <label><input type="radio" name="q6" value="b"> B) La transparencia y control social</label>
                                                <label><input type="radio" name="q6" value="c"> C) La rapidez del proceso</label>
                                                <div class="feedback" data-question="q6"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿Cómo se relaciona el derecho procesal con el derecho civil?</p>
                                                <label><input type="radio" name="q7" value="a"> A) Es independiente</label>
                                                <label><input type="radio" name="q7" value="b"> B) Facilita los procedimientos en disputas civiles</label>
                                                <label><input type="radio" name="q7" value="c"> C) Lo reemplaza</label>
                                                <div class="feedback" data-question="q7"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿Qué significa el carácter dinámico del derecho procesal?</p>
                                                <label><input type="radio" name="q8" value="a"> A) Que no cambia nunca</label>
                                                <label><input type="radio" name="q8" value="b"> B) Que se adapta a las necesidades sociales</label>
                                                <label><input type="radio" name="q8" value="c"> C) Que es muy rígido</label>
                                                <div class="feedback" data-question="q8"></div>
                                            </div>
                                            <button onclick="checkAnswers('q5', 'q6', 'q7', 'q8')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Accordion Item 1.3: Objeto del Derecho Procesal -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-1-3">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">3. Objeto del Derecho Procesal</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-1-3" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-1-3-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-1-3-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-1-3-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-1-3-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-1-3-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Objeto del Derecho Procesal" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">El <strong>objeto del derecho procesal</strong> se refiere a los fines y metas que persigue esta rama del derecho, así como a los procesos judiciales que constituyen su ámbito de aplicación.</p>
                                        
                                        <h4 class="font-semibold mb-2">Finalidad y Objetivos</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Resolución de Conflictos:</strong> Asegura que los conflictos se resuelvan de manera justa y eficiente, garantizando la equidad en el sistema judicial.</li>
                                            <li><strong>Protección de Derechos:</strong> Una de las principales metas es proteger los derechos de todas las partes involucradas en un proceso judicial.</li>
                                            <li><strong>Debido Proceso:</strong> Garantiza un debido proceso en todas las etapas del juicio, asegurando que se sigan todos los procedimientos legales adecuados.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Procesos Judiciales como Objeto</h4>
                                        <p class="text-sm mb-4">Los procesos judiciales constituyen el objeto central del derecho procesal. Estos son los procedimientos seguidos ante los tribunales para la resolución de conflictos jurídicos.</p>
                                        
                                        <h4 class="font-semibold mb-2">Importancia del Derecho Procesal</h4>
                                        <p class="text-sm mb-4">El derecho procesal es fundamental para garantizar que se sigan las reglas durante los juicios y se protejan los derechos de todos los involucrados. Establece las pautas que deben seguirse en cada etapa del proceso judicial, asegurando un juicio justo y equitativo.</p>
                                        
                                        <h4 class="font-semibold mb-2">Derechos de las Partes</h4>
                                        <p class="text-sm mb-4">El derecho procesal protege los derechos de las partes del proceso, asegurando un tratamiento justo en el sistema judicial. Entre estos derechos destacan:</p>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Derecho a ser oído:</strong> Garantiza que todas las partes tengan la oportunidad de presentar su caso y argumentos ante el tribunal.</li>
                                            <li><strong>Derecho a la defensa:</strong> Asegura que cada persona tenga la oportunidad de defenderse adecuadamente durante el proceso judicial.</li>
                                            <li><strong>Juez imparcial:</strong> Esencial para garantizar que el juicio se realice de manera justa y equitativa, sin prejuicios.</li>
                                        </ul>
                                    </div>
                                    <div id="tab-1-3-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: Resolución de Conflicto de Familia</p>
                                                <p class="text-sm mt-2">En un proceso de divorcio con hijos menores, el derecho procesal familiar busca resolver el conflicto protegiendo el interés superior de los niños. El juez aplica normas específicas que garantizan que ambos padres puedan expresar sus puntos de vista y que se tomen en consideración las necesidades de los hijos, asegurando un debido proceso y protección de derechos.</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Protección de Derechos en un Proceso Penal</p>
                                                <p class="text-sm mt-2">En un proceso penal, el derecho procesal garantiza que el imputado tenga derecho a un juicio justo, incluyendo el derecho a ser informado de los cargos, a contar con un abogado defensor, a presentar pruebas y a ser juzgado por un tribunal imparcial. Estos derechos protegen al imputado de posibles abusos del poder estatal.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Resolución de Conflictos Comerciales</p>
                                                <p class="text-sm mt-2">En un litigio comercial entre dos empresas, el derecho procesal establece un procedimiento que permite a ambas partes presentar sus argumentos y pruebas. El juez aplica las normas procesales para garantizar un trato igualitario, recepción de pruebas y una resolución basada en el derecho, protegiendo así los derechos de ambas partes y resolviendo el conflicto de manera justa.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Control de Actos Administrativos</p>
                                                <p class="text-sm mt-2">Cuando un ciudadano impugna una resolución administrativa, el derecho procesal administrativo establece un procedimiento que permite controlar la legalidad de los actos de la administración pública. Este proceso garantiza que las decisiones administrativas se ajusten a la ley y protegen los derechos de los ciudadanos frente a posibles abusos de poder, asegurando un debido proceso administrativo.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-1-3-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Constitución Política de Costa Rica:</strong></p>
                                            <p>Artículo 41: Derecho a la justicia</p>
                                            <p>Artículo 47: Debido proceso legal</p>
                                            <p><br><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 2.2: Tutela judicial efectiva</p>
                                            <p>Artículo 2.1: Igualdad procesal</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 7: Derechos del imputado</p>
                                            <p>Artículo 8: Principio de legalidad</p>
                                            <p><br><strong>Ley de Jurisdicción Constitucional:</strong></p>
                                            <p>Artículo 1: Recurso de amparo</p>
                                        </div>
                                    </div>
                                    <div id="tab-1-3-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Cuál es el objetivo principal del derecho procesal?</p>
                                                <label><input type="radio" name="q9" value="a"> A) Regular los contratos</label>
                                                <label><input type="radio" name="q9" value="b"> B) Garantizar la resolución justa de conflictos</label>
                                                <label><input type="radio" name="q9" value="c"> C) Controlar el comercio</label>
                                                <div class="feedback" data-question="q9"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿Qué garantiza el debido proceso?</p>
                                                <label><input type="radio" name="q10" value="a"> A) Solo la rapidez del juicio</label>
                                                <label><input type="radio" name="q10" value="b"> B) La defensa y la igualdad procesal</label>
                                                <label><input type="radio" name="q10" value="c"> C) El anonimato de las partes</label>
                                                <div class="feedback" data-question="q10"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿Qué derecho garantiza que las partes puedan presentar su caso?</p>
                                                <label><input type="radio" name="q11" value="a"> A) Derecho al silencio</label>
                                                <label><input type="radio" name="q11" value="b"> B) Derecho a ser oído</label>
                                                <label><input type="radio" name="q11" value="c"> C) Derecho al anonimato</label>
                                                <div class="feedback" data-question="q11"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿Qué principio asegura que el juez sea imparcial?</p>
                                                <label><input type="radio" name="q12" value="a"> A) Principio de velocidad</label>
                                                <label><input type="radio" name="q12" value="b"> B) Principio de contradicción</label>
                                                <label><input type="radio" name="q12" value="c"> C) Principio de independencia judicial</label>
                                                <div class="feedback" data-question="q12"></div>
                                            </div>
                                            <button onclick="checkAnswers('q9', 'q10', 'q11', 'q12')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- TEMA II: La Jurisdicción -->
                <section id="tema-2" class="content-section hidden">
                    <h2 class="text-3xl font-bold text-[#795548] mb-2">TEMA II: La Jurisdicción</h2>
                    <p class="mb-6 text-gray-600">La jurisdicción es la facultad que tiene el Estado para administrar justicia a través de sus órganos competentes, resolviendo controversias y aplicando el derecho.</p>
                    
                    <!-- Accordion Item 2.1: Concepto de Jurisdicción -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-2-1">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">1. Concepto de Jurisdicción</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-2-1" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-2-1-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-2-1-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-2-1-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-2-1-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-2-1-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Jurisdicción" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">La <strong>jurisdicción</strong> es la facultad que tiene el Estado para administrar justicia a través de sus órganos competentes, resolviendo controversias y aplicando el derecho.</p>
                                        
                                        <h4 class="font-semibold mb-2">Definición Formal</h4>
                                        <p class="text-sm mb-4">La jurisdicción es el poder que el Estado confiere a sus órganos judiciales para conocer y resolver los asuntos sometidos a su decisión, aplicando el ordenamiento jurídico.</p>
                                        
                                        <h4 class="font-semibold mb-2">Elementos de la Jurisdicción</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Competencia:</strong> Facultad de un tribunal para conocer un asunto específico.</li>
                                            <li><strong>Conocimiento:</strong> Actividad de examinar los hechos y el derecho para resolver un litigio.</li>
                                            <li><strong>Decisión:</strong> Resolución que pone fin al proceso.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Clases de Jurisdicción</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Jurisdicción Voluntaria:</strong> Cuando no hay controversia entre las partes.</li>
                                            <li><strong>Jurisdicción Contenciosa:</strong> Cuando existe una controversia entre las partes.</li>
                                            <li><strong>Jurisdicción Civil:</strong> Para resolver conflictos entre particulares o entre estos y el Estado en materias civiles.</li>
                                            <li><strong>Jurisdicción Penal:</strong> Para sancionar conductas tipificadas como delitos.</li>
                                            <li><strong>Jurisdicción Administrativa:</strong> Para controlar la legalidad de los actos de la administración pública.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Principios de la Jurisdicción</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Exclusividad:</strong> Solo los órganos judiciales pueden ejercer la jurisdicción.</li>
                                            <li><strong>Indivisibilidad:</strong> No puede ser delegada ni transferida.</li>
                                            <li><strong>Legalidad:</strong> Debe ejercerse conforme a la ley.</li>
                                            <li><strong>Imparcialidad:</strong> Los jueces deben ser objetivos y no tener interés en el resultado.</li>
                                        </ul>
                                    </div>
                                    <div id="tab-2-1-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: Jurisdicción Civil</p>
                                                <p class="text-sm mt-2">Dos empresas entran en un litigio contractual por incumplimiento de un acuerdo de suministro. El Tribunal Civil tiene jurisdicción para conocer y resolver este conflicto, ya que se trata de una controversia entre particulares en una materia civil. El tribunal aplicará las normas civiles pertinentes para resolver la disputa y determinar si hubo incumplimiento y las consecuencias legales.</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Jurisdicción Penal</p>
                                                <p class="text-sm mt-2">Una persona es acusada de robo. El Tribunal Penal tiene jurisdicción para juzgar este caso, ya que se trata de una conducta tipificada como delito en el Código Penal. El tribunal seguirá el procedimiento penal establecido, garantizando los derechos del imputado y aplicando la sanción correspondiente si se comprueba su culpabilidad.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Jurisdicción Administrativa</p>
                                                <p class="text-sm mt-2">Un ciudadano impugna una resolución municipal que le niega un permiso de construcción. El Tribunal Administrativo tiene jurisdicción para controlar la legalidad de este acto administrativo. El tribunal verificará si la resolución se ajusta a la ley y si se respetaron los derechos del ciudadano, pudiendo anularla si encuentra vicios de legalidad.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Jurisdicción Voluntaria</p>
                                                <p class="text-sm mt-2">Una persona solicita al Registro Civil la inscripción de un nacimiento. No hay controversia entre las partes, ya que todos están de acuerdo con la inscripción. El Registro Civil, como órgano de jurisdicción voluntaria, tiene la facultad de resolver esta solicitud sin necesidad de un proceso contencioso, verificando que se cumplan los requisitos legales para la inscripción.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-2-1-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Constitución Política de Costa Rica:</strong></p>
                                            <p>Artículo 172: Organización judicial</p>
                                            <p>Artículo 173: Tribunales de justicia</p>
                                            <p><br><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 5: Competencia territorial</p>
                                            <p>Artículo 6: Competencia por razón de la materia</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 12: Competencia territorial</p>
                                            <p>Artículo 13: Competencia por razón de la materia</p>
                                            <p><br><strong>Ley de Organización Judicial:</strong></p>
                                            <p>Artículo 1: Estructura judicial</p>
                                            <p>Artículo 2: Jurisdicciones</p>
                                        </div>
                                    </div>
                                    <div id="tab-2-1-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Qué es la jurisdicción?</p>
                                                <label><input type="radio" name="q13" value="a"> A) La facultad de los particulares para resolver conflictos</label>
                                                <label><input type="radio" name="q13" value="b"> B) La facultad del Estado para administrar justicia</label>
                                                <label><input type="radio" name="q13" value="c"> C) La capacidad para contratar</label>
                                                <div class="feedback" data-question="q13"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿Qué principio establece que solo los órganos judiciales pueden ejercer la jurisdicción?</p>
                                                <label><input type="radio" name="q14" value="a"> A) Principio de delegación</label>
                                                <label><input type="radio" name="q14" value="b"> B) Principio de exclusividad</label>
                                                <label><input type="radio" name="q14" value="c"> C) Principio de transferencia</label>
                                                <div class="feedback" data-question="q14"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿Qué tipo de jurisdicción aplica en un caso de robo?</p>
                                                <label><input type="radio" name="q15" value="a"> A) Jurisdicción civil</label>
                                                <label><input type="radio" name="q15" value="b"> B) Jurisdicción penal</label>
                                                <label><input type="radio" name="q15" value="c"> C) Jurisdicción voluntaria</label>
                                                <div class="feedback" data-question="q15"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿Qué elemento de la jurisdicción se refiere a la facultad de un tribunal para conocer un asunto específico?</p>
                                                <label><input type="radio" name="q16" value="a"> A) Conocimiento</label>
                                                <label><input type="radio" name="q16" value="b"> B) Competencia</label>
                                                <label><input type="radio" name="q16" value="c"> C) Decisión</label>
                                                <div class="feedback" data-question="q16"></div>
                                            </div>
                                            <button onclick="checkAnswers('q13', 'q14', 'q15', 'q16')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Accordion Item 2.2: Clases de Jurisdicción -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-2-2">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">2. Clases de Jurisdicción</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-2-2" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-2-2-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-2-2-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-2-2-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-2-2-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-2-2-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Clases de Jurisdicción" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">Las <strong>clases de jurisdicción</strong> son las diferentes categorías en que se puede clasificar el ejercicio del poder judicial según diversos criterios.</p>
                                        
                                        <h4 class="font-semibold mb-2">Clasificación por Naturaleza del Proceso</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Jurisdicción Contenciosa:</strong> Se ejerce cuando existe una controversia entre las partes. El tribunal debe dirimir un conflicto de intereses, decidiendo a favor de una de las partes y en contra de la otra.</li>
                                            <li><strong>Jurisdicción Voluntaria:</strong> Se ejerce cuando no hay controversia entre las partes. El interviene para autorizar actos o declarar situaciones que no son objeto de disputa.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Clasificación por Materia</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Jurisdicción Civil:</strong> Para resolver conflictos entre particulares o entre estos y el Estado en materias civiles.</li>
                                            <li><strong>Jurisdicción Penal:</strong> Para sancionar conductas tipificadas como delitos.</li>
                                            <li><strong>Jurisdicción Administrativa:</strong> Para controlar la legalidad de los actos de la administración pública.</li>
                                            <li><strong>Jurisdicción Constitucional:</strong> Para proteger los derechos fundamentales y controlar la constitucionalidad de las normas.</li>
                                            <li><strong>Jurisdicción Laboral:</strong> Para resolver conflictos entre empleadores y trabajadores.</li>
                                            <li><strong>Jurisdicción Contencioso-Administrativa:</strong> Para impugnar actos administrativos.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Clasificación por Territorio</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Jurisdicción Territorial:</strong> Cada tribunal tiene competencia para conocer los asuntos que se presenten dentro de su territorio.</li>
                                            <li><strong>Jurisdicción Especial:</strong> Para asuntos de especial trascendencia o que involucran a varias jurisdicciones.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Clasificación por Instancia</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Jurisdicción de Primera Instancia:</strong> Tribunales que conocen los asuntos por primera vez.</li>
                                            <li><strong>Jurisdicción de Segunda Instancia:</strong> Tribunales que revisan las decisiones de primera instancia.</li>
                                            <li><strong>Jurisdicción de Casación:</strong> Tribunal supremo que conoce de los recursos extraordinarios.</li>
                                        </ul>
                                    </div>
                                    <div id="tab-2-2-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: Jurisdicción Contenciosa</p>
                                                <p class="text-sm mt-2">En un divorcio contencioso, los cónyuges no llegan a un acuerdo sobre la custodia de los hijos. El Tribunal de Familia ejerce jurisdicción contenciosa para dirimir la controversia, escuchando a ambas partes y decidiendo cuál de las propuestas de custodia es la más conveniente para los menores, basándose en el interés superior del niño.</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Jurisdicción Voluntaria</p>
                                                <p class="text-sm mt-2">Una persona solicita al Registro Civil la inscripción de un testamento. No hay controversia, ya que todos los interesados están de acuerdo con la inscripción. El Registro Civil ejerce jurisdicción voluntaria para verificar que el testamento cumple con los requisitos legales y proceder a su inscripción, sin necesidad de un proceso contencioso.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Jurisdicción Administrativa</p>
                                                <p class="text-sm mt-2">Un ciudadano impugna ante el Tribunal Administrativo una resolución municipal que le niega un permiso de construcción. El tribunal ejerce jurisdicción administrativa para controlar la legalidad del acto administrativo, verificando si se ajusta a la ley y si se respetaron los derechos del ciudadano, pudiendo anular la resolución si encuentra vicios de legalidad.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Jurisdicción Constitucional</p>
                                                <p class="text-sm mt-2">Un ciudadano considera que una ley viola sus derechos fundamentales. Interpone un recurso de inconstitucionalidad ante la Sala Constitucional, que ejerce jurisdicción constitucional para controlar la constitucionalidad de la ley. Si la Sala considera que la ley es contraria a la Constitución, la declara inconstitucional y nula.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-2-2-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Constitución Política de Costa Rica:</strong></p>
                                            <p>Artículo 172: Organización judicial</p>
                                            <p>Artículo 173: Tribunales de justicia</p>
                                            <p><br><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 5: Competencia territorial</p>
                                            <p>Artículo 6: Competencia por razón de la materia</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 12: Competencia territorial</p>
                                            <p>Artículo 13: Competencia por razón de la materia</p>
                                            <p><br><strong>Ley de Organización Judicial:</strong></p>
                                            <p>Artículo 1: Estructura judicial</p>
                                            <p>Artículo 2: Jurisdicciones</p>
                                        </div>
                                    </div>
                                    <div id="tab-2-2-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Qué tipo de jurisdicción se ejerce cuando hay controversia entre las partes?</p>
                                                <label><input type="radio" name="q17" value="a"> A) Jurisdicción voluntaria</label>
                                                <label><input type="radio" name="q17" value="b"> B) Jurisdicción contenciosa</label>
                                                <label><input type="radio" name="q17" value="c"> C) Jurisdicción especial</label>
                                                <div class="feedback" data-question="q17"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿Qué jurisdicción se aplica para resolver conflictos entre empleadores y trabajadores?</p>
                                                <label><input type="radio" name="q18" value="a"> A) Jurisdicción civil</label>
                                                <label><input type="radio" name="q18" value="b"> B) Jurisdicción penal</label>
                                                <label><input type="radio" name="q18" value="c"> C) Jurisdicción laboral</label>
                                                <div class="feedback" data-question="q18"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿Qué tribunal ejerce jurisdicción de casación?</p>
                                                <label><input type="radio" name="q19" value="a"> A) Tribunal de primera instancia</label>
                                                <label><input type="radio" name="q19" value="b"> B) Tribunal de segunda instancia</label>
                                                <label><input type="radio" name="q19" value="c"> C) Tribunal supremo</label>
                                                <div class="feedback" data-question="q19"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿Qué jurisdicción se ejerce para proteger derechos fundamentales?</p>
                                                <label><input type="radio" name="q20" value="a"> A) Jurisdicción civil</label>
                                                <label><input type="radio" name="q20" value="b"> B) Jurisdicción constitucional</label>
                                                <label><input type="radio" name="q20" value="c"> C) Jurisdicción penal</label>
                                                <div class="feedback" data-question="q20"></div>
                                            </div>
                                            <button onclick="checkAnswers('q17', 'q18', 'q19', 'q20')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- TEMA III: La Competencia -->
                <section id="tema-3" class="content-section hidden">
                    <h2 class="text-3xl font-bold text-[#795548] mb-2">TEMA III: La Competencia</h2>
                    <p class="mb-6 text-gray-600">La competencia es la atribución que tiene un tribunal para conocer y resolver un asunto específico, determinada por la ley y los criterios establecidos.</p>
                    
                    <!-- Accordion Item 3.1: Concepto de Competencia -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-3-1">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">1. Concepto de Competencia</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-3-1" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-3-1-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-3-1-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-3-1-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-3-1-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-3-1-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Competencia Judicial" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">La <strong>competencia</strong> es la atribución que tiene un tribunal para conocer y resolver un asunto específico, determinada por la ley y los criterios establecidos.</p>
                                        
                                        <h4 class="font-semibold mb-2">Definición Formal</h4>
                                        <p class="text-sm mb-4">La competencia es la facultad que tiene un tribunal para ejercer la jurisdicción sobre un caso concreto, determinada por diversos criterios legales.</p>
                                        
                                        <h4 class="font-semibold mb-2">Elementos de la Competencia</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Territorial:</strong> Determina qué tribunal puede conocer un caso según su ubicación geográfica.</li>
                                            <li><strong>Por Razón de la Materia:</strong> Determina qué tribunal puede conocer un caso según la naturaleza del asunto.</li>
                                            <li><strong>Por Razón de la Cantidad:</strong> Determina qué tribunal puede conocer un caso según el valor económico del asunto.</li>
                                            <li><strong>Por Razón de la Persona:</strong> Determina qué tribunal puede conocer un caso según las características de las partes.</li>
                                            <li><strong>Por Razón de la Gravedad:</strong> Determina qué tribunal puede conocer un caso según la gravedad del hecho.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Principios de la Competencia</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Principio de Legalidad:</strong> La competencia debe estar expresamente determinada por la ley.</li>
                                            <li><strong>Principio de Especialidad:</strong> Cada tribunal tiene competencia para ciertos tipos de asuntos.</li>
                                            <li><strong>Principio de Indisponibilidad:</strong> Las partes no pueden convenir la competencia.</li>
                                            <li><strong>Principio de Exclusividad:</strong> Solo un tribunal tiene competencia para conocer un caso.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Clases de Competencia</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Competencia Territorial:</strong> Determinada por el lugar donde se presenta el caso o donde deben cumplirse las prestaciones.</li>
                                            <li><strong>Competencia por Razón de la Materia:</strong> Determinada por la naturaleza del asunto.</li>
                                            <li><strong>Competencia por Razón de la Cantidad:</strong> Determinada por el valor económico del asunto.</li>
                                            <li><strong>Competencia por Razón de la Persona:</strong> Determinada por las características de las partes.</li>
                                            <li><strong>Competencia por Razón de la Gravedad:</strong> Determinada por la gravedad del hecho.</li>
                                        </ul>
                                    </div>
                                    <div id="tab-3-1-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: Competencia Territorial</p>
                                                <p class="text-sm mt-2">Un accidente de tráfico ocurre en San José. La competencia territorial para conocer este caso corresponde a los tribunales de San José, ya que el hecho se produjo en ese territorio. Aunque las partes residan en otra provincia, el tribunal competente es el del lugar donde ocurrió el hecho.</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Competencia por Razón de la Materia</p>
                                                <p class="text-sm mt-2">Un caso de divorcio corresponde a la competencia de los tribunales de familia, mientras que un caso de incumplimiento contractual corresponde a la competencia de los tribunales civiles. Cada tribunal tiene competencia para ciertos tipos de asuntos, según su naturaleza.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Competencia por Razón de la Cantidad</p>
                                                <p class="text-sm mt-2">Una demanda por cobro de ₡10 millones por un contrato de compraventa de un vehículo corresponde a la competencia de un tribunal de mayor cuantía, mientras que una demanda por cobro de ₡500,000 corresponde a la competencia de un tribunal de menor cuantía. El valor del asunto determina el tribunal competente.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Competencia por Razón de la Persona</p>
                                                <p class="text-sm mt-2">Un caso en el que una de las partes es el Presidente de la República corresponde a la competencia de la Sala Constitucional, según el artículo 166 de la Constitución. Las características de las partes determinan el tribunal competente para conocer el caso.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-3-1-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Constitución Política de Costa Rica:</strong></p>
                                            <p>Artículo 166: Competencia de la Sala Constitucional</p>
                                            <p><br><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 5: Competencia territorial</p>
                                            <p>Artículo 6: Competencia por razón de la materia</p>
                                            <p>Artículo 7: Competencia por razón de la cantidad</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 12: Competencia territorial</p>
                                            <p>Artículo 13: Competencia por razón de la gravedad</p>
                                            <p><br><strong>Ley de Organización Judicial:</strong></p>
                                            <p>Artículo 1: Estructura judicial</p>
                                            <p>Artículo 2: Competencia de los tribunales</p>
                                        </div>
                                    </div>
                                    <div id="tab-3-1-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Qué es la competencia judicial?</p>
                                                <label><input type="radio" name="q21" value="a"> A) La facultad de las partes para elegir el tribunal</label>
                                                <label><input type="radio" name="q21" value="b"> B) La atribución de un tribunal para conocer un asunto específico</label>
                                                <label><input type="radio" name="q21" value="c"> C) La capacidad para contratar</label>
                                                <div class="feedback" data-question="q21"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿Qué principio establece que las partes no pueden convenir la competencia?</p>
                                                <label><input type="radio" name="q22" value="a"> A) Principio de disponibilidad</label>
                                                <label><input type="radio" name="q22" value="b"> B) Principio de indisponibilidad</label>
                                                <label><input type="radio" name="q22" value="c"> C) Principio de convenio</label>
                                                <div class="feedback" data-question="q22"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿Qué tipo de competencia se determina por el lugar donde se produce el hecho?</p>
                                                <label><input type="radio" name="q23" value="a"> A) Competencia por razón de la materia</label>
                                                <label><input type="radio" name="q23" value="b"> B) Competencia territorial</label>
                                                <label><input type="radio" name="q23" value="c"> C) Competencia por razón de la cantidad</label>
                                                <div class="feedback" data-question="q23"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿Qué tribunal es competente para conocer un caso en el que una de las partes es el Presidente de la República?</p>
                                                <label><input type="radio" name="q24" value="a"> A) Tribunal de primera instancia</label>
                                                <label><input type="radio" name="q24" value="b"> B) Sala Constitucional</label>
                                                <label><input type="radio" name="q24" value="c"> C) Tribunal de segunda instancia</label>
                                                <div class="feedback" data-question="q24"></div>
                                            </div>
                                            <button onclick="checkAnswers('q21', 'q22', 'q23', 'q24')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- TEMA IV: La Acción -->
                <section id="tema-4" class="content-section hidden">
                    <h2 class="text-3xl font-bold text-[#795548] mb-2">TEMA IV: La Acción</h2>
                    <p class="mb-6 text-gray-600">La acción es la facultad que tiene una parte para exigir ante los tribunales la tutela judicial de un derecho subjetivo o de un interés legítimo.</p>
                    
                    <!-- Accordion Item 4.1: Concepto de Acción -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-4-1">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">1. Concepto de Acción</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-4-1" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-4-1-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-4-1-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-4-1-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-4-1-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-4-1-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Acción Judicial" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">La <strong>acción</strong> es la facultad que tiene una parte para exigir ante los tribunales la tutela judicial de un derecho subjetivo o de un interés legítimo.</p>
                                        
                                        <h4 class="font-semibold mb-2">Definición Formal</h4>
                                        <p class="text-sm mb-4">La acción es el derecho subjetivo de exigir del Estado, a través de sus órganos judiciales, la protección de un derecho o de un interés legítimo, mediante el proceso judicial correspondiente.</p>
                                        
                                        <h4 class="font-semibold mb-2">Elementos de la Acción</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Actividad del Sujeto Activo:</strong> La parte que ejerce la acción (actor) debe realizar los actos procesales necesarios para iniciar y sostener el proceso.</li>
                                            <li><strong>Pretensión:</strong> Lo que la parte solicita al tribunal, es decir, la solución concreta que busca.</li>
                                            <li><base>Fundamento:</strong> La norma jurídica que ampara la pretensión de la parte.</li>
                                            <li><strong>Hechos:</strong> Los acontecimientos que dan lugar al proceso y que deben ser probados.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Clases de Acción</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Acción Civil:</strong> Para la protección de derechos civiles, como los derechos de propiedad, contractual, etc.</li>
                                            <li><strong>Acción Penal:</strong> Para la protección de derechos penales, como el derecho a la vida, la integridad, etc.</li>
                                            <li><strong>Acción Administrativa:</strong> Para la protección contra actos administrativos lesivos.</li>
                                            <li><strong>Acción Constitucional:</strong> Para la protección de derechos fundamentales.</li>
                                            <li><strong>Acción Laboral:</strong> Para la protección de derechos laborales.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Principios de la Acción</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Principio de Legalidad:</strong> La acción debe estar prevista en la ley.</li>
                                            <li><strong>Principio de Universalidad:</strong> Todo derecho subjetivo puede ser tutelado mediante la acción.</li>
                                            <li><strong>Principio de Inmediatez:</strong> La acción debe ejercerse en el momento oportuno.</li>
                                            <li><strong>Principio de Gratuidad:</strong> El acceso a la justicia debe ser gratuito.</li>
                                        </ul>
                                    </div>
                                    <div id="tab-4-1-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: Acción Civil</p>
                                                <p class="text-sm mt-2">Un ciudadano demanda a un constructor por incumplimiento de contrato, alegando que la construcción de su casa no se realizó según lo pactado. La acción civil permite al ciudadano exigir ante los tribunales el cumplimiento del contrato o la indemnización por daños y perjuicios, protegiendo su derecho contractual.</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Acción Penal</p>
                                                <p class="text-sm mt-2">Una persona es víctima de un robo y denuncia los hechos ante las autoridades. La acción penal permite al Estado perseguir al autor del delito y sancionarlo, protegiendo así el derecho a la propiedad de la víctima y la seguridad de la sociedad.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Acción Administrativa</p>
                                                <p class="text-sm mt-2">Un ciudadano impugna una resolución municipal que le niega un permiso de construcción. La acción administrativa permite al ciudadano exigir ante el tribunal la anulación de la resolución si es contraria a la ley, protegiendo su derecho a obtener los permisos correspondientes.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Acción Constitucional</p>
                                                <p class="text-sm mt-2">Un ciudadano considera que sus derechos fundamentales han sido violados por una autoridad pública. Interpone un recurso de amparo, una acción constitucional que permite proteger sus derechos fundamentales de manera rápida y efectiva, garantizando la supremacía de la Constitución.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-4-1-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Constitución Política de Costa Rica:</strong></p>
                                            <p>Artículo 41: Derecho a la justicia</p>
                                            <p>Artículo 47: Debido proceso legal</p>
                                            <p><br><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 35: Demanda</p>
                                            <p>Artículo 36: Requisitos de la demanda</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 72: Querella</p>
                                            <p>Artículo 75: Requisitos de la querella</p>
                                            <p><br><strong>Ley de Jurisdicción Constitucional:</strong></p>
                                            <p>Artículo 1: Recurso de amparo</p>
                                            <p>Artículo 2: Requisitos del recurso</p>
                                        </div>
                                    </div>
                                    <div id="tab-4-1-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Qué es la acción judicial?</p>
                                                <label><input type="radio" name="q25" value="a"> A) La capacidad para contratar</label>
                                                <label><input type="radio" name="q25" value="b"> B) La facultad de exigir tutela judicial de un derecho</label>
                                                <label><input type="radio" name="q25" value="c"> C) La obligación de pagar impuestos</label>
                                                <div class="feedback" data-question="q25"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿Qué elemento de la acción se refiere a lo que la parte solicita al tribunal?</p>
                                                <label><input type="radio" name="q26" value="a"> A) Fundamento</label>
                                                <label><input type="radio" name="q26" value="b"> B) Pretensión</label>
                                                <label><input type="radio" name="q26" value="c"> C) Hechos</label>
                                                <div class="feedback" data-question="q26"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿Qué acción se utiliza para proteger derechos fundamentales?</p>
                                                <label><input type="radio" name="q27" value="a"> A) Acción civil</label>
                                                <label><input type="radio" name="q27" value="b"> B) Acción penal</label>
                                                <label><input type="radio" name="q27" value="c"> C) Acción constitucional</label>
                                                <div class="feedback" data-question="q27"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿Qué principio establece que todo derecho subjetivo puede ser tutelado mediante la acción?</p>
                                                <label><input type="radio" name="q28" value="a"> A) Principio de legalidad</label>
                                                <label><input type="radio" name="q28" value="b"> B) Principio de universalidad</label>
                                                <label><input type="radio" name="q28" value="c"> C) Principio de inmediatez</label>
                                                <div class="feedback" data-question="q28"></div>
                                            </div>
                                            <button onclick="checkAnswers('q25', 'q26', 'q27', 'q28')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- TEMA V: El Proceso -->
                <section id="tema-5" class="content-section hidden">
                    <h2 class="text-3xl font-bold text-[#795548] mb-2">TEMA V: El Proceso</h2>
                    <p class="mb-6 text-gray-600">El proceso es el conjunto de actuaciones y trámites seguidos ante los tribunales para la resolución de un litigio, garantizando el debido proceso y la tutela judicial efectiva.</p>
                    
                    <!-- Accordion Item 5.1: Concepto de Proceso -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-5-1">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">1. Concepto de Proceso</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-5-1" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-5-1-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-5-1-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-5-1-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-5-1-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-5-1-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Proceso Judicial" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">El <strong>proceso</strong> es el conjunto de actuaciones y trámites seguidos ante los tribunales para la resolución de un litigio, garantizando el debido proceso y la tutela judicial efectiva.</p>
                                        
                                        <h4 class="font-semibold mb-2">Definición Formal</h4>
                                        <p class="text-sm mb-4">El proceso es el conjunto de actos y diligencias realizadas por los sujetos procesales (juez, partes, terceros) con el fin de resolver un litigio, aplicando el derecho al caso concreto.</p>
                                        
                                        <h4 class="font-semibold mb-2">Elementos del Proceso</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Sujetos Procesales:</strong> Juez, partes y terceros que intervienen en el proceso.</li>
                                            <li><strong>Objeto del Proceso:</strong> El derecho o interés controvertido que se somete a la decisión del tribunal.</li>
                                            <li><strong>Pretensión:</strong> Lo que la parte solicita al tribunal para resolver el litigio.</li>
                                            <li><strong>Hechos:</strong> Los acontecimientos que dan lugar al litigio y que deben ser probados.</li>
                                            <li><strong>Norma Jurídica:</strong> La ley aplicable al caso concreto.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Características del Proceso</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Formalidad:</strong> Sigue un procedimiento establecido por la ley.</li>
                                            <li><strong>Publicidad:</strong> Las actuaciones son generalmente accesibles al público.</li>
                                            <li><strong>Contradicción:</strong> Las partes tienen la oportunidad de presentar sus argumentos y pruebas.</li>
                                            <li><strong>Inmediación:</strong> El juez tiene contacto directo con las partes y las pruebas.</li>
                                            <li><strong>Concentración:</strong> Las actuaciones se agrupan en el menor número posible de actos.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Fases del Proceso</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Preparatoria:</strong> Se admiten las demandas, se resuelven las excepciones previas y se fijan los hechos controvertidos.</li>
                                            <li><strong>Probatoria:</strong> Se recibe y valora la prueba presentada por las partes.</li>
                                            <li><strong>Decisoria:</strong> El tribunal dicta sentencia resolviendo el fondo del asunto.</li>
                                        </ul>
                                    </div>
                                    <div id="tab-5-1-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: Proceso Civil Ordinario</p>
                                                <p class="text-sm mt-2">En un proceso civil ordinario por incumplimiento de contrato, las partes presentan sus escritos (demanda, contestación, réplica), ofrecen pruebas y las presentan en audiencias. El juez valora las pruebas y dicta sentencia resolviendo el fondo del asunto. Este proceso sigue las fases preparatoria, probatoria y decisoria, garantizando el debido proceso y la tutela judicial efectiva.</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Proceso Penal</p>
                                                <p class="text-sm mt-2">En un proceso penal, el imputado tiene derecho a un juicio justo, incluyendo el derecho a ser informado de los cargos, a contar con un abogado defensor, a presentar pruebas y a ser juzgado por un tribunal imparcial. El proceso sigue las fases investigativa, intermedia y de juicio oral, garantizando los derechos del imputado y la aplicación correcta del derecho penal.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Proceso Constitucional</p>
                                                <p class="text-sm mt-2">En un recurso de amparo, el tribunal debe resolver con celeridad, garantizando la protección efectiva de los derechos fundamentales. El proceso es de instancia única, con trámite expreso y sentencia motivada. Este proceso especial busca proteger los derechos fundamentales de manera rápida y efectiva, asegurando la supremacía de la Constitución.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Proceso Laboral</p>
                                                <p class="text-sm mt-2">En un proceso laboral por despido improcedente, el trabajador debe demostrar que el despido fue arbitrario. El proceso incluye una etapa de conciliación obligatoria y, si no hay acuerdo, un juicio oral donde se reciben testimonios y pruebas. El tribunal debe resolver en un plazo breve, garantizando la protección de los derechos laborales y la tutela judicial efectiva.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-5-1-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Constitución Política de Costa Rica:</strong></p>
                                            <p>Artículo 41: Derecho a la justicia</p>
                                            <p>Artículo 47: Debido proceso legal</p>
                                            <p><br><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 1: Principios generales del proceso civil</p>
                                            <p>Artículo 2: Principios procesales</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 1: Principio de juicio previo</p>
                                            <p>Artículo 3: Principio de legalidad</p>
                                            <p><br><strong>Ley de Jurisdicción Constitucional:</strong></p>
                                            <p>Artículo 1: Recurso de amparo</p>
                                            <p>Artículo 5: Trámite expreso</p>
                                        </div>
                                    </div>
                                    <div id="tab-5-1-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Qué es el proceso judicial?</p>
                                                <label><input type="radio" name="q29" value="a"> A) Un contrato entre particulares</label>
                                                <label><input type="radio" name="q29" value="b"> B) El conjunto de actuaciones para resolver un litigio</label>
                                                <label><input type="radio" name="q29" value="c"> C) Una norma legal</label>
                                                <div class="feedback" data-question="q29"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿Qué característica garantiza que las partes puedan presentar sus argumentos?</p>
                                                <label><input type="radio" name="q30" value="a"> A) Formalidad</label>
                                                <label><input type="radio" name="q30" value="b"> B) Contradicción</label>
                                                <label><input type="radio" name="q30" value="c"> C) Publicidad</label>
                                                <div class="feedback" data-question="q30"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿Qué fase del proceso se encarga de recibir y valorar la prueba?</p>
                                                <label><input type="radio" name="q31" value="a"> A) Preparatoria</label>
                                                <label><input type="radio" name="q31" value="b"> B) Probatoria</label>
                                                <label><input type="radio" name="q31" value="c"> C) Decisoria</label>
                                                <div class="feedback" data-question="q31"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿Qué garantiza el debido proceso?</p>
                                                <label><input type="radio" name="q32" value="a"> A) Solo la rapidez del juicio</label>
                                                <label><input type="radio" name="q32" value="b"> B) La defensa y la igualdad procesal</label>
                                                <label><input type="radio" name="q32" value="c"> C) El anonimato de las partes</label>
                                                <div class="feedback" data-question="q32"></div>
                                            </div>
                                            <button onclick="checkAnswers('q29', 'q30', 'q31', 'q32')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- TEMA VI: Sujetos Procesales -->
                <section id="tema-6" class="content-section hidden">
                    <h2 class="text-3xl font-bold text-[#795548] mb-2">TEMA VI: Sujetos Procesales</h2>
                    <p class="mb-6 text-gray-600">Los sujetos procesales son las personas que intervienen en el proceso judicial, incluyendo al juez, las partes y terceros, cada uno con derechos y deberes específicos.</p>
                    
                    <!-- Accordion Item 6.1: Concepto de Sujetos Procesales -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-6-1">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">1. Concepto de Sujetos Procesales</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-6-1" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-6-1-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-6-1-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-6-1-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-6-1-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-6-1-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sujetos Procesales" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">Los <strong>sujetos procesales</strong> son las personas que intervienen en el proceso judicial, incluyendo al juez, las partes y terceros, cada uno con derechos y deberes específicos.</p>
                                        
                                        <h4 class="font-semibold mb-2">Definición Formal</h4>
                                        <p class="text-sm mb-4">Los sujetos procesales son las personas capaces legalmente para participar en una relación procesal, ya sea como parte esencial o accesoria.</p>
                                        
                                        <h4 class="font-semibold mb-2">Clasificación de los Sujetos Procesales</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Sujetos Esenciales:</strong> Son indispensables para el proceso y no pueden ser sustituidos.</li>
                                            <li><strong>Sujetos Accesorios:</strong> Intervienen de manera secundaria, colaborando con los sujetos esenciales.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Sujetos Esenciales</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Juez:</strong> Órgano del Estado que dirige el procedimiento, aplica la ley y resuelve el litigio.</li>
                                            <li><strong>Partes:</strong> Actor y demandado, que están en posiciones contradictorias y plantean el conflicto jurídico.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Sujetos Accesorios</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Terceros:</strong> Personas que intervienen en el proceso por interés propio o por relación con las partes.</li>
                                            <li><strong>Auxiliares de la Justicia:</strong> Personas que colaboran con el juez y las partes en el desarrollo del proceso.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Derechos y Deberes de los Sujetos Procesales</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Derechos:</strong> Incluyen el derecho a la defensa, a la igualdad, a ser oído, a presentar pruebas, etc.</li>
                                            <li><strong>Deberes:</strong> Incluyen el deber de colaborar con el proceso, de respetar las resoluciones, de actuar de buena fe, etc.</li>
                                        </ul>
                                    </div>
                                    <div id="tab-6-1-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: El Juez como Sujeto Procesal</p>
                                                <p class="text-sm mt-2">En un proceso civil, el juez tiene la facultad de impulsar el proceso de oficio, ordenar pruebas necesarias para esclarecer los hechos, y resolver las excepciones y cuestiones incidentales. El juez debe actuar con imparcialidad, independencia y motivar sus resoluciones, garantizando el debido proceso y la tutela judicial efectiva.</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Las Partes como Sujetos Procesales</p>
                                                <p class="text-sm mt-2">En un proceso penal, el fiscal (como parte acusadora) tiene el deber de investigar los hechos, presentar la acusación y demostrar la culpabilidad del imputado. Por su parte, el imputado (como parte acusada) tiene el derecho a defenderse, presentar pruebas y argumentos en su favor, y a ser juzgado por un tribunal imparcial.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Terceros en el Proceso</p>
                                                <p class="text-sm mt-2">En un proceso de divorcio, los hijos menores pueden ser considerados terceros con interés legítimo, ya que el resultado del proceso afecta directamente sus derechos. El tribunal debe velar por el interés superior del niño, escuchando su opinión y tomando decisiones que garanticen su bienestar.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Auxiliares de la Justicia</p>
                                                <p class="text-sm mt-2">En un proceso civil, los peritos son auxiliares de la justicia que ayudan al tribunal a entender aspectos técnicos del caso. Los peritos deben actuar con independencia, imparcialidad y profesionalismo, presentando informes objetivos que ayuden al juez a resolver el litigio basándose en la evidencia técnica.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-6-1-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Constitución Política de Costa Rica:</strong></p>
                                            <p>Artículo 172: Organización judicial</p>
                                            <p>Artículo 173: Tribunales de justicia</p>
                                            <p><br><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 2.1: Principio de igualdad procesal</p>
                                            <p>Artículo 2.2: Tutela judicial efectiva</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 7: Derechos del imputado</p>
                                            <p>Artículo 8: Deberes del imputado</p>
                                            <p><br><strong>Ley de Organización Judicial:</strong></p>
                                            <p>Artículo 1: Estructura judicial</p>
                                            <p>Artículo 2: Competencia de los tribunales</p>
                                        </div>
                                    </div>
                                    <div id="tab-6-1-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Quiénes son los sujetos procesales esenciales?</p>
                                                <label><input type="radio" name="q33" value="a"> A) Solo las partes</label>
                                                <label><input type="radio" name="q33" value="b"> B) Solo el juez</label>
                                                <label><input type="radio" name="q33" value="c"> C) El juez y las partes</label>
                                                <div class="feedback" data-question="q33"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿Qué debe garantizar el juez en el proceso?</p>
                                                <label><input type="radio" name="q34" value="a"> A) Rapidez del juicio</label>
                                                <label><input type="radio" name="q34" value="b"> B) Imparcialidad e independencia</label>
                                                <label><input type="radio" name="q34" value="c"> C) Anonimato de las partes</label>
                                                <div class="feedback" data-question="q34"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿Qué derecho tiene el imputado en un proceso penal?</p>
                                                <label><input type="radio" name="q35" value="a"> A) Derecho a un juicio rápido</label>
                                                <label><input type="radio" name="q35" value="b"> B) Derecho a defenderse</label>
                                                <label><input type="radio" name="q35" value="c"> C) Derecho a no ser investigado</label>
                                                <div class="feedback" data-question="q35"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿Qué son los auxiliares de la justicia?</p>
                                                <label><input type="radio" name="q36" value="a"> A) Las partes del proceso</label>
                                                <label><input type="radio" name="q36" value="b"> B) Personas que colaboran con el juez y las partes</label>
                                                <label><input type="radio" name="q36" value="c"> C) Los jueces de instancia inferior</label>
                                                <div class="feedback" data-question="q36"></div>
                                            </div>
                                            <button onclick="checkAnswers('q33', 'q34', 'q35', 'q36')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- TEMA VII: Actos Procesales -->
                <section id="tema-7" class="content-section hidden">
                    <h2 class="text-3xl font-bold text-[#795548] mb-2">TEMA VII: Actos Procesales</h2>
                    <p class="mb-6 text-gray-600">Los actos procesales son el conjunto de acciones y omisiones realizadas dentro de un proceso judicial por los sujetos procesales, con el fin de producir efectos jurídicos que impulsan el litigio.</p>
                    
                    <!-- Accordion Item 7.1: Concepto de Actos Procesales -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-7-1">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">1. Concepto de Actos Procesales</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-7-1" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-7-1-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-7-1-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-7-1-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-7-1-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-7-1-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Actos Procesales" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">Los <strong>actos procesales</strong> son el conjunto de acciones y omisiones realizadas dentro de un proceso judicial por los sujetos procesales, con el fin de producir efectos jurídicos que impulsan el litigio.</p>
                                        
                                        <h4 class="font-semibold mb-2">Definición Formal</h4>
                                        <p class="text-sm mb-4">Los actos procesales son el conjunto de acciones y omisiones que se realizan dentro de un proceso judicial por los sujetos procesales (juez, partes, terceros), con el fin de producir efectos jurídicos que impulsan el litigio desde su inicio hasta su terminación.</p>
                                        
                                        <h4 class="font-semibold mb-2">Características Esenciales de los Actos Procesales</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Voluntariedad:</strong> Implican una manifestación de voluntad de los sujetos procesales, fundamental para su existencia.</li>
                                            <li><strong>Finalidad Específica:</strong> Cada acto busca un efecto jurídico concreto dentro del proceso, como probar un hecho, solicitar una decisión o defender un derecho.</li>
                                            <li><strong>Formalidad:</strong> Deben cumplir con las formas y requisitos establecidos por ley para ser válidos, garantizando la seguridad jurídica.</li>
                                            <li><strong>Progresividad:</strong> Contribuyen al desarrollo continuo y ordenado de las etapas procesales, impulsando el litigio hacia su resolución.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Validez y Nulidad de los Actos Procesales</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Validez:</strong> Un acto procesal es válido cuando ha sido realizado conforme a las formas y requisitos que la ley establece, garantizando el debido proceso.</li>
                                            <li><strong>Nulidad:</strong> La nulidad es la sanción procesal que priva de sus efectos a un acto que carece de alguno de sus requisitos esenciales o que ha sido realizado violando una garantía fundamental del debido proceso.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Principios de las Nulidades Procesales</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Principio de Trascendencia:</strong> No hay nulidad sin perjuicio. Un acto solo será nulo si el defecto causó un perjuicio o indefensión real y demostrable a alguna de las partes.</li>
                                            <li><strong>Principio de Especificidad/Legalidad:</strong> La nulidad solo procede si la ley lo establece expresamente o si el vicio es de tal magnitud que afecta una garantía fundamental del debido proceso.</li>
                                            <li><strong>Principio de Convalidación:</strong> Los defectos pueden subsanarse si la parte perjudicada no los alega en el momento oportuno o realiza actos posteriores que implican su aceptación tácita.</li>
                                        </ul>
                                    </div>
                                    <div id="tab-7-1-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: Presentación de la Demanda</p>
                                                <p class="text-sm mt-2">En un proceso civil, la presentación de la demanda por parte del actor es un acto procesal voluntario que busca iniciar el proceso judicial. Este acto debe cumplir con los requisitos formales establecidos por la ley (identificación de las partes, exposición de los hechos, fundamentos de derecho, pretensión), y produce el efecto jurídico de abrir el proceso y notificar al demandado.</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Ofrecimiento de Prueba</p>
                                                <p class="text-sm mt-2">En un proceso penal, el ofrecimiento de prueba por parte de la defensa es un acto procesal que busca probar la inocencia del imputado. Este acto debe realizarse dentro del plazo establecido y cumplir con los requisitos formales, produciendo el efecto jurídico de que el tribunal debe valorar la prueba ofrecida y admitirla si cumple con los requisitos legales.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Sentencia Judicial</p>
                                                <p class="text-sm mt-2">La sentencia dictada por el juez es un acto procesal que resuelve el fondo del asunto. Este acto debe ser motivado, es decir, debe contener una explicación razonada de los hechos y del derecho aplicado, y produce el efecto jurídico de poner fin a la instancia y generar cosa juzgada.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Nulidad por Defecto Formal</p>
                                                <p class="text-sm mt-2">En un proceso civil, si la demanda no cumple con el requisito de fundamentar la pretensión con normas jurídicas aplicables, el demandado puede solicitar la nulidad de la demanda. Si el tribunal considera que el defecto causó un perjuicio real al demandado (por ejemplo, impidió ejercer su derecho de defensa), puede declarar la nulidad del acto, obligando al actor a subsanar el defecto.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-7-1-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 35: Demanda</p>
                                            <p>Artículo 36: Requisitos de la demanda</p>
                                            <p>Artículo 61: Sentencia</p>
                                            <p>Artículo 64: Cosa juzgada</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 72: Querella</p>
                                            <p>Artículo 75: Requisitos de la querella</p>
                                            <p>Artículo 363: Sentencia</p>
                                            <p><br><strong>Ley de Jurisdicción Constitucional:</strong></p>
                                            <p>Artículo 1: Recurso de amparo</p>
                                            <p>Artículo 5: Trámite expreso</p>
                                        </div>
                                    </div>
                                    <div id="tab-7-1-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Qué es un acto procesal?</p>
                                                <label><input type="radio" name="q37" value="a"> A) Un contrato entre particulares</label>
                                                <label><input type="radio" name="q37" value="b"> B) Una acción u omisión que produce efectos jurídicos en el proceso</label>
                                                <label><input type="radio" name="q37" value="c"> C) Una norma legal</label>
                                                <div class="feedback" data-question="q37"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿Qué característica es esencial para que un acto procesal sea válido?</p>
                                                <label><input type="radio" name="q38" value="a"> A) Ser rápido</label>
                                                <label><input type="radio" name="q38" value="b"> B) Cumplir con las formas y requisitos legales</label>
                                                <label><input type="radio" name="q38" value="c"> C) Ser confidencial</label>
                                                <div class="feedback" data-question="q38"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿Qué principio establece que no hay nulidad sin perjuicio?</p>
                                                <label><input type="radio" name="q39" value="a"> A) Principio de legalidad</label>
                                                <label><input type="radio" name="q39" value="b"> B) Principio de trascendencia</label>
                                                <label><input type="radio" name="q39" value="c"> C) Principio de especificidad</label>
                                                <div class="feedback" data-question="q39"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿Qué efecto produce la sentencia judicial?</p>
                                                <label><input type="radio" name="q40" value="a"> A) Inicia el proceso</label>
                                                <label><input type="radio" name="q40" value="b"> B) Pone fin a la instancia y genera cosa juzgada</label>
                                                <label><input type="radio" name="q40" value="c"> C) Anula el proceso</label>
                                                <div class="feedback" data-question="q40"></div>
                                            </div>
                                            <button onclick="checkAnswers('q37', 'q38', 'q39', 'q40')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

              
                <!-- TEMA VIII: Principios del Proceso -->
                <section id="tema-8" class="content-section hidden">
                    <h2 class="text-3xl font-bold text-[#795548] mb-2">TEMA VIII: Principios del Proceso</h2>
                    <p class="mb-6 text-gray-600">Los principios del proceso son garantías fundamentales que rigen el funcionamiento del sistema judicial costarricense, asegurando justicia, imparcialidad y eficacia en la resolución de conflictos.</p>
                    
                    <!-- Accordion Item 8.1: Principio de Dispositivo -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-8-1">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">1. Principio de Dispositivo</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-8-1" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-1-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-1-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-1-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-1-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-8-1-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Principio de Dispositivo" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">El <strong>principio de dispositivo</strong> es la facultad de las partes para iniciar, modificar o extinguir la relación procesal, así como para disponer del objeto litigioso dentro de los límites establecidos por la ley.</p>
                                        
                                        <h4 class="font-semibold mb-2">Definición Formal</h4>
                                        <p class="text-sm mb-4">El principio de dispositivo establece que las partes tienen autonomía para dirigir el proceso, decidiendo sobre sus derechos e intereses dentro de los límites legales.</p>
                                        
                                        <h4 class="font-semibold mb-2">Características Principales</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Autonomía de la voluntad:</strong> Las partes tienen libertad para decidir sobre sus derechos e intereses.</li>
                                            <li><strong>Limitaciones legales:</strong> No puede disponerse de derechos irrenunciables o que afecten el orden público.</li>
                                            <li><strong>Control judicial:</strong> El juez supervisa que el ejercicio de este principio no vulnere garantías fundamentales.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Manifestaciones del Principio de Dispositivo</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Facultad de iniciar el proceso:</strong> Las partes pueden iniciar un proceso judicial cuando consideren que sus derechos han sido violados.</li>
                                            <li><strong>Facultad de modificar el proceso:</strong> Las partes pueden proponer soluciones alternativas o transigir durante el proceso.</li>
                                            <li><strong>Facultad de extinguir el proceso:</strong> Las partes pueden desistir de la acción o transigir para poner fin al litigio.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Base Legal en Costa Rica</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Código Procesal Civil:</strong> Artículos sobre allanamiento, desistimiento y transacción.</li>
                                            <li><strong>Código Procesal Penal:</strong> Principios de oportunidad y criterios de oportunidad en el proceso penal.</li>
                                        </ul>
                                    </div>
                                    <div id="tab-8-1-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: Transacción en materia civil</p>
                                                <p class="text-sm mt-2">En un juicio de cumplimiento de contrato por ₡15 millones, las partes deciden aplicar el principio de disponibilidad mediante una transacción judicial. El demandante reclama el pago de ₡15 millones por incumplimiento de contrato de servicios. Durante la audiencia preliminar, ambas partes manifiestan su voluntad de transigir. Se acuerda el pago de ₡10 millones en cuotas mensuales durante 12 meses. El juez homologa la transacción, otorgándole fuerza de sentencia ejecutoria.</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Desistimiento de la acción</p>
                                                <p class="text-sm mt-2">En un proceso de divorcio contencioso, después de varias audiencias, las partes llegan a un acuerdo sobre la liquidación de bienes y la custodia de los hijos. La parte actora presenta una solicitud de desistimiento de la acción, manifestando su voluntad de no continuar con el proceso. El juez, verificando que no hay terceros perjudicados y que el desistimiento es voluntario, acepta el desistimiento y da por terminado el proceso.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Principio de oportunidad en el proceso penal</p>
                                                <p class="text-sm mt-2">En un caso de delito menor con pena inferior a tres años, el Ministerio Público aplica el principio de oportunidad. Considerando la reparación del daño, la confesión del imputado y su buena conducta, el fiscal decide no ejercer la acción penal. Esta decisión, dentro de los límites legales, permite al imputado evitar el proceso penal y las consecuencias derivadas de una condena, siempre que cumpla con las condiciones establecidas.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Allanamiento en el proceso civil</p>
                                                <p class="text-sm mt-2">En un proceso de cobro de una deuda, el demandado reconoce la existencia de la deuda pero solicita el pago en cuotas debido a dificultades económicas. El actor, considerando la situación del demandado y la posibilidad de recuperar el dinero aunque no de forma inmediata, acepta la propuesta y presenta una solicitud de allanamiento a las pretensiones del demandado. El juez verifica que el allanamiento es voluntario y no afecta derechos de terceros, y lo acepta, modificando el objeto del proceso.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-8-1-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 52: Transacción judicial</p>
                                            <p>Artículo 53: Requisitos de la transacción</p>
                                            <p>Artículo 54: Desistimiento de la acción</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 32: Principio de oportunidad</p>
                                            <p>Artículo 33: Criterios de oportunidad</p>
                                            <p><br><strong>Ley de Jurisdicción Constitucional:</strong></p>
                                            <p>Artículo 1: Recurso de amparo</p>
                                        </div>
                                    </div>
                                    <div id="tab-8-1-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Qué establece el principio de dispositivo?</p>
                                                <label><input type="radio" name="q45" value="a"> A) Que solo el juez puede dirigir el proceso</label>
                                                <label><input type="radio" name="q45" value="b"> B) Que las partes tienen autonomía para dirigir el proceso</label>
                                                <label><input type="radio" name="q45" value="c"> C) Que el proceso debe ser rápido</label>
                                                <div class="feedback" data-question="q45"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿Qué limitación tiene el principio de dispositivo?</p>
                                                <label><input type="radio" name="q46" value="a"> A) No puede disponerse de derechos irrenunciables</label>
                                                <label><input type="radio" name="q46" value="b"> B) No puede disponerse de ningún derecho</label>
                                                <label><input type="radio" name="q46" value="c"> C) Solo puede disponerse de derechos patrimoniales</label>
                                                <div class="feedback" data-question="q46"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿Qué manifestación del principio de dispositivo permite a las partes poner fin al litigio?</p>
                                                <label><input type="radio" name="q47" value="a"> A) Iniciar el proceso</label>
                                                <label><input type="radio" name="q47" value="b"> B) Transacción o desistimiento</label>
                                                <label><input type="radio" name="q47" value="c"> C) Presentar pruebas</label>
                                                <div class="feedback" data-question="q47"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿En qué materia se aplica el principio de oportunidad en el proceso penal?</p>
                                                <label><input type="radio" name="q48" value="a"> A) En todos los delitos</label>
                                                <label><input type="radio" name="q48" value="b"> B) Solo en delitos menores</label>
                                                <label><input type="radio" name="q48" value="c"> C) Nunca se aplica</label>
                                                <div class="feedback" data-question="q48"></div>
                                            </div>
                                            <button onclick="checkAnswers('q45', 'q46', 'q47', 'q48')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Accordion Item 8.2: Principio de Inquisitivo -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-8-2">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">2. Principio de Inquisitivo</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-8-2" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-2-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-2-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-2-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-2-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-8-2-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Principio de Inquisitivo" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">El <strong>principio de inquisitivo</strong> es la facultad del juez para investigar y averiguar los hechos de oficio, sin limitarse a lo alegado por las partes, para descubrir la verdad material.</p>
                                        
                                        <h4 class="font-semibold mb-2">Definición Formal</h4>
                                        <p class="text-sm mb-4">El principio inquisitivo otorga al juez la facultad de investigar los hechos de oficio, buscando la verdad material más allá de lo que las partes alegan, especialmente en materias de interés público o protección de derechos vulnerables.</p>
                                        
                                        <h4 class="font-semibold mb-2">Características Principales</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Poderes oficiosos:</strong> El juez puede actuar sin necesidad de petición de parte.</li>
                                            <li><strong>Búsqueda de la verdad material:</strong> No se limita a la verdad formal aportada por las partes.</li>
                                            <li><strong>Impulso procesal:</strong> El juez tiene la responsabilidad de avanzar el proceso.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Diferencias con el Principio Dispositivo</h4>
                                        <table class="w-full text-sm border-collapse border border-gray-300">
                                            <thead>
                                                <tr class="bg-gray-100">
                                                    <th class="border border-gray-300 p-2">Principio Inquisitivo</th>
                                                    <th class="border border-gray-300 p-2">Principio Dispositivo</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="border border-gray-300 p-2">Juez investiga de oficio</td>
                                                    <td class="border border-gray-300 p-2">Partes aportan pruebas</td>
                                                </tr>
                                                <tr>
                                                    <td class="border border-gray-300 p-2">Verdad material</td>
                                                    <td class="border border-gray-300 p-2">Verdad formal</td>
                                                </tr>
                                                <tr>
                                                    <td class="border border-gray-300 p-2">Mayor intervención judicial</td>
                                                    <td class="border border-gray-300 p-2">Autonomía de las partes</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        
                                        <h4 class="font-semibold mb-2">Aplicación en Costa Rica</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Materia de familia:</strong> El juez tiene la obligación de velar por el interés superior del niño, pudiendo ordenar pruebas de oficio.</li>
                                            <li><strong>Materia penal:</strong> En ciertos casos, el juez puede ordenar pruebas adicionales para esclarecer los hechos.</li>
                                            <li><strong>Materia contencioso-administrativa:</strong> El juez puede verificar la legalidad de los actos administrativos de oficio.</li>
                                        </ul>
                                    </div>
                                    <div id="tab-8-2-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: Facultad del juez para ordenar pruebas de oficio en materia de familia</p>
                                                <p class="text-sm mt-2">En un proceso de patria potestad donde existe duda sobre el entorno familiar del menor, el juez aplica el principio inquisitivo para garantizar el interés superior del niño. Las partes presentan pruebas contradictorias sobre la idoneidad del entorno familiar. El juez, de oficio, ordena un estudio socioeconómico y psicológico del domicilio. Se solicita informe al PANI (Patronato Nacional de la Infancia) sobre las condiciones del menor. El juez realiza una diligencia de inspección ocular en el hogar del menor para verificar las condiciones. Jurisprudencia costarricense indica que "En materia de familia, el principio inquisitivo cobra especial relevancia, pues el juez tiene la obligación de velar por el interés superior del niño, niña o adolescente, pudiendo ordenar pruebas de oficio para esclarecer los hechos."</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Investigación de oficio en materia penal</p>
                                                <p class="text-sm mt-2">En un proceso penal por homicidio, las partes presentan versiones contradictorias sobre los hechos. El fiscal acusa al imputado, pero la defensa argumenta que actuó en legítima defensa. El juez, de oficio, ordena una reconstrucción de los hechos, solicita pericias balísticas y psicológicas adicionales, y entrevista a testigos que no fueron citados por las partes. El juez busca la verdad material sobre lo ocurrido, más allá de lo alegado por las partes, para poder aplicar correctamente el derecho penal.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Verificación de oficio en materia contencioso-administrativa</p>
                                                <p class="text-sm mt-2">En un proceso contencioso-administrativo contra una resolución municipal que niega un permiso de construcción, el juez verifica de oficio la legalidad del acto administrativo. El juez solicita al municipio el expedente completo, verifica que se cumplieron todos los requisitos legales, y realiza una inspección técnica en el inmueble para determinar si cumple con las normas urbanísticas. El juez no se limita a lo alegado por las partes, sino que investiga de oficio la verdad material sobre la legalidad del acto administrativo.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Impulso procesal de oficio en materia laboral</p>
                                                <p class="text-sm mt-2">En un proceso laboral por despido improcedente, las partes presentan pruebas sobre las circunstancias del despido. El juez, de oficio, advierte que existen elementos que sugieren posible discriminación. El juez ordena la práctica de una prueba pericial psicológica para determinar si el despido pudo estar motivado por discriminación, y solicita al empleador la presentación de documentos que no fueron ofrecidos por las partes. El juez busca la verdad material sobre las causas del despido, más allá de lo alegado por las partes, para proteger los derechos laborales del trabajador.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-8-2-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 2.4: Principio de impulsar oficiosamente el procedimiento</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 327: Facultad del juez para ordenar pruebas de oficio</p>
                                            <p>Artículo 328: Principio de inmediación</p>
                                            <p><br><strong>Ley de Jurisdicción Constitucional:</strong></p>
                                            <p>Artículo 5: Principio de inmediación</p>
                                            <p><br><strong>Código de Niñez y Adolescencia:</strong></p>
                                            <p>Artículo 75: Obligación del juez de velar por el interés superior del niño</p>
                                        </div>
                                    </div>
                                    <div id="tab-8-2-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Qué establece el principio de inquisitivo?</p>
                                                <label><input type="radio" name="q49" value="a"> A) Que solo las partes pueden aportar pruebas</label>
                                                <label><input type="radio" name="q49" value="b"> B) Que el juez puede investigar de oficio</label>
                                                <label><input type="radio" name="q49" value="c"> C) Que el proceso debe ser rápido</label>
                                                <div class="feedback" data-question="q49"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿Qué tipo de verdad busca el principio inquisitivo?</p>
                                                <label><input type="radio" name="q50" value="a"> A) Solo la verdad formal</label>
                                                <label><input type="radio" name="q50" value="b"> B) La verdad material</label>
                                                <label><input type="radio" name="q50" value="c"> C) La verdad procesal</label>
                                                <div class="feedback" data-question="q50"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿En qué materia es especialmente relevante el principio inquisitivo en Costa Rica?</p>
                                                <label><input type="radio" name="q51" value="a"> A) Solo en materia penal</label>
                                                <label><input type="radio" name="q51" value="b"> B) En materia de familia</label>
                                                <label><input type="radio" name="q51" value="c"> C) En todas las materias por igual</label>
                                                <div class="feedback" data-question="q51"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿Qué diferencia fundamental existe entre el principio inquisitivo y el dispositivo?</p>
                                                <label><input type="radio" name="q52" value="a"> A) Ninguna, son iguales</label>
                                                <label><input type="radio" name="q52" value="b"> B) El inquisitivo busca la verdad material, el dispositivo la verdad formal</label>
                                                <label><input type="radio" name="q52" value="c"> C) Solo el dispositivo permite a las partes dirigir el proceso</label>
                                                <div class="feedback" data-question="q52"></div>
                                            </div>
                                            <button onclick="checkAnswers('q49', 'q50', 'q51', 'q52')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Accordion Item 8.3: Principio de Instancia Única y Doble Instancia -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-8-3">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">3. Principio de Instancia Única y Doble Instancia</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-8-3" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-3-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-3-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-3-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-3-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-8-3-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Principio de Instancia" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">El <strong>principio de instancia única y doble instancia</strong> se refiere a la estructura del proceso judicial según el número de instancias o niveles judiciales que pueden revisar una decisión.</p>
                                        
                                        <h4 class="font-semibold mb-2">Definición Formal</h4>
                                        <p class="text-sm mb-4">La instancia única es un proceso que se resuelve en un solo grado jurisdiccional, sin posibilidad de apelación. La doble instancia permite recurrir una decisión ante un tribunal superior para su revisión.</p>
                                        
                                        <h4 class="font-semibold mb-2">Características del Principio de Instancia</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Instancia única:</strong> Proceso que se resuelve en un solo grado jurisdiccional, sin posibilidad de apelación.</li>
                                            <li><strong>Doble instancia:</strong> Posibilidad de recurrir una decisión ante un tribunal superior para su revisión.</li>
                                            <li><strong>Garantía del derecho a la defensa:</strong> Ambos principios buscan garantizar el derecho a una tutela judicial efectiva.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Aplicación en Costa Rica</h4>
                                        <table class="w-full text-sm border-collapse border border-gray-300">
                                            <thead>
                                                <tr class="bg-gray-100">
                                                    <th class="border border-gray-300 p-2">Procesos con doble instancia</th>
                                                    <th class="border border-gray-300 p-2">Procesos con instancia única</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="border border-gray-300 p-2">Proceso penal ordinario</td>
                                                    <td class="border border-gray-300 p-2">Proceso de amparo</td>
                                                </tr>
                                                <tr>
                                                    <td class="border border-gray-300 p-2">Proceso civil ordinario</td>
                                                    <td class="border border-gray-300 p-2">Proceso de hábeas corpus</td>
                                                </tr>
                                                <tr>
                                                    <td class="border border-gray-300 p-2">Proceso contencioso administrativo</td>
                                                    <td class="border border-gray-300 p-2">Algunas diligencias urgentes</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        
                                        <h4 class="font-semibold mb-2">Excepciones Importantes</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Materia penal:</strong> Aunque existe el derecho a la doble instancia, la Sala Constitucional ha establecido que en casos de delitos menores con penas inferiores a tres años, puede aplicarse un procedimiento abreviado con instancia única cuando el imputado acepta los hechos.</li>
                                            <li><strong>Materia constitucional:</strong> Los recursos de amparo y hábeas corpus son procesos de instancia única, diseñados para una protección rápida y efectiva de los derechos fundamentales.</li>
                                        </ul>
                                    </div>
                                    <div id="tab-8-3-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: Instancia única en el recurso de amparo</p>
                                                <p class="text-sm mt-2">Un ciudadano interpone un recurso de amparo contra una resolución de la Caja Costarricense de Seguro Social que le niega una pensión por invalidez. La Sala Constitucional resuelve en única instancia. Jurisprudencia: "El recurso de amparo es un proceso constitucional de instancia única, diseñado para una protección rápida y efectiva de los derechos fundamentales." Este principio permite una tutela judicial ágil cuando se violan derechos constitucionales, evitando dilaciones innecesarias que podrían perjudicar gravemente al afectado.</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Doble instancia en el proceso civil ordinario</p>
                                                <p class="text-sm mt-2">En un juicio por incumplimiento de contrato de ₡50 millones, el Juzgado Civil dicta sentencia condenando al pago. La parte demandada interpone apelación ante el Tribunal Superior Civil. El tribunal de segunda instancia revisa la sentencia, puede confirmarla, modificarla o revocarla. Jurisprudencia: "El derecho a la doble instancia constituye una garantía fundamental del debido proceso, que permite corregir posibles errores en la primera instancia." Este principio asegura mayor seguridad jurídica y protección de los derechos de las partes.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Excepción en materia penal</p>
                                                <p class="text-sm mt-2">Un imputado acepta los hechos en un procedimiento abreviado por un delito menor con pena inferior a tres años. El juez de primera instancia resuelve el caso en única instancia, sin posibilidad de apelación. Esta excepción al principio de doble instancia busca agilizar la tramitación de casos menos graves, especialmente cuando el imputado acepta su responsabilidad, evitando dilaciones innecesarias y contribuyendo a la descongestión de los tribunales.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Instancia única en procesos urgentes</p>
                                                <p class="text-sm mt-2">En un proceso de medidas cautelares urgentes para proteger un derecho amenazado, el tribunal resuelve en única instancia. La naturaleza urgente del caso requiere una decisión inmediata para evitar un daño irreparable. Aunque normalmente los procesos de medidas cautelares pueden ser revisados en segunda instancia, en casos de extrema urgencia se aplica el principio de instancia única para garantizar la efectividad de la protección judicial.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-8-3-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Constitución Política de Costa Rica:</strong></p>
                                            <p>Artículo 47: Debido proceso legal</p>
                                            <p><br><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 7: Instancia única</p>
                                            <p>Artículo 8: Doble instancia</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 366: Instancia única en procedimientos abreviados</p>
                                            <p>Artículo 367: Doble instancia en procedimiento ordinario</p>
                                            <p><br><strong>Ley de Jurisdicción Constitucional:</strong></p>
                                            <p>Artículo 1: Recurso de amparo (instancia única)</p>
                                            <p>Artículo 2: Recurso de hábeas corpus (instancia única)</p>
                                        </div>
                                    </div>
                                    <div id="tab-8-3-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Qué es la instancia única?</p>
                                                <label><input type="radio" name="q53" value="a"> A) Un proceso con dos niveles judiciales</label>
                                                <label><input type="radio" name="q53" value="b"> B) Un proceso que se resuelve en un solo grado jurisdiccional</label>
                                                <label><input type="radio" name="q53" value="c"> C) Un proceso sin tribunal</label>
                                                <div class="feedback" data-question="q53"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿Qué garantiza la doble instancia?</p>
                                                <label><input type="radio" name="q54" value="a"> A) Rapidez del juicio</label>
                                                <label><input type="radio" name="q54" value="b"> B) Corrección de posibles errores en primera instancia</label>
                                                <label><input type="radio" name="q54" value="c"> C) Anonimato de las partes</label>
                                                <div class="feedback" data-question="q54"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿En qué proceso se aplica la instancia única en Costa Rica?</p>
                                                <label><input type="radio" name="q55" value="a"> A) En todos los procesos</label>
                                                <label><input type="radio" name="q55" value="b"> B) Solo en el proceso de amparo</label>
                                                <label><input type="radio" name="q55" value="c"> C) En el recurso de amparo y hábeas corpus</label>
                                                <div class="feedback" data-question="q55"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿Qué excepción existe al principio de doble instancia en materia penal?</p>
                                                <label><input type="radio" name="q56" value="a"> A) No hay excepciones</label>
                                                <label><input type="radio" name="q56" value="b"> B) En delitos menores con penas inferiores a tres años</label>
                                                <label><input type="radio" name="q56" value="c"> C) Solo en casos de delitos graves</label>
                                                <div class="feedback" data-question="q56"></div>
                                            </div>
                                            <button onclick="checkAnswers('q53', 'q54', 'q55', 'q56')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Accordion Item 8.4: Principio de Oralidad y Escritura -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-8-4">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">4. Principio de Oralidad y Escritura</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-8-4" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-4-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-4-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-4-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-4-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-8-4-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Principio de Oralidad y Escritura" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">El <strong>principio de oralidad y escritura</strong> se refiere a las formas en que se desarrolla el proceso judicial: mediante debates verbales (oralidad) o a través de documentos escritos (escritura), combinándose según la naturaleza del proceso.</p>
                                        
                                        <h4 class="font-semibold mb-2">Definición Formal</h4>
                                        <p class="text-sm mb-4">La oralidad es la forma de desarrollo del proceso mediante debates verbales, mientras que la escritura se basa en documentos escritos. El sistema judicial costarricense combina ambos principios según la naturaleza del proceso.</p>
                                        
                                        <h4 class="font-semibold mb-2">Características de la Oralidad</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Inmediatez:</strong> Contacto directo entre juez y partes.</li>
                                            <li><strong>Concentración:</strong> Actuaciones en audiencias continuas.</li>
                                            <li><strong>Publicidad:</strong> Transparencia del proceso.</li>
                                            <li><strong>Celeridad:</strong> Mayor agilidad procesal.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Características de la Escritura</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Seguridad:</strong> Registro permanente de actuaciones.</li>
                                            <li><strong>Reflexión:</strong> Análisis detenido de los argumentos.</li>
                                            <li><strong>Previsibilidad:</strong> Mayor certeza procesal.</li>
                                            <li><strong>Formalismo:</strong> Estructura rigurosa del proceso.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Base Legal en Costa Rica</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Código Procesal Civil:</strong> Artículo 2.6 - Principio de oralidad para audiencias.</li>
                                            <li><strong>Código Procesal Penal:</strong> Artículo 19 - Oralidad como principio rector del proceso penal.</li>
                                        </ul>
                                    </div>
                                    <div id="tab-8-4-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: Predominio de la oralidad en el juicio penal</p>
                                                <p class="text-sm mt-2">Proceso penal por robo agravado con un valor de ₡5 millones donde se aplica predominantemente el principio de oralidad. 1) Audiencia preliminar oral para admitir pruebas y resolver excepciones. 2) Debate oral con recepción directa de testimonios y peritajes. 3) Alegatos finales presentados verbalmente por las partes. 4) Sentencia dictada inmediatamente después del debate. La oralidad permite una valoración directa de la prueba por parte del juez, garantizando la inmediación y la concentración, lo que contribuye a una justicia más ágil y transparente.</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Predominio de la escritura en el proceso civil ordinario</p>
                                                <p class="text-sm mt-2">Demanda por incumplimiento de contrato de arrendamiento por ₡2 millones con predominio del principio de escritura. 1) Demanda escrita con todos los hechos y fundamentos de derecho. 2) Contestación escrita por parte del demandado. 3) Pruebas documentales presentadas por escrito. 4) Sentencia escrita con motivación detallada. La escritura proporciona seguridad jurídica, permite un análisis reflexivo de los argumentos y crea un registro permanente de las actuaciones, garantizando la previsibilidad y la formalidad del proceso.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Combinación de ambos principios en el proceso de familia</p>
                                                <p class="text-sm mt-2">En un proceso de divorcio con hijos, se combina la oralidad y la escritura. 1) Escritura: La demanda, contestación y escrito de conciliación se presentan por escrito. 2) Oralidad: La audiencia de conciliación y las audiencias sobre custodia se realizan de forma oral, permitiendo el diálogo directo entre las partes y el juez. 3) Escritura: La sentencia final se dicta por escrito con motivación detallada. Esta combinación permite la reflexión necesaria en aspectos complejos y la inmediatez en la resolución de controversias específicas.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Oralidad en el proceso constitucional</p>
                                                <p class="text-sm mt-2">En el recurso de amparo, aunque es un proceso escrito en su mayor parte, se aplica el principio de oralidad en ciertos aspectos. 1) Escritura: El escrito de interposición del recurso y los escritos de las partes son fundamentales. 2) Oralidad: La audiencia oral (si se celebra) permite a las partes exponer sus argumentos directamente ante los jueces. 3) Escritura: La sentencia se dicta por escrito. La combinación de ambos principios permite una tutela judicial efectiva que garantice la protección de los derechos fundamentales de manera ágil pero con la formalidad necesaria.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-8-4-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 2.6: Principio de oralidad para audiencias</p>
                                            <p>Artículo 3.1: Principio de escritura</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 19: Oralidad como principio rector del proceso penal</p>
                                            <p>Artículo 20: Principio de escritura en ciertos actos</p>
                                            <p><br><strong>Ley de Jurisdicción Constitucional:</strong></p>
                                            <p>Artículo 7: Oralidad en audiencias constitucionales</p>
                                            <p><br><strong>Código de Niñez y Adolescencia:</strong></p>
                                            <p>Artículo 85: Oralidad en audiencias de familia</p>
                                        </div>
                                    </div>
                                    <div id="tab-8-4-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Qué característica define la oralidad en el proceso judicial?</p>
                                                <label><input type="radio" name="q57" value="a"> A) Basarse en documentos escritos</label>
                                                <label><input type="radio" name="q57" value="b"> B) Desarrollo mediante debates verbales</label>
                                                <label><input type="radio" name="q57" value="c"> C) Ser un proceso secreto</label>
                                                <div class="feedback" data-question="q57"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿Qué ventaja tiene la escritura en el proceso judicial?</p>
                                                <label><input type="radio" name="q58" value="a"> A) Rapidez del juicio</label>
                                                <label><input type="radio" name="q58" value="b"> B) Registro permanente de actuaciones</label>
                                                <label><input type="radio" name="q58" value="c"> C) Contacto directo entre juez y partes</label>
                                                <div class="feedback" data-question="q58"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿En qué proceso se aplica predominantemente la oralidad en Costa Rica?</p>
                                                <label><input type="radio" name="q59" value="a"> A) En todos los procesos por igual</label>
                                                <label><input type="radio" name="q59" value="b"> B) En el proceso penal ordinario</label>
                                                <label><input type="radio" name="q59" value="c"> C) Solo en el proceso civil</label>
                                                <div class="feedback" data-question="q59"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿Qué principio combina la oralidad y la escritura en el proceso de familia?</p>
                                                <label><input type="radio" name="q60" value="a"> A) Solo oralidad</label>
                                                <label><input type="radio" name="q60" value="b"> B) Solo escritura</label>
                                                <label><input type="radio" name="q60" value="c"> C) Combinación de ambos principios</label>
                                                <div class="feedback" data-question="q60"></div>
                                            </div>
                                            <button onclick="checkAnswers('q57', 'q58', 'q59', 'q60')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Accordion Item 8.5: Principio de Concentración e Inmediación -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-8-5">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">5. Principio de Concentración e Inmediación</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-8-5" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-5-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-5-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-5-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-5-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-8-5-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Principio de Concentración e Inmediación" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">El <strong>principio de concentración e inmediación</strong> busca eficiencia y contacto directo en el proceso judicial: la concentración reúne la actividad procesal en el menor número de actos, mientras la inmediación exige el contacto directo del juez con las partes y pruebas.</p>
                                        
                                        <h4 class="font-semibold mb-2">Definición Formal</h4>
                                        <p class="text-sm mb-4">La concentración es la unificación de varios actos procesales en uno solo, mientras la inmediación es el contacto directo del juez con las partes y pruebas durante el proceso.</p>
                                        
                                        <h4 class="font-semibold mb-2">Características de la Concentración</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Unificación:</strong> Reunir varios actos procesales en uno solo.</li>
                                            <li><strong>Economía procesal:</strong> Evitar dilaciones y trámites innecesarios.</li>
                                            <li><strong>Celeridad:</strong> Agilizar la resolución del conflicto.</li>
                                            <li><strong>Evitar dispersión:</strong> Mantener unidad en el proceso.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Características de la Inmediación</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Contacto directo:</strong> Juez presencia recepción de pruebas.</li>
                                            <li><strong>Percepción personal:</strong> Valoración directa de testimonios.</li>
                                            <li><strong>Prohibición de delegar:</strong> El juez debe actuar personalmente.</li>
                                            <li><strong>Mejor comprensión:</strong> Mayor acercamiento a la verdad material.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Relación entre ambos principios</h4>
                                        <p class="text-sm mb-4">La concentración facilita la inmediación al permitir que el juez tenga contacto directo con todas las pruebas y partes en audiencias. Ambos principios garantizan un proceso más eficiente y cercano a la verdad material.</p>
                                        
                                        <h4 class="font-semibold mb-2">Base Legal en Costa Rica</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Código Procesal Civil:</strong> Artículo 2.7 - Principio de concentración e inmediación.</li>
                                            <li><strong>Código Procesal Penal:</strong> Artículo 21 - Principio de inmediación en el juicio oral.</li>
                                        </ul>
                                    </div>
                                    <div id="tab-8-5-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: Concentración en juicio oral penal por fraude</p>
                                                <p class="text-sm mt-2">Proceso penal por fraude procesal con un monto de ₡20 millones donde se aplica el principio de concentración para agilizar el juicio. 1) Audiencia única para recibir todas las pruebas testimoniales y periciales. 2) Debate continuo sin interrupciones hasta su conclusión. 3) Alegatos e informe presentados en la misma audiencia. 4) Sentencia inmediata al finalizar el debate. La concentración evita dilaciones y permite una valoración directa y completa de la prueba por parte del juez, garantizando la celeridad y la economía procesal.</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Inmediación en proceso de familia por custodia</p>
                                                <p class="text-sm mt-2">Proceso de determinación de custodia de menores donde el juez aplica el principio de inmediación para evaluar directamente a las partes. 1) Entrevista personal del juez con los padres. 2) Diálogo directo con los niños en cámara Gesell. 3) Presencia física en el domicilio familiar para inspección. 4) Valoración directa de testigos y peritos. La inmediación permite al juez tener una percepción personal de las circunstancias, valorar directamente la credibilidad de los testimonios y tomar decisiones basadas en una comprensión íntima de la realidad familiar.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Combinación de ambos principios en proceso civil</p>
                                                <p class="text-sm mt-2">En un proceso civil por incumplimiento contractual, se combina la concentración e inmediación. 1) Concentración: La audiencia preliminar resuelve todas las cuestiones previas y fija los hechos controvertidos en una sola actuación. 2) Inmediación: La audiencia de juicio oral permite la recepción directa de pruebas y alegatos. 3) Concentración: La sentencia se dicta al finalizar la audiencia sin demoras. Esta combinación agiliza el proceso mientras garantiza una valoración directa de la prueba por el juez.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Inmediación en procesos constitucionales</p>
                                                <p class="text-sm mt-2">En un recurso de amparo por violación de derechos fundamentales, se aplica el principio de inmediación. 1) El juez recibe directamente las pruebas presentadas por las partes. 2) Realiza entrevistas personales con los afectados para evaluar la gravedad de la violación. 3) Verifica personalmente las condiciones en las que se produjo la violación. 4) Dicta sentencia basada en su percepción directa de los hechos. La inmediación permite una tutela judicial efectiva que garantice la protección inmediata de los derechos fundamentales.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-8-5-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 2.7: Principio de concentración e inmediación</p>
                                            <p>Artículo 3.2: Principio de oralidad concentrada</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 21: Principio de inmediación en el juicio oral</p>
                                            <p>Artículo 22: Principio de concentración en el juicio oral</p>
                                            <p><br><strong>Ley de Jurisdicción Constitucional:</strong></p>
                                            <p>Artículo 5: Principio de inmediación en audiencias constitucionales</p>
                                            <p><br><strong>Código de Niñez y Adolescencia:</strong></p>
                                            <p>Artículo 86: Principio de inmediación en procesos de familia</p>
                                        </div>
                                    </div>
                                    <div id="tab-8-5-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Qué establece el principio de concentración?</p>
                                                <label><input type="radio" name="q61" value="a"> A) Contacto directo del juez con las partes</label>
                                                <label><input type="radio" name="q61" value="b"> B) Unificar varios actos procesales en uno solo</label>
                                                <label><input type="radio" name="q61" value="c"> C) Basarse en documentos escritos</label>
                                                <div class="feedback" data-question="q61"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿Qué caracteriza el principio de inmediación?</p>
                                                <label><input type="radio" name="q62" value="a"> A) Rapidez del juicio</label>
                                                <label><input type="radio" name="q62" value="b"> B) Contacto directo del juez con las partes y pruebas</label>
                                                <label><input type="radio" name="q62" value="c"> C) Análisis escrito de los hechos</label>
                                                <div class="feedback" data-question="q62"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿Cómo se relacionan la concentración e inmediación?</p>
                                                <label><input type="radio" name="q63" value="a"> A) Son principios contradictorios</label>
                                                <label><input type="radio" name="q63" value="b"> B) La concentración facilita la inmediación</label>
                                                <label><input type="radio" name="q63" value="c"> C) No tienen relación entre sí</label>
                                                <div class="feedback" data-question="q63"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿En qué tipo de proceso es especialmente importante la inmediación?</p>
                                                <label><input type="radio" name="q64" value="a"> A) Solo en procesos civiles</label>
                                                <label><input type="radio" name="q64" value="b"> B) En procesos de familia</label>
                                                <label><input type="radio" name="q64" value="c"> C) En todos los procesos por igual</label>
                                                <div class="feedback" data-question="q64"></div>
                                            </div>
                                            <button onclick="checkAnswers('q61', 'q62', 'q63', 'q64')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Accordion Item 8.6: Principio de Publicidad -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-8-6">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">6. Principio de Publicidad</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-8-6" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-6-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-6-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-6-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-6-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-8-6-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Principio de Publicidad" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">El <strong>principio de publicidad</strong> garantiza el acceso del público a las actuaciones judiciales, asegurando la transparencia y el control social en la administración de justicia.</p>
                                        
                                        <h4 class="font-semibold mb-2">Definición Formal</h4>
                                        <p class="text-sm mb-4">El principio de publicidad establece que las actuaciones judiciales deben ser accesibles al público, salvo excepciones justificadas, para garantizar la transparencia del proceso y el control social sobre la administración de justicia.</p>
                                        
                                        <h4 class="font-semibold mb-2">Tipos de Publicidad</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Publicidad absoluta:</strong> Acceso irrestricto del público a todas las actuaciones judiciales sin limitaciones.</li>
                                            <li><strong>Publicidad relativa:</strong> Acceso limitado en casos específicos para proteger derechos fundamentales.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Fundamentos del Principio</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Transparencia:</strong> Permite a la sociedad conocer cómo se administra justicia.</li>
                                            <li><strong>Control social:</strong> Faculta a la ciudadanía a supervisar el actuar judicial.</li>
                                            <li><strong>Confianza en el sistema:</strong> Refuerza la credibilidad de la justicia ante la sociedad.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Excepciones a la Publicidad</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Protección de menores:</strong> Para preservar la intimidad y el desarrollo de los niños.</li>
                                            <li><strong>Secreto profesional o comercial:</strong> Para proteger información confidencial.</li>
                                            <li><strong>Derechos fundamentales:</strong> Cuando la publicidad pueda perjudicar derechos fundamentales.</li>
                                            <li><strong>Intereses de la justicia:</strong> Cuando la publicidad pueda perjudicar el desarrollo del proceso.</li>
                                        </ul>
                                    </div>
                                    <div id="tab-8-6-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: Publicidad absoluta en juicio penal por corrupción</p>
                                                <p class="text-sm mt-2">Proceso penal contra un funcionario público por peculado y cohecho con un monto de ₡150 millones, con plena publicidad. 1) Acceso libre del público y medios de comunicación a todas las audiencias. 2) Transmisión en vivo del juicio a través del sistema de medios del Poder Judicial. 3) Publicación íntegra de la sentencia en el sitio web del Poder Judicial. 4) Registro público de todas las actuaciones procesales. Esta publicidad garantiza el control social sobre un caso de alta relevancia pública y refuerza la transparencia en la administración de justicia.</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Publicidad restringida en proceso de violencia doméstica</p>
                                                <p class="text-sm mt-2">Proceso de medidas de protección por violencia doméstica donde se limita la publicidad para proteger a las víctimas. 1) Acceso restringido únicamente a las partes y sus abogados. 2) Reserva de identidad de las víctimas y testigos menores de edad. 3) Prohibición de fotografías o grabaciones durante las audiencias. 4) Sentencia anonimizada en su publicación para proteger datos sensibles. Esta restrucción busca proteger la intimidad y seguridad de las víctimas mientras se garantiza el debido proceso.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Publicidad relativa en procesos de familia</p>
                                                <p class="text-sm mt-2">En un proceso de divorcio con hijos menores, se aplica publicidad relativa. 1) Las audiencias sobre custodia son públicas pero con acceso limitado a personas directamente relacionadas con el caso. 2) Se prohíbe la presencia de menores no relacionados en las audiencias. 3) La sentencia se publica con reservas sobre datos personales sensibles. 4) Se limita la difusión de información sobre la vida privada de las partes. Esta medida equilibra la transparencia con la protección de la intimidad familiar.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Publicidad en procesos constitucionales</p>
                                                <p class="text-sm mt-2">En un recurso de amparo por violación de derechos fundamentales, se aplica publicidad con ciertas restricciones. 1) Las audiencias son públicas pero con acceso controlado para evitar disturbios. 2) Se reserva la identidad de las víctimas cuando su seguridad está en riesgo. 3) La sentencia se publica con la debida motivación pero con reservas sobre datos personales. 4) Se permite la cobertura mediática con ciertas limitaciones para proteger la dignidad de las partes. Esta combinación garantiza la transparencia mientras se protegen derechos fundamentales.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-8-6-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Constitución Política de Costa Rica:</strong></p>
                                            <p>Artículo 30: Publicidad de los actos públicos</p>
                                            <p><br><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 2.8: Principio de publicidad</p>
                                            <p>Artículo 4.1: Excepciones a la publicidad</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 3: Principio de publicidad</p>
                                            <p>Artículo 4: Excepciones a la publicidad</p>
                                            <p><br><strong>Ley de Jurisdicción Constitucional:</strong></p>
                                            <p>Artículo 6: Publicidad en procesos constitucionales</p>
                                            <p><br><strong>Código de Niñez y Adolescencia:</strong></p>
                                            <p>Artículo 87: Publicidad restringida en procesos de familia</p>
                                        </div>
                                    </div>
                                    <div id="tab-8-6-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Qué establece el principio de publicidad?</p>
                                                <label><input type="radio" name="q65" value="a"> A) Que los procesos deben ser secretos</label>
                                                <label><input type="radio" name="q65" value="b"> B) Que las actuaciones judiciales deben ser accesibles al público</label>
                                                <label><input type="radio" name="q65" value="c"> C) Que solo los jueces pueden acceder a los procesos</label>
                                                <div class="feedback" data-question="q65"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿Cuál es el fundamento principal del principio de publicidad?</p>
                                                <label><input type="radio" name="q66" value="a"> A) Proteger la intimidad de las partes</label>
                                                <label><input type="radio" name="q66" value="b"> B) Garantizar la transparencia y control social</label>
                                                <label><input type="radio" name="q66" value="c"> C) Agilizar los procesos judiciales</label>
                                                <div class="feedback" data-question="q66"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿En qué caso se aplica publicidad restringida?</p>
                                                <label><input type="radio" name="q67" value="a"> A) En todos los casos por igual</label>
                                                <label><input type="radio" name="q67" value="b"> B) En casos de violencia doméstica</label>
                                                <label><input type="radio" name="q67" value="c"> C) Solo en procesos penales graves</label>
                                                <div class="feedback" data-question="q67"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿Qué excepción justifica limitar la publicidad en procesos judiciales?</p>
                                                <label><input type="radio" name="q68" value="a"> A) Solo por interés de las partes</label>
                                                <label><input type="radio" name="q68" value="b"> B) Para proteger derechos fundamentales</label>
                                                <label><input type="radio" name="q68" value="c"> C) Nunca se puede limitar</label>
                                                <div class="feedback" data-question="q68"></div>
                                            </div>
                                            <button onclick="checkAnswers('q65', 'q66', 'q67', 'q68')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Accordion Item 8.7: Principio de Motivación -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-8-7">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">7. Principio de Motivación</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-8-7" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-7-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-7-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-7-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-7-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-8-7-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Principio de Motivación" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">El <strong>principio de motivación</strong> exige a los jueces fundamentar sus resoluciones con argumentos lógicos y jurídicos que expliquen las razones de su decisión.</p>
                                        
                                        <h4 class="font-semibold mb-2">Definición Formal</h4>
                                        <p class="text-sm mb-4">El principio de motivación requiere que las resoluciones judiciales contengan una explicación razonada de los hechos y del derecho aplicado, justificando la decisión adoptada.</p>
                                        
                                        <h4 class="font-semibold mb-2">Requisitos de la Motivación</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Exhaustividad:</strong> Analizar todos los puntos relevantes del caso.</li>
                                            <li><strong>Claridad:</strong> Explicar las razones de manera comprensible y precisa.</li>
                                            <li><strong>Coherencia:</strong> Argumentos lógicos y consistentes entre sí.</li>
                                            <li><strong>Complejidad:</strong> Análisis jurídico profundo de las normas aplicables.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Importancia para la Seguridad Jurídica</h4>
                                        <p class="text-sm mb-4">La motivación adecuada de las resoluciones judiciales permite a las partes comprender las razones de la decisión, controlar su legalidad mediante recursos y predecir el criterio judicial en casos futuros.</p>
                                        
                                        <h4 class="font-semibold mb-2">Contenido de la Motivación</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Hechos:</strong> Descripción de los hechos probados y no probados.</li>
                                            <li><base>Derecho:</strong> Indicación de las normas jurídicas aplicables.</li>
                                            <li><base>Valoración:</strong> Explicación de cómo los hechos se subsumen en el derecho.</li>
                                            <li><base>Decisión:</strong> Resolución clara y precisa sobre las pretensiones.</li>
                                        </ul>
                                    </div>
                                    <div id="tab-8-7-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: Sentencia bien fundamentada en despido improcedente</p>
                                                <p class="text-sm mt-2">Sentencia del Tribunal de Trabajo que declara con lugar el despido improcedente de un trabajador con 15 años de labor. 1) Análisis exhaustivo de la prueba testimonial y documental presentada. 2) Aplicación detallada de lo establece el Código de Trabajo sobre despido improcedente. 3) Valoración específica de cada medio probatorio y su incidencia en el caso. 4) Fundamentación clara del monto de la indemnización (₡8 millones) basada en el salario y antigüedad del trabajador. Esta motivación transparente permite a las partes entender las razones de la decisión y facilita su posible impugnación o cumplimiento.</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Falta de motivación en responsabilidad civil médica</p>
                                                <p class="text-sm mt-2">Resolución que desestima una demanda por negligencia médica sin fundamentación adecuada. 1) Omisiones graves al no analizar los peritajes médicos presentados. 2) Contradicciones entre los considerandos y la parte resolutiva. 3) Falta de análisis de la normativa aplicable sobre responsabilidad civil. 4) Argumentos genéricos sin conexión específica con el caso concreto. Esta falta de motivación vulnera el derecho de defensa de las partes y la seguridad jurídica, pudiendo ser motivo de nulidad de la resolución.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Motivación en procesos constitucionales</p>
                                                <p class="text-sm mt-2">Sentencia de la Sala Constitucional que declara procedente un recurso de amparo. 1) Análisis detallado de los hechos que vulneran los derechos fundamentales. 2) Aplicación de la jurisprudencia constitucional relevante. 3) Valoración de la proporcionalidad de la medida adoptada por la autoridad. 4) Fundamentación clara de por qué se violaron los derechos y por qué la tutela judicial es necesaria. Esta motivación exhaustiva garantiza la protección efectiva de los derechos fundamentales y la coherencia del derecho constitucional.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Motivación en procesos penales</p>
                                                <p class="text-sm mt-2">Sentencia condenatoria en un proceso penal por homicidio. 1) Análisis exhaustivo de la prueba testifical, pericial y documental. 2) Aplicación detallada del tipo penal y las circunstancias agravantes. 3) Valoración de la credibilidad de los testigos y la fiabilidad de las pruebas. 4) Fundamentación clara de la pena aplicada basada en la culpabilidad y las circunstancias del caso. Esta motivación garantiza que la conden se base en elementos objetivos y razonados, evitando arbitrariedades y protegiendo los derechos del imputado.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-8-7-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Constitución Política de Costa Rica:</strong></p>
                                            <p>Artículo 165: Deber de motivar las resoluciones judiciales</p>
                                            <p><br><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 61: Requisitos de la sentencia</p>
                                            <p>Artículo 62: Motivación de la sentencia</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 363: Requisitos de la sentencia</p>
                                            <p>Artículo 364: Motivación de la sentencia</p>
                                            <p><br><strong>Ley de Jurisdicción Constitucional:</strong></p>
                                            <p>Artículo 10: Motivación de las sentencias constitucionales</p>
                                        </div>
                                    </div>
                                    <div id="tab-8-7-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Qué establece el principio de motivación?</p>
                                                <label><input type="radio" name="q69" value="a"> A) Que las sentencias deben ser breves</label>
                                                <label><input type="radio" name="q69" value="b"> B) Que las resoluciones deben estar fundamentadas</label>
                                                <label><input type="radio" name="q69" value="c"> C) Que los procesos deben ser ágiles</label>
                                                <div class="feedback" data-question="q69"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿Qué requisito es esencial para una buena motivación?</p>
                                                <label><input type="radio" name="q70" value="a"> A) Rapidez en la emisión de resoluciones</label>
                                                <label><input type="radio" name="q70" value="b"> B) Análisis exhaustivo de los hechos y el derecho</label>
                                                <label><input type="radio" name="q70" value="c"> C) Uso de lenguaje técnico exclusivo</label>
                                                <div class="feedback" data-question="q70"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿Por qué es importante la motivación en las resoluciones judiciales?</p>
                                                <label><input type="radio" name="q71" value="a"> A) Para agilizar los procesos</label>
                                                <label><input type="radio" name="q71" value="b"> B) Para garantizar la seguridad jurídica</label>
                                                <label><input type="radio" name="q71" value="c"> C) Para proteger la intimidad de las partes</label>
                                                <div class="feedback" data-question="q71"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿Qué contenido debe incluir una motivación adecuada?</p>
                                                <label><input type="radio" name="q72" value="a"> A) Solo los hechos del caso</label>
                                                <label><input type="radio" name="q72" value="b"> B) Análisis de hechos, derecho y valoración</label>
                                                <label><input type="radio" name="q72" value="c"> C) Opiniones personales del juez</label>
                                                <div class="feedback" data-question="q72"></div>
                                            </div>
                                            <button onclick="checkAnswers('q69', 'q70', 'q71', 'q72')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Accordion Item 8.8: Principio de Moralidad -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-8-8">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">8. Principio de Moralidad</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-8-8" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-8-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-8-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-8-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-8-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-8-8-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Principio de Moralidad" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">El <strong>principio de moralidad</strong> exige a todos los sujetos procesales actuar con buena fe, honestidad y probidad en el desarrollo del proceso judicial.</p>
                                        
                                        <h4 class="font-semibold mb-2">Definición Formal</h4>
                                        <p class="text-sm mb-4">El principio de moralidad procesal requiere que todos los intervinientes en el proceso actúen con lealtad, veracidad y decoro, observando un comportamiento ejemplar que garantice la dignidad de la administración de justicia.</p>
                                        
                                        <h4 class="font-semibold mb-2">Componentes del Principio</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Buena fe:</strong> Lealtad y veracidad en las actuaciones.</li>
                                            <li><strong>Honestidad:</strong> Proceder con rectitud y sinceridad.</li>
                                            <li><strong>Probidad:</strong> Integridad y decoro en el proceder.</li>
                                            <li><strong>Prohibición de abuso:</strong> Evitar conductas maliciosas.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Relación con la Ética Profesional</h4>
                                        <p class="text-sm mb-4">El principio de moralidad se vincula directamente con la ética profesional de abogados, jueces y funcionarios judiciales, quienes deben observar un comportamiento ejemplar que garantice la dignidad de la administración de justicia.</p>
                                        
                                        <h4 class="font-semibold mb-2">Conductas Contrarias a la Moralidad</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Litigación temeraria:</strong> Interposición de recursos sin fundamento.</li>
                                            <li><strong>Presentación de pruebas falsas:</strong> Documentación o testimonios mendaces.</li>
                                            <li><strong>Obstrucción de la justicia:</strong> Actos que dificultan el normal desarrollo del proceso.</li>
                                            <li><strong>Abuso de derecho:</strong> Ejercicio abusivo de facultades procesales.</li>
                                        </ul>
                                    </div>
                                    <div id="tab-8-8-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: Litigio temerario y prueba falsa</p>
                                                <p class="text-sm mt-2">En un proceso civil por incumplimiento de contrato de ₡25 millones, se detectan conductas contrarias al principio de moralidad procesal. 1) Presentación de documentos falsos para respaldar la demanda. 2) Testimonios contradictorios de testigos ofrecidos por la parte actora, testaferros o testigos complacientes. 3) Interposición maliciosa de recursos para dilatar el proceso. 4) Ocultamiento de información relevante durante la etapa probatoria. Estas conductas vulneran la buena fe y la honestidad requeridas en el proceso judicial.</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Abuso de derecho por parte de una parte</p>
                                                <p class="text-sm mt-2">En un proceso de divorcio, una parte interpone múltiples recursos dilatorios sin fundamento, con el único propósito de prolongar el proceso y perjudicar a la otra parte. Además, presenta pruebas obtenidas ilegalmente y hace alegaciones falsas sobre la conducta de la otra parte. Estas acciones constituyen un abuso de derecho que viola el principio de moralidad procesal, ya que buscan obtener una ventaja injusta mediante conductas desleales y maliciosas.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Conducta ética de un abogado</p>
                                                <p class="text-sm mt-2">En un proceso penal, el defensor del imputado actúa con probidad y buena fe. Aunque defiende los intereses de su cliente, lo hace con honestidad, presentando solo pruebas veraces y argumentos jurídicos sólidos. Cuando descubre que su cliente ha cometido un error al declarar, lo corrige con transparencia ante el tribunal. Este comportamiento ejemplar refleja el cumplimiento del principio de moralidad, garantizando que la defensa se realice con decoro y respeto por la justicia.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Sanciones por conducta contraria a la moralidad</p>
                                                <p class="text-sm mt-2">En un proceso civil, una parte presenta documentos falsos y testifica en contra de sus propios anteriores testimonios. El juez aplica diversas sanciones por conducta contraria al principio de moralidad: 1) Multas procesales por litigio temerario. 2) Desestimación de la demanda por conducta procesal contraria a la buena fe. 3) Condena en costas con una indemnización adicional a criterio objetivo del juez. 4) Remisión al Colegio de Abogados para posible sanción disciplinaria. Estas sanciones buscan proteger la integridad del proceso y disuadir conductas desleales.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-8-8-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Constitución Política de Costa Rica:</strong></p>
                                            <p>Artículo 20: Principio de moralidad en la función pública</p>
                                            <p><br><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 2.3: Principio de buena fe procesal</p>
                                            <p>Artículo 4.2: Sanciones por conducta contraria a la moralidad</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 5: Principio de moralidad</p>
                                            <p>Artículo 6: Sanciones por conducta contraria a la moralidad</p>
                                            <p><br><strong>Código de Ética Profesional:</strong></p>
                                            <p>Artículo 15: Deber de honestidad y buena fe</p>
                                        </div>
                                    </div>
                                    <div id="tab-8-8-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Qué establece el principio de moralidad procesal?</p>
                                                <label><input type="radio" name="q73" value="a"> A) Que los procesos deben ser secretos</label>
                                                <label><input type="radio" name="q73" value="b"> B) Que todos deben actuar con buena fe y honestidad</label>
                                                <label><input type="radio" name="q73" value="c"> C) Que las sentencias deben breves</label>
                                                <div class="feedback" data-question="q73"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿Qué conducta contraria a la moralidad procesal?</p>
                                                <label><input type="radio" name="q74" value="a"> A) Presentar pruebas veraces</label>
                                                <label><input type="radio" name="q74" value="b"> B) Litigación temeraria y prueba falsa</label>
                                                <label><input type="radio" name="q74" value="c"> C) Defender los derechos de las partes</label>
                                                <div class="feedback" data-question="q74"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿A quién se vincula el principio de moralidad?</p>
                                                <label><input type="radio" name="q75" value="a"> A) Solo a los jueces</label>
                                                <label><input type="radio" name="q75" value="b"> B) A todos los intervinientes en el proceso</label>
                                                <label><input type="radio" name="q75" value="c"> C) Solo a las partes</label>
                                                <div class="feedback" data-question="q75"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿Qué sanción puede aplicarse por conducta contraria a la moralidad?</p>
                                                <label><input type="radio" name="q76" value="a"> A) Ninguna sanción</label>
                                                <label><input type="radio" name="q76" value="b"> B) Multas y desestimación de pretensiones</label>
                                                <label><input type="radio" name="q76" value="c"> C) Solo amonestación verbal</label>
                                                <div class="feedback" data-question="q76"></div>
                                            </div>
                                            <button onclick="checkAnswers('q73', 'q74', 'q75', 'q76')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Accordion Item 8.9: Principio de Humanización -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-8-9">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">9. Principio de Humanización</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-8-9" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-9-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-9-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-9-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-9-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-8-9-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Principio de Humanización" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">El <strong>principio de humanización</strong> busca hacer el proceso judicial más accesible, comprensible y cercano a las personas, priorizando la dignidad humana sobre el formalismo excesivo.</p>
                                        
                                        <h4 class="font-semibold mb-2">Definición Formal</h4>
                                        <p class="text-sm mb-4">El principio de humanización del proceso judicial consiste en adaptar los procedimientos a las características y necesidades específicas de las personas, especialmente aquellas en situación de vulnerabilidad, garantizando el acceso efectivo a la justicia.</p>
                                        
                                        <h4 class="font-semibold mb-2">Características del Principio</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Simplificación:</strong> Reducir formalismos innecesarios.</li>
                                            <li><strong>Accesibilidad:</strong> Facilitar el acceso a la justicia.</li>
                                            <li><strong>Empatía judicial:</strong> Comprensión de la situación humana.</li>
                                            <li><strong>Lenguaje claro:</strong> Evitar tecnicismos innecesarios.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Relación con Derechos Fundamentales</h4>
                                        <p class="text-sm mb-4">El principio de humanización se vincula directamente con los derechos fundamentales de acceso a la justicia, tutela judicial efectiva y debido proceso, garantizando que las personas puedan comprender y participar activamente en los procesos que les afectan.</p>
                                        
                                        <h4 class="font-semibold mb-2">Aplicación en Diferentes Materias</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Procesos de familia:</strong> Priorizar el interés superior del niño y adaptar procedimientos.</li>
                                            <li><strong>Justicia penal juvenil:</strong> Sanciones socioeducativas en lugar de privativas de libertad.</li>
                                            <li><strong>Personas en vulnerabilidad:</strong> Atención prioritaria y adaptaciones físicas.</li>
                                        </ul>
                                    </div>
                                    <div id="tab-8-9-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: Procesos de familia con medidas de humanización</p>
                                                <p class="text-sm mt-2">Proceso de divorcio contencioso donde se aplican medidas de humanización para proteger el interés superior de los niños. 1) Espacios amigables para niños en los juzgados. 2) Protocolo de atención con psicólogos especializados. 3) Audiencias separadas para evitar confrontación. 4) Uso de lenguaje adaptado para explicar el proceso a los menores. Jurisprudencia costarricense ha señalado: "La humanización de la justicia no es una opción, sino un imperativo constitucional que exige adaptar los procesos judiciales a las características y necesidades específicas de las personas, especialmente aquellas en situación de vulnerabilidad. Los jueces deben superar el formalismo excesivo y priorizar la tutela efectiva de los derechos fundamentales."</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Justicia penal juvenil humanizada</p>
                                                <p class="text-sm mt-2">Proceso contra un adolescente de 16 años por robo simple, aplicando el principio de humanización del sistema penal juvenil. 1) Lenguaje adaptado y explicación sencilla del proceso. 2) Sanciones socioeducativas en lugar de privativas de libertad. 3) Participación familiar en el proceso de reinserción. 4) Evaluación de las necesidades educativas y psicológicas del adolescente. Este enfoque busca la reinserción social del adolescente más que su castigo, reconociendo su condición de persona en desarrollo.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Atención a personas en vulnerabilidad</p>
                                                <p class="text-sm mt-2">Proceso penal por estafa contra una persona adulta mayor de 78 años, aplicando medidas especiales de protección. 1) Atención prioritaria y sin tiempos de espera. 2) Adaptación física de instalaciones para accesibilidad. 3) Apoyo psicológico durante todo el proceso judicial. 4) Uso de lenguaje claro y sencillo en todas las actuaciones. Estas medidas garantizan que las personas adultas mayores puedan participar efectivamente en el proceso, superando barreras físicas y cognitivas.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Humanización en procesos constitucionales</p>
                                                <p class="text-sm mt-2">Recurso de amparo presentado por una persona con discapacidad aplicando el principio de humanización. 1) Adaptación de las instalaciones para personas con movilidad reducida. 2) Uso de tecnología de apoyo para facilitar la comunicación. 3) Asistencia de intérpretes de lengua de señas cuando es necesario. 4) Programación de audiencias en horarios que permitan la participación de personas con discapacidad. Estas medidas garantizan el efectivo acceso a la justicia de personas con discapacidad, superando barreras arquitectónicas y comunicativas.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-8-9-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Constitución Política de Costa Rica:</strong></p>
                                            <p>Artículo 41: Derecho a la justicia</p>
                                            <p>Artículo 42: Derechos de las personas con discapacidad</p>
                                            <p><br><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 2.9: Principio de humanización</p>
                                            <p>Artículo 5.1: Adaptación para personas con discapacidad</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 7: Principio de humanización en procesos con adolescentes</p>
                                            <p>Artículo 8: Adaptaciones para personas en vulnerabilidad</p>
                                            <p><br><strong>Ley de Igualdad de Oportunidades para Personas con Discapacidad:</strong></p>
                                            <p>Artículo 25: Accesibilidad a la justicia</p>
                                        </div>
                                    </div>
                                    <div id="tab-8-9-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Qué establece el principio de humanización del proceso judicial?</p>
                                                <label><input type="radio" name="q77" value="a"> A) Que los procesos deben ser secretos</label>
                                                <label><input type="radio" name="q77" value="b"> B) Adaptar los procedimientos a las necesidades de las personas</label>
                                                <label><input type="radio" name="q77" value="c"> C) Que solo los jueces pueden tomar decisiones</label>
                                                <div class="feedback" data-question="q77"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿A quién prioriza el principio de humanización?</p>
                                                <label><input type="radio" name="q78" value="a"> A) Solo a los jueces</label>
                                                <label><input type="radio" name="q78" value="b"> B) A todas las personas, especialmente vulnerables</label>
                                                <label><input type="radio" name="q78" value="c"> C) Solo a las partes en un proceso</label>
                                                <div class="feedback" data-question="q78"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿En qué materia es especialmente relevante el principio de humanización?</p>
                                                <label><input type="radio" name="q79" value="a"> A) Solo en procesos penales</label>
                                                <label><input type="radio" name="q79" value="b"> B) En procesos de familia</label>
                                                <label><input type="radio" name="q79" value="c"> C) En todos los procesos pero especialmente con personas vulnerables</label>
                                                <div class="feedback" data-question="q79"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿Qué característica define la humanización del proceso judicial?</p>
                                                <label><input type="radio" name="q80" value="a"> A) Formalismo riguroso</label>
                                                <label><input type="radio" name="q80" value="b"> B) Simplificación y accesibilidad</label>
                                                <label><input type="radio" name="q80" value="c"> C) Secrecismo en las actuaciones</label>
                                                <div class="feedback" data-question="q80"></div>
                                            </div>
                                            <button onclick="checkAnswers('q77', 'q78', 'q79', 'q80')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Accordion Item 8.10: Principio de Congruencia -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-8-10">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">10. Principio de Congruencia</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-8-10" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-10-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-10-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-10-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-10-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-8-10-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Principio de Congruencia" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">El <strong>principio de congruencia</strong> exige que la sentencia judicial corresponda con las pretensiones de las partes, los hechos del proceso y las normas jurídicas aplicables.</p>
                                        
                                        <h4 class="font-semibold mb-2">Definición Formal</h4>
                                        <p class="text-sm mb-4">El principio de congruencia establece que la sentencia judicial debe corresponder con las pretensiones solicitadas por las partes, los hechos alegados y probados en el proceso, y las normas jurídicas aplicables, sin resolver sobre cuestiones no planteadas ni conceder más de lo solicitado.</p>
                                        
                                        <h4 class="font-semibold mb-2">Dimensiones de la Congruencia</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Congruencia fáctica:</strong> Correspondencia entre los hechos alegados por las partes y los considerados en la sentencia.</li>
                                            <li><strong>Congruencia jurídica:</strong> Adecuación entre las normas jurídicas invocadas y las aplicadas en la resolución.</li>
                                            <li><strong>Congruencia petitoria:</strong> Armonía entre las pretensiones solicitadas y lo resuelto en la parte dispositiva.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Límites al Principio</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Delimitación:</strong> El juez no puede resolver sobre pretensiones no planteadas.</li>
                                            <li><strong>Prohibición de ultra petita:</strong> No conceder más de lo solicitado.</li>
                                            <li><strong>Prohibición de extra petita:</strong> No resolver sobre cuestiones no planteadas.</li>
                                            <li><strong>Prohibición de citra petita:</strong> No omitir resolver sobre todas las pretensiones.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Importancia del Principio</h4>
                                        <p class="text-sm mb-4">La congruencia garantiza que las partes tengan certeza sobre el alcance de la decisión judicial, evitando sorpresas y garantizando el derecho de defensa y el debido proceso.</p>
                                    </div>
                                    <div id="tab-8-10-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: Sentencia congruente en incumplimiento contractual</p>
                                                <p class="text-sm mt-2">Demanda por incumplimiento de contrato de compraventa de un vehículo por ₡8 millones, con sentencia que aplica correctamente el principio de congruencia. 1) Congruencia fáctica: analiza exclusivamente los hechos relacionados con el contrato de compraventa. 2) Congruencia jurídica: aplica correctamente los artículos pertinentes, ej: 701, 702, 1022 del Código Civil. 3) Congruencia petitoria: resuelve exactamente sobre la pretensión de cumplimiento forzoso y daños. 4) Monto congruente: condena al pago exacto de ₡8 millones más intereses y daños probados. Esta sentencia garantiza que las partes tengan certeza sobre el alcance de la decisión.</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Incongruencia procesal en despido improcedente</p>
                                                <p class="text-sm mt-2">Proceso laboral donde el trabajador reclama ₡5 millones por despido improcedente, pero la sentencia incurre en incongruencia. 1) Ultra petita: condena al pago de ₡7 millones, superando lo solicitado. 2) Extra petita: analiza derechos de propiedad intelectual no reclamados. 3) Citra petita: omite resolver sobre el reclamo de vacaciones no gozadas. 4) Incongruencia fáctica: considera hechos no alegados por las partes. Esta incongruencia vulnera el derecho de defensa y la seguridad jurídica de las partes.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Congruencia en procesos constitucionales</p>
                                                <p class="text-sm mt-2">Sentencia de la Sala Constitucional que declara procedente un recurso de amparo. 1) Congruencia fáctica: analiza exclusivamente los hechos que vulneran los derechos fundamentales alegados. 2) Congruencia jurídica: aplica correctamente la jurisprudencia constitucional relevante. 3) Congruencia petitoria: resuelve exactamente sobre las pretensiones del recurso de amparo. 4) Alcance congruente: ordena las medidas necesarias para restablecer el derecho violado, sin extenderse a cuestiones no planteadas. Esta congruencia garantiza la protección efectiva de los derechos fundamentales.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Congruencia en procesos penales</p>
                                                <p class="text-sm mt-2">Sentencia condenatoria en un proceso penal por homicidio. 1) Congruencia fáctica: analiza exclusivamente los hechos probados en el juicio oral. 2) Congruencia jurídica: aplica correctamente el tipo penal y las circunstancias agravantes. 3) Congruencia petitoria: condena por el delito por el que fue acusado, sin extenderse a otros no imputados. 4) Pena congruente: impone una pena proporcional a la gravedad del delito y las circunstancias del caso. Esta congruencia garantiza que la conden se base exclusivamente en los hechos y el derecho alegados en el proceso.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-8-10-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Constitución Política de Costa Rica:</strong></p>
                                            <p>Artículo 165: Deber de motivar las resoluciones judiciales</p>
                                            <p><br><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 61: Requisitos de la sentencia</p>
                                            <p>Artículo 62: Congruencia de la sentencia</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 363: Requisitos de la sentencia</p>
                                            <p>Artículo 364: Congruencia de la sentencia</p>
                                            <p><br><strong>Ley de Jurisdicción Constitucional:</strong></p>
                                            <p>Artículo 10: Congruencia en las sentencias constitucionales</p>
                                        </div>
                                    </div>
                                    <div id="tab-8-10-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Qué establece el principio de congruencia?</p>
                                                <label><input type="radio" name="q81" value="a"> A) Que las sentencias deben ser breves</label>
                                                <label><input type="radio" name="q81" value="b"> B) Que la sentencia debe corresponder con las pretensiones y hechos</label>
                                                <label><input type="radio" name="q81" value="c"> C) Que los procesos deben ser ágiles</label>
                                                <div class="feedback" data-question="q81"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿Qué tipo de incongruencia consiste en conceder más de lo solicitado?</p>
                                                <label><input type="radio" name="q82" value="a"> A) Extra petita</label>
                                                <label><input type="radio" name="q82" value="b"> B) Ultra petita</label>
                                                <label><input type="radio" name="q82" value="c"> C) Citra petita</label>
                                                <div class="feedback" data-question="q82"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿Qué dimensión de la congruencia se refiere a la armonía entre las pretensiones y lo resuelto?</p>
                                                <label><input type="radio" name="q83" value="a"> A) Congruencia fáctica</label>
                                                <label><input type="radio" name="q83" value="b"> B) Congruencia jurídica</label>
                                                <label><input type="radio" name="q83" value="c"> C) Congruencia petitoria</label>
                                                <div class="feedback" data-question="q83"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿Por qué es importante el principio de congruencia?</p>
                                                <label><input type="radio" name="q84" value="a"> A) Para agilizar los procesos</label>
                                                <label><input type="radio" name="q84" value="b"> B) Para garantizar certeza y seguridad jurídica</label>
                                                <label><input type="radio" name="q84" value="c"> C) Para proteger la intimidad de las partes</label>
                                                <div class="feedback" data-question="q84"></div>
                                            </div>
                                            <button onclick="checkAnswers('q81', 'q82', 'q83', 'q84')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Accordion Item 8.11: Principio de Celeridad -->
                    <div class="accordion-item bg-white rounded-lg shadow-sm mb-4 card-hover">
                        <div class="accordion-header flex justify-between items-center p-5 cursor-pointer" data-accordion="acc-8-11">
                            <h3 class="text-lg font-semibold text-[#8D6E63]">11. Principio de Celeridad</h3>
                            <span class="accordion-icon text-2xl text-[#A1887F]">▼</span>
                        </div>
                        <div id="acc-8-11" class="accordion-content px-5 pb-5">
                            <div class="tabs">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                        <button class="tab-btn active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-11-1">Información General</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-11-2">Ejemplos Prácticos</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-11-3">Normativa Aplicable</button>
                                        <button class="tab-btn whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-target="tab-8-11-4">Cuestionario</button>
                                    </nav>
                                </div>
                                <div class="tab-content py-4">
                                    <div id="tab-8-11-1" class="tab-pane active">
                                        <div class="mb-4">
                                            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Principio de Celeridad" class="w-full h-48 object-cover rounded-lg mb-4 image-overlay">
                                        </div>
                                        <p class="text-sm mb-4">El <strong>principio de celeridad</strong> busca la rapidez en la tramitación de los procesos judiciales, evitando dilaciones innecesarias y garantizando una justicia oportuna.</p>
                                        
                                        <h4 class="font-semibold mb-2">Definición Formal</h4>
                                        <p class="text-sm mb-4">El principio de celeridad procesal exige que los procesos judiciales se tramiten con la mayor agilidad posible, evitando dilaciones injustificadas y garantizando que las partes obtengan una respuesta judicial en un plazo razonable.</p>
                                        
                                        <h4 class="font-semibold mb-2">Características del Principio</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Agilidad:</strong> Tramitación rápida sin formalismos excesivos.</li>
                                            <li><strong>Impulso de oficio:</strong> El juez debe avanzar el proceso.</li>
                                            <li><strong>Plazos perentorios:</strong> Términos estrictos y cumplibles.</li>
                                            <li><strong>Sanción por dilaciones:</strong> Medidas contra la morosidad.</li>
                                        </ul>
                                        
                                        <h4 class="font-semibold mb-2">Relación con la Economía Procesal</h4>
                                        <p class="text-sm mb-4">La celeridad está estrechamente vinculada con la economía procesal, ya que busca optimizar los recursos humanos, materiales y económicos del sistema judicial, evitando gastos innecesarios y concentrando la actividad procesal en lo esencial.</p>
                                        
                                        <h4 class="font-semibold mb-2">Mecanismos para Garantizar la Celeridad</h4>
                                        <ul class="text-sm list-disc pl-5 mb-4">
                                            <li><strong>Procesos ágiles:</strong> Procedimientos especiales para resolución rápida.</li>
                                            <li><strong>Plazos perentorios:</strong> Términos estrictos para actos procesales.</li>
                                            <li><strong>Impulso judicial:</strong> Facultad del juez para avanzar el proceso.</li>
                                            <li><strong>Sanciones por dilación:</strong> Medidas contra la morosidad procesal.</li>
                                        </ul>
                                    </div>
                                    <div id="tab-8-11-2" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Ejemplos Prácticos</h4>
                                        <div class="space-y-4">
                                            <div class="bg-blue-50 p-4 rounded-lg">
                                                <p class="font-semibold text-blue-800">Ejemplo 1: Procesos ágiles en Costa Rica</p>
                                                <p class="text-sm mt-2">Procesos diseñados específicamente para garantizar una resolución rápida en Costa Rica. 1) Proceso monitorio: se emite resolución intimatoria para que cumpla lo señalado en 5 días. 2) Juicio oral penal: después de la acusación hasta la sentencia debe realizarse el juicio oral lo antes posible. 3) Diligencias urgentes: medidas cautelares resueltas en 24-48 horas. 4) Proceso de alimentos: trámite rápido en pro de los acreedors alimentarios. Estos procesos reflejan el compromiso del sistema judicial costarricense con la celeridad y la tutela judicial efectiva.</p>
                                            </div>
                                            <div class="bg-green-50 p-4 rounded-lg">
                                                <p class="font-semibold text-green-800">Ejemplo 2: Medidas contra dilaciones procesales</p>
                                                <p class="text-sm mt-2">Mecanismos implementados en el sistema judicial costarricense para garantizar la celeridad. 1) Sanciones por dilaciones: multas por litigación maliciosa. 2) Preclusión de plazos: pérdida automática de derechos por inactividad. 3) Impulso de oficio: facultad del juez para avanzar el proceso. 4) Digitalización: sistema de notificaciones electrónicas para agilizar trámites. Estas medidas buscan combatir la morosidad procesal y garantizar que los procesos se resuelvan en plazos razonables.</p>
                                            </div>
                                            <div class="bg-yellow-50 p-4 rounded-lg">
                                                <p class="font-semibold text-yellow-800">Ejemplo 3: Celeridad en procesos constitucionales</p>
                                                <p class="text-sm mt-2">En el recurso de amparo, se aplica un trámite expreso para garantizar la protección rápida de derechos fundamentales. 1) Plazos perentorios: el recurso debe resolverse en un plazo máximo de 30 días. 2) Impulso judicial: la Sala Constitucional tiene la facultad de avanzar el proceso de oficio. 3) Audiencia oral: si se celebra, debe realizarse en el menor tiempo posible. 4) Sentencia inmediata: se dicta tan pronto como se agotan los elementos del proceso. Esta celeridad es esencial para garantizar la protección efectiva de derechos que pueden verse irreparablemente vulnerados.</p>
                                            </div>
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <p class="font-semibold text-purple-800">Ejemplo 4: Celeridad en procesos de familia</p>
                                                <p class="text-sm mt-2">En procesos urgentes de protección de niños, se aplica el principio de celeridad. 1) Medidas urgentes: se resuelven en 24-48 horas cuando existe riesgo inminente para el niño. 2) Audiencia inmediata: se celebra lo antes posible para escuchar a las partes. 3) Trámite expreso: se evitan formalismos innecesarios para proteger al menor. 4) Seguimiento rápido: se realizan evaluaciones periódicas para verificar el cumplimiento de las medidas. Esta celeridad es crucial para garantizar el interés superior del niño en situaciones de riesgo.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab-8-11-3" class="tab-pane hidden">
                                        <h4 class="font-semibold mb-4">Normativa Aplicable</h4>
                                        <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                                            <p><strong>Constitución Política de Costa Rica:</strong></p>
                                            <p>Artículo 41: Derecho a la justicia en plazo razonable</p>
                                            <p><br><strong>Código Procesal Civil:</strong></p>
                                            <p>Artículo 5: Deber de impulsar el procedimiento</p>
                                            <p>Artículo 6: Plazos perentorios</p>
                                            <p><br><strong>Código Procesal Penal:</strong></p>
                                            <p>Artículo 10: Principio de celeridad</p>
                                            <p>Artículo 11: Plazos máximos en el proceso penal</p>
                                            <p><br><strong>Ley de Jurisdicción Constitucional:</strong></p>
                                            <p>Artículo 8: Trámite expreso en recursos constitucionales</p>
                                            <p><br><strong>Código de Niñez y Adolescencia:</strong></p>
                                            <p>Artículo 88: Procedimiento ágil para protección de niños</p>
                                        </div>
                                    </div>
                                    <div id="tab-8-11-4" class="tab-pane hidden">
                                        <div class="questionnaire-container">
                                            <p class="font-semibold mb-2">Evalúa tu conocimiento:</p>
                                            <div class="question-item">
                                                <p>1. ¿Qué establece el principio de celeridad procesal?</p>
                                                <label><input type="radio" name="q85" value="a"> A) Que los procesos deben ser secretos</label>
                                                <label><input type="radio" name="q85" value="b"> B) Que los procesos deben tramitarse con agilidad</label>
                                                <label><input type="radio" name="q85" value="c"> C) Que las sentencias deben ser breves</label>
                                                <div class="feedback" data-question="q85"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>2. ¿Qué característica es esencial para garantizar la celeridad?</p>
                                                <label><input type="radio" name="q86" value="a"> A) Formalismo riguroso</label>
                                                <label><input type="radio" name="q86" value="b"> B) Plazos perentorios e impulso judicial</label>
                                                <label><input type="radio" name="q86" value="c"> C) Secreto en las actuaciones</label>
                                                <div class="feedback" data-question="q86"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>3. ¿En qué tipo de proceso es especialmente importante la celeridad?</p>
                                                <label><input type="radio" name="q87" value="a"> A) Solo en procesos civiles</label>
                                                <label><input type="radio" name="q87" value="b"> B) En procesos constitucionales</label>
                                                <label><input type="radio" name="q87" value="c"> C) En todos los procesos pero especialmente en protección de derechos fundamentales</label>
                                                <div class="feedback" data-question="q87"></div>
                                            </div>
                                            <div class="question-item">
                                                <p>4. ¿Qué relación tiene la celeridad con la economía procesal?</p>
                                                <label><input type="radio" name="q88" value="a"> A) No tienen relación</label>
                                                <label><input type="radio" name="q88" value="b"> B) Buscan optimizar recursos y evitar gastos innecesarios</label>
                                                <label><input type="radio" name="q88" value="c"> C) Son principios contradictorios</label>
                                                <div class="feedback" data-question="q88"></div>
                                            </div>
                                            <button onclick="checkAnswers('q85', 'q86', 'q87', 'q88')" class="bg-[#795548] text-white px-4 py-2 rounded-md hover:bg-[#A1887F] transition-colors">Verificar Respuestas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>

    <!-- Modal para resultados del cuestionario -->
    <div id="quiz-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3 id="modal-title">Resultados del Cuestionario</h3>
            <div id="modal-body">
                <p id="score-message"></p>
                <div id="trophy-container"></div>
                <p id="encouragement-message"></p>
            </div>
        </div>
    </div>

    <script>
        // Función para manejar el menú móvil
        document.getElementById('menu-toggle').addEventListener('click', function() {
            document.getElementById('sidebar').classList.toggle('-translate-x-full');
        });

        // Función para manejar la navegación entre temas
        document.querySelectorAll('.sidebar-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remover clase active de todos los enlaces
                document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
                
                // Agregar clase active al enlace actual
                this.classList.add('active');
                
                // Ocultar todas las secciones
                document.querySelectorAll('.content-section').forEach(section => {
                    section.classList.add('hidden');
                });
                
                // Mostrar la sección correspondiente
                const targetId = this.getAttribute('data-target');
                document.getElementById(targetId).classList.remove('hidden');
                
                // Actualizar barra de progreso
                updateProgress();
            });
        });

        // Función para manejar los acordeones
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', function() {
                const accordionId = this.getAttribute('data-accordion');
                const content = document.getElementById(accordionId);
                
                // Cerrar otros acordeones en la misma sección
                const section = this.closest('.content-section');
                section.querySelectorAll('.accordion-content').forEach(acc => {
                    if (acc.id !== accordionId) {
                        acc.classList.remove('open');
                        acc.previousElementSibling.classList.remove('open');
                    }
                });
                
                // Alternar acordeón actual
                content.classList.toggle('open');
                this.classList.toggle('open');
            });
        });

        // Función para manejar las pestañas
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const targetId = this.getAttribute('data-target');
                const tabContainer = this.closest('.tabs');
                
                // Remover clase active de todos los botones de pestaña
                tabContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                
                // Agregar clase active al botón actual
                this.classList.add('active');
                
                // Ocultar todos los paneles de pestaña
                tabContainer.querySelectorAll('.tab-pane').forEach(pane => {
                    pane.classList.add('hidden');
                });
                
                // Mostrar el panel de pestaña correspondiente
                document.getElementById(targetId).classList.remove('hidden');
            });
        });

        // Función para verificar respuestas del cuestionario
        function checkAnswers(...questionIds) {
            let correctCount = 0;
            const totalQuestions = questionIds.length;
            
            questionIds.forEach(questionId => {
                const selectedOption = document.querySelector(`input[name="${questionId}"]:checked`);
                const feedback = document.querySelector(`.feedback[data-question="${questionId}"]`);
                
                if (selectedOption) {
                    if (selectedOption.value === 'b') { // 'b' es la respuesta correcta en todos los casos
                        feedback.textContent = '✔️ Correcto';
                        feedback.className = 'feedback correct';
                        correctCount++;
                    } else {
                        feedback.textContent = '❌ Incorrecto';
                        feedback.className = 'feedback incorrect';
                    }
                } else {
                    feedback.textContent = '⚠️ No respondió';
                    feedback.className = 'feedback';
                }
            });
            
            // Mostrar modal con resultados
            showQuizModal(correctCount, totalQuestions);
        }

        // Función para mostrar el modal con resultados del cuestionario
        function showQuizModal(correctCount, totalQuestions) {
            const modal = document.getElementById('quiz-modal');
            const scoreMessage = document.getElementById('score-message');
            const trophyContainer = document.getElementById('trophy-container');
            const encouragementMessage = document.getElementById('encouragement-message');
            
            const percentage = Math.round((correctCount / totalQuestions) * 100);
            scoreMessage.textContent = `Tu puntuación es: ${correctCount} de ${totalQuestions} (${percentage}%)`;
            
            if (percentage >= 70) {
                trophyContainer.innerHTML = '<div class="trophy">🏆</div>';
                encouragementMessage.textContent = '¡Excelente trabajo! Has dominado este tema. Sigue así para alcanzar el éxito en tus estudios.';
            } else {
                trophyContainer.innerHTML = '';
                encouragementMessage.textContent = 'Buen intento, pero hay espacio para mejorar. Revisa los conceptos y vuelve a intentarlo. ¡Tú puedes!';
            }
            
            modal.style.display = 'block';
        }

        // Función para cerrar el modal
        document.querySelector('.close').addEventListener('click', function() {
            document.getElementById('quiz-modal').style.display = 'none';
        });

        // Función para actualizar la barra de progreso
        function updateProgress() {
            const totalSections = document.querySelectorAll('.content-section').length;
            const visibleSection = document.querySelector('.content-section:not(.hidden)');
            const currentIndex = Array.from(document.querySelectorAll('.content-section')).indexOf(visibleSection) + 1;
            const percentage = Math.round((currentIndex / totalSections) * 100);
            
            document.getElementById('progress-bar').style.width = `${percentage}%`;
            document.getElementById('progress-text').textContent = `${percentage}%`;
        }

        // Inicializar progreso
        updateProgress();
    </script>
</body>
</html>
