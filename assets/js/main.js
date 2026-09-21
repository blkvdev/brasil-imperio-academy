// COLOQUE SEU VIDEO AQUI
// YouTube: use apenas o codigo final. Exemplo: https://youtu.be/ABC123 -> "ABC123"
const YOUTUBE_VIDEO_ID = "oOG4QJsjUIs";
// MP4 local: coloque o arquivo na pasta assets/video e informe: "assets/video/aula.mp4"
const LOCAL_VIDEO_FILE = "";

const topics={
 origem:{tag:"Contexto",title:"Da Constituinte à outorga",body:"Após a Independência, a Assembleia Constituinte de 1823 entrou em conflito com D. Pedro I. A dissolução da Assembleia abriu caminho para uma Carta preparada sob influência direta da Coroa e outorgada em 25 de março de 1824."},
 bases:{tag:"Constituição",title:"Bases do Estado imperial",body:"A Constituição definiu uma monarquia constitucional, hereditária e representativa. Também estabeleceu voto censitário, centralização política, catolicismo oficial e um sistema composto por quatro poderes."},
 poderes:{tag:"Organização",title:"A arquitetura dos quatro poderes",body:"Executivo, Legislativo e Judiciário exerciam funções administrativas, legislativas e judiciais. O Poder Moderador, privativo do imperador, ocupava posição singular e influenciava o funcionamento do conjunto."},
 moderador:{tag:"A chave do sistema",title:"O Poder Moderador",body:"Idealizado como poder neutro para harmonizar as instituições, no Brasil era exercido pelo imperador. Suas atribuições permitiam nomear ministros, escolher senadores e dissolver a Câmara."}
};
const timelineInfo={
 "1823":{tag:"1823",title:"Assembleia Constituinte",body:"A primeira Assembleia Constituinte brasileira discutia o formato do novo Estado e os limites do poder imperial. O conflito entre os deputados e D. Pedro I levou à interrupção dos trabalhos."},
 agonia:{tag:"Novembro de 1823",title:"Noite da Agonia",body:"A Assembleia foi dissolvida pela força. Depois disso, um Conselho de Estado ficou responsável pela elaboração do texto constitucional."},
 "1824":{tag:"25 de março de 1824",title:"Constituição outorgada",body:"A primeira Constituição brasileira foi outorgada, isto é, concedida pelo imperador sem aprovação de uma assembleia eleita para aquela versão final."},
 "1889":{tag:"1824–1889",title:"Sessenta e cinco anos de vigência",body:"A Carta permaneceu válida durante todo o Império. Organizou o Estado e contribuiu para a continuidade institucional, ao mesmo tempo que preservou forte centralização política."}
};
const powers={
 moderador:{tag:"Poder IV",title:"Poder Moderador",text:"Exercido privativamente pelo imperador, foi apresentado como mecanismo de equilíbrio entre as instituições, mas possibilitava intervenção direta na dinâmica política.",items:["Nomeação e demissão de ministros","Escolha de senadores em listas provinciais","Convocação e dissolução da Câmara"]},
 executivo:{tag:"Poder I",title:"Poder Executivo",text:"Responsável pela administração do país e pela execução das leis, era exercido pelo imperador por meio de seus ministros.",items:["Condução da administração pública","Política externa","Comando das Forças Armadas"]},
 legislativo:{tag:"Poder II",title:"Poder Legislativo",text:"A Assembleia Geral era bicameral, formada pela Câmara dos Deputados e pelo Senado.",items:["Deputados eleitos por voto censitário e indireto","Senadores vitalícios","Produção e discussão das leis"]},
 judiciario:{tag:"Poder III",title:"Poder Judiciário",text:"Aplicava as leis e julgava conflitos. Embora houvesse garantias formais, a Coroa preservava influência sobre nomeações e carreiras.",items:["Juízes locais","Tribunais provinciais","Instâncias superiores"]}
};
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
window.addEventListener("load",()=>setTimeout(()=>$("#loader").classList.add("hide"),450));
const menuBtn=$("#menuBtn"),nav=$("#nav");menuBtn.onclick=()=>{nav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",nav.classList.contains("open"))};
$$('.nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
$("#themeBtn").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("temaImperio",document.body.classList.contains("dark")?"dark":"light")};if(localStorage.getItem("temaImperio")==="dark")document.body.classList.add("dark");
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});$$('.reveal').forEach(el=>io.observe(el));
const sections=$$('main section[id]'),links=$$('.nav a');window.addEventListener('scroll',()=>{let id='inicio';sections.forEach(s=>{if(scrollY>=s.offsetTop-160)id=s.id});links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id))});
function setupVideo(){if(YOUTUBE_VIDEO_ID){$("#videoPlaceholder").hidden=true;const p=$("#youtubePlayer");p.src=`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`;p.hidden=false}else if(LOCAL_VIDEO_FILE){$("#videoPlaceholder").hidden=true;const p=$("#localPlayer");$("#localSource").src=LOCAL_VIDEO_FILE;p.load();p.hidden=false}}setupVideo();
const modal=$("#infoModal");function openModal(o){$("#modalEyebrow").textContent=o.tag;$("#modalTitle").textContent=o.title;$("#modalBody").innerHTML=`<p>${o.body}</p>`;modal.showModal()}$$('.lesson-item').forEach(b=>b.onclick=()=>openModal(topics[b.dataset.topic]));$$('.timeline-card').forEach(b=>b.onclick=()=>openModal(timelineInfo[b.dataset.modal]));
$("#openHelp").onclick=()=>openModal({tag:"Configuração do vídeo",title:"Como colocar seu vídeo",body:'Abra <strong>assets/js/main.js</strong>. Para YouTube, preencha <strong>YOUTUBE_VIDEO_ID</strong> com o código final do link. Para MP4, crie a pasta <strong>assets/video</strong>, coloque o arquivo nela e preencha <strong>LOCAL_VIDEO_FILE</strong> com o caminho do vídeo.'});
$$('.modal-close').forEach(b=>b.onclick=()=>b.closest('dialog').close());$$('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));
$$('.power-node').forEach(b=>b.onclick=()=>{$$('.power-node').forEach(x=>x.classList.remove('active'));b.classList.add('active');const p=powers[b.dataset.power];$("#powerDetail").innerHTML=`<p class="eyebrow">${p.tag}</p><h3>${p.title}</h3><p>${p.text}</p><ul>${p.items.map(i=>`<li>${i}</li>`).join('')}</ul>`});
let progress=Number(localStorage.getItem('imperioProgress')||0);function setProgress(v){progress=Math.max(progress,v);localStorage.setItem('imperioProgress',progress);$("#progressText").textContent=progress+'%';$("#progressBar").style.width=progress+'%'}setProgress(progress);$("#completeLesson").onclick=()=>{setProgress(50);$("#completeLesson").textContent='✓ Aula concluída'};
$("#pdfButton").onclick=()=>openModal({tag:"Adicionar material",title:"Como colocar seu PDF",body:'Renomeie o PDF para <strong>Brasil-Imperio.pdf</strong> e coloque na pasta <strong>materiais</strong>. Depois, no arquivo <strong>index.html</strong>, troque este botão por um link com <strong>href="materiais/Brasil-Imperio.pdf"</strong> e o atributo <strong>download</strong>.'});
$("#certificateButton").onclick=()=>{const done=localStorage.getItem('quizFinished')==='yes';if(!done)return openModal({tag:"Certificado bloqueado",title:"Finalize o quiz primeiro",body:"Responda às oito questões para liberar o certificado simbólico."});$("#certificateScore").textContent=`Resultado: ${localStorage.getItem('quizScore')||0}/8`;$("#certificateModal").showModal()};$("#printCertificate").onclick=()=>window.print();
