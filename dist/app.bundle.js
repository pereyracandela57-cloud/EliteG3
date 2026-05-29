var n2={apiKey:"AIzaSyAcrVq7ryWv5EJbRhZ1TmhFia-LAV10cN4",authDomain:"eliteg3-1650f.firebaseapp.com",databaseURL:"https://eliteg3-1650f-default-rtdb.firebaseio.com/",projectId:"eliteg3-1650f",storageBucket:"eliteg3-1650f.firebasestorage.app",messagingSenderId:"351711372153",appId:"1:351711372153:web:60ce4742396e37974f85a8",measurementId:"G-HGYPLEY6DJ"};if(!firebase.apps.length)firebase.initializeApp(n2);var w=firebase.database(),p2=firebase.storage(),{useState:E,useEffect:r,useMemo:f,useRef:zJ}=React,i2=(j,W="")=>{let U=String(j||"uploads").replace(/^\/+|\/+$/g,""),z=String(W||"archivo").trim().replace(/[^a-zA-Z0-9._-]/g,"_"),F=Date.now(),I=Math.random().toString(36).slice(2,10);return`${U}/${F}-${I}-${z||"archivo"}`},PQ=async(j,W="uploads")=>{if(!j)throw new Error("Archivo inválido.");let U=i2(W,j.name||"archivo"),z=p2.ref(U);return await z.put(j),z.getDownloadURL()};if(typeof window!=="undefined")window.uploadLocalFileToStorage=PQ;var $J=["C","P","B","N","S","E","X","R"],l2=["R"],_Q="anonimo/galeria",xJ="__anonimo_gallery__",t2=["PERSONAJE","ETIQUETA","GENERAL"],V1={PERSONAJE:"Personaje",ETIQUETA:"Etiqueta",GENERAL:"General"},rJ=[{id:"perfil",label:"Perfil",labels:[]},{id:"colaPiernas",label:"Cola/Piernas",labels:["C"]},{id:"pechos",label:"Pechos",labels:["P"]},{id:"cuerpoCintura",label:"Cintura/Cuerpo",labels:["N","B"]},{id:"sensualidad",label:"Sensualidad",labels:["E","S"]}],o2={perfil:"perfil",pecho:"pechos",pechos:"pechos",cola:"colaPiernas",piernas:"colaPiernas",cuerpo:"cuerpoCintura",cintura:"cuerpoCintura",sensualidad:"sensualidad"},eZ=()=>rJ.reduce((j,W)=>{return j[W.id]="",j},{}),WJ=(j={})=>{let W=eZ(),U=j&&typeof j==="object"?j:{};return Object.keys(W).reduce((z,F)=>{return z[F]=typeof U[F]==="string"?U[F].trim():"",z},{...W})},VZ=(j="")=>rJ.find((W)=>W.id===j),a2=(j="")=>o2[(j||"").trim().toLowerCase()]||"",UZ={C:{bg:"linear-gradient(135deg, rgba(34,211,238,0.92), rgba(14,116,144,0.95))",border:"rgba(103,232,249,0.95)",glow:"rgba(34,211,238,0.8)",text:"#ecfeff"},P:{bg:"linear-gradient(135deg, rgba(244,114,182,0.92), rgba(157,23,77,0.95))",border:"rgba(251,207,232,0.95)",glow:"rgba(244,114,182,0.78)",text:"#fff1f2"},B:{bg:"linear-gradient(135deg, rgba(251,191,36,0.94), rgba(180,83,9,0.95))",border:"rgba(253,224,71,0.98)",glow:"rgba(251,191,36,0.82)",text:"#fffbea"},N:{bg:"linear-gradient(135deg, rgba(163,230,53,0.92), rgba(63,98,18,0.95))",border:"rgba(217,249,157,0.95)",glow:"rgba(163,230,53,0.78)",text:"#f7fee7"},S:{bg:"linear-gradient(135deg, rgba(192,132,252,0.92), rgba(107,33,168,0.95))",border:"rgba(233,213,255,0.95)",glow:"rgba(192,132,252,0.8)",text:"#faf5ff"},E:{bg:"linear-gradient(135deg, rgba(248,113,113,0.92), rgba(153,27,27,0.95))",border:"rgba(254,202,202,0.95)",glow:"rgba(248,113,113,0.8)",text:"#fef2f2"},X:{bg:"linear-gradient(135deg, rgba(239,68,68,0.98), rgba(127,29,29,0.98))",border:"rgba(254,226,226,1)",glow:"rgba(239,68,68,0.95)",text:"#fff7f7"},R:{bg:"linear-gradient(135deg, rgba(148,163,184,0.95), rgba(71,85,105,0.98))",border:"rgba(226,232,240,0.95)",glow:"rgba(148,163,184,0.82)",text:"#f8fafc"},DEFAULT:{bg:"linear-gradient(135deg, rgba(51,65,85,0.92), rgba(15,23,42,0.95))",border:"rgba(148,163,184,0.85)",glow:"rgba(148,163,184,0.45)",text:"#f8fafc"}},WQ=(j,W)=>{if(!W)return 0;return(j+W)%W},U1=(j,W,U=!1)=>{let z=Array.isArray(W)?W.length:0;if(!z)return null;if(z===1)return 0;if(U){let F=W.map((I,p)=>({item:I,idx:p})).filter(({item:I,idx:p})=>p!==j&&I&&I.url).map(({idx:I})=>I);if(!F.length)return WQ((j??0)+1,z);return F[Math.floor(Math.random()*F.length)]}return WQ((j??0)+1,z)},tJ=(j)=>UZ[j]||UZ.DEFAULT,EZ=(j,W=!1)=>{let U=j==="INICIAL"?UZ.DEFAULT:j==="100"?UZ.B:tJ(j);return{"--btn-neon-color":U.glow,borderColor:U.border,color:U.text,boxShadow:W?`inset 0 1px 0 rgba(186,230,253,0.35), 0 0 0 1px ${U.border}, 0 0 20px ${U.glow}`:`inset 0 1px 0 rgba(186,230,253,0.2), 0 0 0 1px color-mix(in srgb, ${U.border} 65%, rgba(15,23,42,0.65) 35%), 0 0 12px color-mix(in srgb, ${U.glow} 60%, transparent)`,textShadow:`0 0 8px color-mix(in srgb, ${U.glow} 70%, transparent)`,filter:W?"brightness(1.14)":"brightness(1)"}},z1=/\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i,r2=/\.(mp3|wav|ogg|m4a|aac|flac)(\?.*)?$/i,e2=/\.gif(\?.*)?$/i,J3=/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i,Q3=/vimeo\.com\/(?:video\/)?(\d+)/i,FQ=(j)=>{let W=(j||"").trim();if(!W)return null;let U=W.match(J3);if(U)return{provider:"youtube",src:`https://www.youtube.com/embed/${U[1]}`,title:"Video de YouTube"};let z=W.match(Q3);if(z)return{provider:"vimeo",src:`https://player.vimeo.com/video/${z[1]}`,title:"Video de Vimeo"};return null},D1="eliteg3_cache_perfiles_v1",C1="eliteg3_cache_anon_gallery_v1",Z3=["eporner.com"],N1=(j="")=>{let W=String(j||"").trim();if(!W||W.startsWith("data:")||W.startsWith("blob:"))return!1;try{let z=new URL(W).hostname.toLowerCase();return Z3.some((F)=>z===F||z.endsWith(`.${F}`))}catch{return!1}},qJ=(j="",W="")=>{let U=String(j||"").trim();if(!U||N1(U))return W;return U},aJ=(j="",W="")=>{if(W==="video"||W==="image")return W;let U=(j||"").trim();if(z1.test(U)||FQ(U))return"video";return"image"},aZ=(j="")=>{return typeof j==="string"?j.trim():""},e=(j,W="")=>{if(typeof j==="string")return{url:qJ(j.trim(),""),label:"",type:aJ(j,W),autor:""};if(j&&typeof j==="object"){let U=qJ((j.url||"").trim(),"");return{url:U,label:$J.includes(j.label)?j.label:"",type:aJ(U,j.type||W),autor:aZ(j.autor)}}return{url:"",label:"",type:aJ("",W),autor:""}},$3=(j)=>e(j).url,M1=(j)=>e(j).label,lJ=(j)=>e(j).type,iZ=(j,W,U="image")=>Array.isArray(j?.[W])?j[W].map((z)=>e(z,U)).filter((z)=>z.url):[],X3=(j={})=>({firebaseId:xJ,nombre:"Anónimo",nacionalidad:"",ciudad:"",profesion:"Galería",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:iZ(j,"fotos","image"),gifs:iZ(j,"gifs","image"),videos:iZ(j,"videos","video")},batallaFotosPreferidas:eZ(),puntuaciones:vQ(),isAnonymousGallery:!0}),Y3=(j={})=>{if(j?.isAnonymousGallery||j?.firebaseId===xJ)return"anonimo";return j?.firebaseId||""},q3=(j={})=>{let W=qJ(String(j?.fotos?.[0]||"").trim(),""),U=WJ(j?.batallaFotosPreferidas||j?.galeria?.battlePhotoPreferences||{});if(!W)return!1;return rJ.filter((z)=>z.id!=="perfil").every((z)=>Boolean(String(U?.[z.id]||"").trim()))},_3=(j={})=>{let W=[],U=qJ(String(j?.fotos?.[0]||"").trim(),""),z=WJ(j?.batallaFotosPreferidas||j?.galeria?.battlePhotoPreferences||{});if(!U)W.push("Perfil");return rJ.filter((F)=>F.id!=="perfil").forEach((F)=>{if(!String(z?.[F.id]||"").trim())W.push(F.label)}),W},j3=(j=null)=>{if(!j)return;let W=window.open("","_blank");if(!W)return;let U=j?.firebaseId||j?.id||"",z=Array.isArray(j?.galeria?.fotos)?j.galeria.fotos.map((A)=>e(A,"image")).filter((A)=>A.url).map((A,G)=>({...A,sourceTag:"fotos",sourceIndex:G})):[],F=z.filter((A)=>A.type==="image"&&A.sourceTag==="fotos"),I=WJ(j?.batallaFotosPreferidas||j?.galeria?.battlePhotoPreferences||{}),p=qJ(String(j?.fotos?.[0]||j?.foto||"").trim(),""),XJ=z.filter((A)=>A.type==="image"&&A.url).reduce((A,G)=>{return A[G.url]=G,A},{}),t=z.length?z.map((A,G)=>`
                    <button
                        type="button"
                        class="surface-panel rounded-xl overflow-hidden border border-cyan-200/20 text-left multimedia-thumb-btn"
                        data-url="${A.url}"
                        data-label="${A.label||""}"
                        data-index="${A.sourceIndex}"
                        data-tag="${A.sourceTag}"
                        data-media-type="${A.type||"image"}"
                        draggable="true"
                        title="Editar URL o etiqueta"
                    >
                        <div class="multimedia-thumb-wrap">
                            <img src="${A.url}" alt="Multimedia ${G+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${A.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin contenido en galería.</p>',b=F.length?F.map((A,G)=>`
                    <button
                        type="button"
                        class="surface-panel rounded-xl overflow-hidden border border-rose-300/35 text-left multimedia-thumb-btn multimedia-thumb-btn--broken"
                        data-url="${A.url}"
                        data-label="${A.label||""}"
                        data-index="${A.sourceIndex}"
                        data-tag="${A.sourceTag}"
                        data-media-type="${A.type||"image"}"
                        draggable="true"
                        data-broken-card="true"
                        style="display:none;"
                        title="Imagen rota: tocar para editar URL o etiqueta"
                    >
                        <div class="multimedia-thumb-wrap multimedia-thumb-wrap--broken">
                            <img src="${A.url}" alt="Imagen rota ${G+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${A.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin imágenes en galería.</p>',V=rJ.map((A)=>{let G=A.id==="perfil",P=G?p:I[A.id]||"",K=P?G?{url:P}:XJ[P]||{url:P,label:"",sourceIndex:-1}:null,VJ=Boolean(P);return`
                    <div class="multimedia-slot-card ${VJ?"is-assigned":"is-missing"}" data-slot-id="${A.id}">
                        <div class="multimedia-slot-top">
                            <span class="multimedia-slot-title">${A.label}</span>
                            <span class="multimedia-slot-state">${VJ?"VERDE":"ROJO"}</span>
                        </div>
                        <div class="multimedia-slot-preview">
                            ${VJ?`<img src="${K.url}" alt="${A.label}" loading="lazy" />`:'<span class="multimedia-slot-empty">Sin foto designada</span>'}
                        </div>
                        <div class="multimedia-slot-actions">
                            ${!G?`<button type="button" class="multimedia-slot-assign-btn" data-slot-assign="${A.id}">DESIGNAR FOTO</button>`:""}
                            <button type="button" class="multimedia-slot-add-btn" data-slot-add="${A.id}">Agregar URL/Archivo</button>
                        </div>
                    </div>
                `}).join("");W.document.write(`
                <!DOCTYPE html>
                <html lang="es">
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Multimedia - ${j?.nombre||"Personaje"}</title>
                        <script src="https://cdn.tailwindcss.com"></script>
                        <link rel="stylesheet" href="styles.css" />
                        <style>
                            .multimedia-gallery-scroll { overflow: visible; padding-right: 0; }
                            .multimedia-gallery-scroll::-webkit-scrollbar { width: 8px; }
                            .multimedia-gallery-scroll::-webkit-scrollbar-thumb { background: rgba(34,211,238,0.45); border-radius: 99px; }
                            .multimedia-thumb-btn { transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease; }
                            .multimedia-thumb-btn:hover { transform: translateY(-2px); border-color: rgba(34,211,238,0.55); box-shadow: 0 0 22px rgba(34,211,238,0.22); }
                            .multimedia-thumb-wrap { position: relative; background: rgba(2,6,23,0.78); height: 170px; display: flex; align-items: center; justify-content: center; }
                            .multimedia-thumb-wrap--broken::after {
                                content: 'ROTA';
                                position: absolute;
                                top: 8px;
                                left: 8px;
                                font-size: 10px;
                                font-weight: 900;
                                letter-spacing: .12em;
                                text-transform: uppercase;
                                color: #fecaca;
                                background: rgba(127,29,29,.82);
                                border: 1px solid rgba(252,165,165,.8);
                                border-radius: 999px;
                                padding: 3px 8px;
                            }
                            .multimedia-thumb-label {
                                position: absolute; right: 8px; bottom: 8px; z-index: 4; max-width: calc(100% - 16px);
                                border-radius: 999px; padding: 4px 10px; font-size: 10px; font-weight: 800; letter-spacing: .12em;
                                text-transform: uppercase; color: #ecfeff; border: 1px solid rgba(34,211,238,.72);
                                background: rgba(2,6,23,.82); backdrop-filter: blur(6px); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
                            }
                            .multimedia-slots-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 10px; }
                            .multimedia-slot-card { border-radius: 12px; padding: 10px; border: 1px solid rgba(148,163,184,0.45); background: rgba(2,6,23,0.72); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08); transition: border-color .16s ease, box-shadow .16s ease, transform .16s ease; }
                            .multimedia-slot-card.drop-hover { border-color: rgba(56,189,248,0.95); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(56,189,248,0.35), 0 0 22px rgba(34,211,238,0.35); transform: translateY(-1px); }
                            .multimedia-slot-card.drop-active { border-color: rgba(14,165,233,1); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(14,165,233,0.4), 0 0 30px rgba(14,165,233,0.44); transform: translateY(-2px); }
                            .multimedia-slot-card.is-assigned { border-color: rgba(34,197,94,0.95); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(34,197,94,0.3); }
                            .multimedia-slot-card.is-missing { border-color: rgba(239,68,68,0.95); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(239,68,68,0.24); }
                            .multimedia-slot-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; }
                            .multimedia-slot-title { font-size: 10px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; color: #f8fafc; }
                            .multimedia-slot-state { font-size: 9px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; }
                            .multimedia-slot-card.is-assigned .multimedia-slot-state { color: #86efac; }
                            .multimedia-slot-card.is-missing .multimedia-slot-state { color: #fca5a5; }
                            .multimedia-slot-preview { border-radius: 8px; overflow: hidden; aspect-ratio: 4/3; border: 1px dashed rgba(148,163,184,0.45); background: rgba(15,23,42,0.88); display: flex; align-items: center; justify-content: center; }
                            .multimedia-slot-preview img { width: 100%; height: 100%; object-fit: cover; display:block; }
                            .multimedia-slot-empty { color: #fca5a5; font-size: 10px; text-transform: uppercase; letter-spacing: .08em; font-weight: 700; text-align: center; padding: 0 8px; }
                            .multimedia-slot-card.is-active { border-color: rgba(251,191,36,0.96); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(251,191,36,0.32), 0 0 20px rgba(251,191,36,0.22); }
                            .multimedia-slot-actions { display:grid; gap:6px; margin-top:8px; }
                            .multimedia-slot-assign-btn, .multimedia-slot-add-btn { width:100%; border-radius:8px; padding:6px 8px; font-size:10px; font-weight:800; letter-spacing:.08em; text-transform:uppercase; cursor:pointer; transition:filter .16s ease, transform .16s ease; }
                            .multimedia-slot-assign-btn { border:1px solid rgba(203,213,225,0.9); background: linear-gradient(165deg, rgba(148,163,184,0.5) 0%, rgba(71,85,105,0.82) 45%, rgba(30,41,59,0.94) 100%); color:#f8fafc; box-shadow: inset 0 1px 0 rgba(255,255,255,0.42), inset 0 -1px 0 rgba(15,23,42,0.55), 0 6px 12px rgba(2,6,23,0.45); }
                            .multimedia-slot-assign-btn.is-selected { border-color: rgba(74,222,128,0.98); background: linear-gradient(160deg, rgba(22,163,74,0.98) 0%, rgba(34,197,94,0.94) 45%, rgba(20,83,45,0.98) 100%); color:#ecfdf5; box-shadow: inset 0 1px 0 rgba(220,252,231,0.55), inset 0 -1px 0 rgba(5,46,22,0.62), 0 0 16px rgba(74,222,128,0.95), 0 0 34px rgba(34,197,94,0.82); filter: brightness(1.24) saturate(1.2); }
                            .multimedia-slot-add-btn { border:1px solid rgba(125,211,252,0.6); background: rgba(2,6,23,0.82); color:#e2e8f0; box-shadow:0 0 12px rgba(34,211,238,0.22); }
                            .multimedia-slot-assign-btn:hover, .multimedia-slot-add-btn:hover { transform: translateY(-1px); filter: brightness(1.08); }
                        </style>
                    </head>
                    <body class="text-slate-200">
                        <main class="min-h-screen p-4 md:p-8">
                            <section class="gothic-frame surface-panel surface-panel--neon rounded-[2rem] p-6 md:p-8 w-full max-w-6xl mx-auto">
                                <h1 class="font-title text-center text-3xl md:text-4xl text-white uppercase tracking-wide">Multimedia</h1>
                                <p class="text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2">${j?.nombre||"Personaje"}</p>
                                <article class="surface-panel rounded-2xl border border-cyan-200/20 mt-6 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-3">Galería</h2>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${t}</div>
                                </article>
                                <article class="surface-panel rounded-2xl border border-cyan-200/20 mt-4 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-3">5 principales</h2>
                                    <div class="multimedia-slots-grid">${V}</div>
                                </article>
                                <article class="surface-panel rounded-2xl border border-rose-300/25 mt-4 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-2">Imágenes rotas</h2>
                                    <p class="text-xs text-rose-100/80 uppercase tracking-[0.12em] mb-3">Solo fotos que ya no cargan. Tocá una para corregir URL y etiqueta.</p>
                                    <div id="brokenGalleryGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${b}</div>
                                    <p id="brokenGalleryEmpty" class="text-sm text-slate-300">No hay imágenes rotas detectadas.</p>
                                </article>
                            </section>
                        </main>
                        <script>
                            const profileId = ${JSON.stringify(U)};
                            const validLabels = ${JSON.stringify($J)};
                            const dbRef = window.opener && window.opener.firebase && window.opener.firebase.database ? window.opener.firebase.database() : null;
                            const normalizeLabel = (rawLabel = '') => validLabels.includes(rawLabel) ? rawLabel : '';
                            const brokenCards = new Set();
                            const DND_PAYLOAD_TYPE = 'application/x-battle-slot-item';
                            const LONG_PRESS_MS = 280;
                            let longPressTimer = null;
                            let touchPayload = null;
                            const isImagePayload = (payload) => String(payload?.mediaType || '').trim() === 'image';
                            const assignToSlot = (payload = {}, slotId = '') => {
                                if (!window.opener || !slotId || !isImagePayload(payload)) return false;
                                const sourceIndex = Number(payload.sourceIndex);
                                if (!Number.isInteger(sourceIndex) || sourceIndex < 0) return false;
                                window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: '${U}', slotId, index: sourceIndex, mediaType: 'image' }, '*');
                                return true;
                            };
                            const syncBrokenEmptyState = () => {
                                const grid = document.getElementById('brokenGalleryGrid');
                                const empty = document.getElementById('brokenGalleryEmpty');
                                if (!grid || !empty) return;
                                const visibleBrokenCount = Array.from(grid.querySelectorAll('[data-broken-card="true"]'))
                                    .filter((card) => card.style.display !== 'none').length;
                                empty.style.display = visibleBrokenCount ? 'none' : 'block';
                            };
                            const saveGalleryItem = async ({ sourceTag = 'fotos', sourceIndex = -1, url = '', label = '' }) => {
                                if (!dbRef || !profileId || sourceIndex < 0) return false;
                                const galleryRef = dbRef.ref(\`perfiles/\${profileId}/galeria/\${sourceTag}\`);
                                const snapshot = await galleryRef.once('value');
                                const currentItems = Array.isArray(snapshot.val()) ? snapshot.val() : [];
                                if (!currentItems[sourceIndex]) return false;
                                const rawItem = currentItems[sourceIndex];
                                const nextItem = typeof rawItem === 'string'
                                    ? { url: String(url || '').trim(), label: normalizeLabel(label), type: 'image', autor: '' }
                                    : { ...rawItem, url: String(url || '').trim(), label: normalizeLabel(label), autor: normalizeGalleryAuthor(rawItem?.autor) };
                                currentItems[sourceIndex] = nextItem;
                                await galleryRef.set(currentItems);
                                return true;
                            };
                            let activeSlotSelectionId = '';
                            const slotCards = Array.from(document.querySelectorAll('.multimedia-slot-card'));
                            const slotAssignButtons = Array.from(document.querySelectorAll('[data-slot-assign]'));
                            const updateSlotCardAssignedState = (slotId = '', assignedUrl = '') => {
                                if (!slotId) return;
                                const card = slotCards.find((slotCard) => slotCard.dataset.slotId === slotId);
                                if (!card) return;
                                const normalizedUrl = String(assignedUrl || '').trim();
                                const isAssigned = Boolean(normalizedUrl);
                                card.classList.toggle('is-assigned', isAssigned);
                                card.classList.toggle('is-missing', !isAssigned);
                                const stateBadge = card.querySelector('.multimedia-slot-state');
                                if (stateBadge) {
                                    stateBadge.textContent = isAssigned ? 'VERDE' : 'ROJO';
                                }
                                const previewContainer = card.querySelector('.multimedia-slot-preview');
                                if (previewContainer) {
                                    previewContainer.innerHTML = isAssigned
                                        ? '<img alt="" loading="lazy" />'
                                        : '<span class="multimedia-slot-empty">Sin foto designada</span>';
                                    if (isAssigned) {
                                        const img = previewContainer.querySelector('img');
                                        if (img) {
                                            img.src = normalizedUrl;
                                            img.alt = slotConfigById[slotId]?.label || 'Foto designada';
                                        }
                                    }
                                }
                            };
                            const setActiveSlotSelection = (slotId = '') => {
                                activeSlotSelectionId = slotId || '';
                                slotCards.forEach((card) => {
                                    const isActive = activeSlotSelectionId && card.dataset.slotId === activeSlotSelectionId;
                                    card.classList.toggle('is-active', Boolean(isActive));
                                });
                                slotAssignButtons.forEach((button) => {
                                    const isSelected = activeSlotSelectionId && button.dataset.slotAssign === activeSlotSelectionId;
                                    button.classList.toggle('is-selected', Boolean(isSelected));
                                });
                            };
                            const slotConfigById = ${JSON.stringify(rJ.reduce((A,G)=>{return A[G.id]=G,A},{}))};
                            const assignBattlePhotoFromGallery = async ({ slotId = '', sourceIndex = -1, mediaType = 'image', cardButton = null }) => {
                                if (!slotId || sourceIndex < 0 || mediaType !== 'image') return false;
                                if (slotId === 'perfil') {
                                    window.alert('El casillero Perfil usa la foto principal del personaje.');
                                    return false;
                                }
                                const slotConfig = slotConfigById[slotId];
                                if (!slotConfig) return false;
                                try {
                                    if (dbRef && profileId) {
                                        const selectedUrl = String(cardButton?.dataset.url || '').trim();
                                        await dbRef.ref(\`perfiles/\${profileId}/batallaFotosPreferidas/\${slotId}\`).set(selectedUrl);
                                        updateSlotCardAssignedState(slotId, selectedUrl);
                                    } else if (window.opener) {
                                        const selectedUrl = String(cardButton?.dataset.url || '').trim();
                                        window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: profileId, slotId, index: sourceIndex, mediaType: 'image' }, '*');
                                        updateSlotCardAssignedState(slotId, selectedUrl);
                                    } else {
                                        return false;
                                    }
                                    setActiveSlotSelection('');
                                    return true;
                                } catch (error) {
                                    console.error('No se pudo asignar la imagen del casillero:', error);
                                    window.alert('No se pudo asignar la imagen al casillero.');
                                    return false;
                                }
                            };
                            document.querySelectorAll('[data-slot-assign]').forEach((button) => {
                                button.addEventListener('click', () => {
                                    const slotId = button.dataset.slotAssign || '';
                                    setActiveSlotSelection(slotId);
                                    
                                });
                            });
                            document.querySelectorAll('[data-slot-add]').forEach((button) => {
                                button.addEventListener('click', () => {
                                    const slotId = button.dataset.slotAdd || '';
                                    window.alert(\`Usá la edición de miniatura de Galería para cargar o actualizar la URL/archivo del casillero \${slotId}.\`);
                                });
                            });

                            document.querySelectorAll('.multimedia-thumb-btn').forEach((button) => {
                                button.addEventListener('dragstart', (event) => {
                                    const payload = {
                                        sourceIndex: Number(button.dataset.index),
                                        mediaType: button.dataset.mediaType || 'image',
                                        url: button.dataset.url || ''
                                    };
                                    if (!isImagePayload(payload)) return;
                                    event.dataTransfer.effectAllowed = 'copy';
                                    event.dataTransfer.setData(DND_PAYLOAD_TYPE, JSON.stringify(payload));
                                    event.dataTransfer.setData('text/plain', payload.url || '');
                                });
                                const isBrokenCard = button.dataset.brokenCard === 'true';
                                const img = button.querySelector('img');
                                if (isBrokenCard && img) {
                                    img.addEventListener('error', () => {
                                        button.style.display = '';
                                        brokenCards.add(button.dataset.index || '');
                                        syncBrokenEmptyState();
                                    });
                                    img.addEventListener('load', () => {
                                        button.style.display = 'none';
                                        brokenCards.delete(button.dataset.index || '');
                                        syncBrokenEmptyState();
                                    });
                                }
                                button.addEventListener('click', async () => {
                                    const sourceTag = button.dataset.tag || 'fotos';
                                    const sourceIndex = Number(button.dataset.index);
                                    if (activeSlotSelectionId) {
                                        const assigned = await assignBattlePhotoFromGallery({ slotId: activeSlotSelectionId, sourceIndex, mediaType: 'image', cardButton: button });
                                        if (assigned) return;
                                    }
                                    const currentUrl = button.dataset.url || '';
                                    const currentLabel = button.dataset.label || '';
                                    const nextUrl = window.prompt('Nueva URL de la multimedia:', currentUrl);
                                    if (nextUrl === null) return;
                                    const nextLabel = window.prompt('Nueva etiqueta (C, P, B, N, S, E, X):', currentLabel || 'C');
                                    if (nextLabel === null) return;
                                    try {
                                        const saved = await saveGalleryItem({ sourceTag, sourceIndex, url: nextUrl, label: nextLabel });
                                        if (!saved) return;
                                        button.dataset.url = nextUrl.trim();
                                        button.dataset.label = normalizeLabel((nextLabel || '').trim().toUpperCase());
                                        const img = button.querySelector('img');
                                        const badge = button.querySelector('.multimedia-thumb-label');
                                        if (img) img.src = nextUrl.trim();
                                        if (badge) badge.textContent = button.dataset.label || 'SIN ETIQUETA';
                                        if (isBrokenCard) syncBrokenEmptyState();
                                    } catch (error) {
                                        console.error('No se pudo guardar multimedia:', error);
                                        window.alert('No se pudo actualizar esta multimedia.');
                                    }
                                });
                            });
                            document.querySelectorAll('.multimedia-slot-card').forEach((slotCard) => {
                                const slotId = slotCard.dataset.slotId || '';
                                if (!slotId || slotId === 'perfil') return;
                                slotCard.addEventListener('dragover', (event) => {
                                    let payload = null;
                                    try { payload = JSON.parse(event.dataTransfer.getData(DND_PAYLOAD_TYPE) || '{}'); } catch {}
                                    if (!isImagePayload(payload)) return;
                                    event.preventDefault();
                                    event.dataTransfer.dropEffect = 'copy';
                                    slotCard.classList.add('drop-hover');
                                });
                                slotCard.addEventListener('dragleave', () => {
                                    slotCard.classList.remove('drop-hover', 'drop-active');
                                });
                                slotCard.addEventListener('drop', (event) => {
                                    event.preventDefault();
                                    slotCard.classList.remove('drop-hover');
                                    slotCard.classList.add('drop-active');
                                    let payload = null;
                                    try { payload = JSON.parse(event.dataTransfer.getData(DND_PAYLOAD_TYPE) || '{}'); } catch {}
                                    assignToSlot(payload, slotId);
                                    setTimeout(() => slotCard.classList.remove('drop-active'), 160);
                                });
                            });
                            document.querySelectorAll('.multimedia-thumb-btn').forEach((button) => {
                                button.addEventListener('pointerdown', (event) => {
                                    if (button.dataset.mediaType !== 'image') return;
                                    clearTimeout(longPressTimer);
                                    touchPayload = {
                                        sourceIndex: Number(button.dataset.index),
                                        mediaType: button.dataset.mediaType || 'image',
                                        url: button.dataset.url || ''
                                    };
                                    longPressTimer = setTimeout(() => {
                                        button.style.outline = '2px solid rgba(34,211,238,0.85)';
                                    }, LONG_PRESS_MS);
                                });
                                button.addEventListener('pointerup', (event) => {
                                    clearTimeout(longPressTimer);
                                    button.style.outline = '';
                                    if (!touchPayload) return;
                                    const slotEl = document.elementFromPoint(event.clientX, event.clientY)?.closest('.multimedia-slot-card[data-slot-id]');
                                    if (slotEl && slotEl.dataset.slotId && slotEl.dataset.slotId !== 'perfil') {
                                        assignToSlot(touchPayload, slotEl.dataset.slotId);
                                    }
                                    touchPayload = null;
                                });
                                button.addEventListener('pointercancel', () => {
                                    clearTimeout(longPressTimer);
                                    button.style.outline = '';
                                    touchPayload = null;
                                });
                            });

                        </script>
                    </body>
                </html>
            `),W.document.close()},H3=({isOpen:j=!1,profile:W=null,onClose:U=()=>{}})=>{let[z,F]=E(!0),[I,p]=E(!0);if(r(()=>{if(!j)return;F(!0),p(!0)},[j,W?.firebaseId]),!j||!W)return null;let XJ=Array.isArray(W?.galeria?.fotos)?W.galeria.fotos.map((b)=>e(b,"image")).filter((b)=>b.url):[],t=Object.entries(W?.puntuaciones||{}).map(([b,V])=>({label:b,value:Number(V)||0})).sort((b,V)=>V.value-b.value).slice(0,5);return React.createElement("div",{className:"fixed inset-0 z-[180] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm px-4 py-8",onClick:U,role:"presentation"},React.createElement("section",{className:"gothic-frame surface-panel surface-panel--neon rounded-[2rem] p-6 md:p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto relative",onClick:(b)=>b.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Multimedia del personaje"},React.createElement("button",{type:"button",onClick:U,className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100"},"✕"),React.createElement("h2",{className:"font-title text-center text-3xl md:text-4xl text-white uppercase tracking-wide"},"Multimedia"),React.createElement("p",{className:"text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2"},W?.nombre||"Personaje"),React.createElement("div",{className:"mt-6 space-y-4"},React.createElement("article",{className:"surface-panel rounded-2xl border border-cyan-200/20"},React.createElement("button",{type:"button",onClick:()=>F((b)=>!b),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between"},React.createElement("span",null,"Galería"),React.createElement("span",null,z?"−":"+")),z&&React.createElement("div",{className:"px-4 pb-4 grid grid-cols-2 md:grid-cols-4 gap-3"},XJ.length?XJ.map((b,V)=>React.createElement("div",{key:`${b.url}-${V}`,className:"rounded-xl overflow-hidden border border-slate-600/40 bg-slate-900/40"},React.createElement("img",{src:b.url,alt:`Multimedia ${V+1}`,className:"w-full h-36 object-cover",loading:"lazy"}))):React.createElement("p",{className:"text-sm text-slate-300 col-span-full"},"Sin contenido en galería."))),React.createElement("article",{className:"surface-panel rounded-2xl border border-cyan-200/20"},React.createElement("button",{type:"button",onClick:()=>p((b)=>!b),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between"},React.createElement("span",null,"5 Principales"),React.createElement("span",null,I?"−":"+")),I&&React.createElement("div",{className:"px-4 pb-4 space-y-2"},t.length?t.map((b)=>React.createElement("div",{key:b.label,className:"surface-panel rounded-xl px-3 py-2 flex items-center justify-between"},React.createElement("span",{className:"text-sm text-slate-200 uppercase"},b.label),React.createElement("strong",{className:"text-cyan-200"},b.value))):React.createElement("p",{className:"text-sm text-slate-300"},"Sin puntajes cargados."))))))},R1=async(j="",{timeoutMs:W=12000,retries:U=1}={})=>{let z=String(j||"").trim();if(!z)return!0;let F=()=>new Promise((I)=>{let p=new Image,XJ=!1,t=(V)=>{if(XJ)return;XJ=!0,p.onload=null,p.onerror=null,I(Boolean(V))},b=window.setTimeout(()=>t(!0),W);p.onload=()=>{clearTimeout(b);let V=Number(p.naturalWidth)>0&&Number(p.naturalHeight)>0;t(!V)},p.onerror=()=>{clearTimeout(b),t(!0)},p.src=z});for(let I=0;I<=U;I+=1)if(!await F())return!1;return!0},B1=(j,W)=>{let U=(W||"").trim().toLowerCase(),z=Array.isArray(j?.galeria?.fotos)?j.galeria.fotos.map((P)=>e(P,"image")).filter((P)=>P.type==="image"&&P.url):[],I=qJ(j?.fotos?.[0],"")||"https://via.placeholder.com/400x500";if(new Set(["rostro","ojos","boca","cabello","carisma","elegancia","dulzura","talento","estatura"]).has(U))return I;let XJ=(P=[])=>{let K=z.filter((c)=>P.includes(M1(c)));if(!K.length)return"";let VJ=Math.floor(Math.random()*K.length);return K[VJ]?.url||""},t=a2(U),b=VZ(t);if(!b)return I;let A=WJ(j?.batallaFotosPreferidas)[t];if(A){if(z.some((K)=>K.url===A))return A}return XJ(b.labels)||I},W3=(j="")=>e2.test((j||"").trim()),OQ="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20256%20256%27%3E%3Crect%20width%3D%27256%27%20height%3D%27256%27%20rx%3D%2740%27%20fill%3D%27%23020617%27/%3E%3Ctext%20x%3D%27128%27%20y%3D%27152%27%20text-anchor%3D%27middle%27%20font-size%3D%27120%27%3E%F0%9F%98%A2%3C/text%3E%3C/svg%3E",lZ=`if(this.dataset.fallbackApplied==='true')return;this.dataset.fallbackApplied='true';this.src='${OQ}';this.style.objectFit='contain';this.style.padding='12px';this.style.background='#020617';this.alt='Imagen no disponible';`,SJ=(j)=>{let W=j?.currentTarget||j?.target;if(!W||W.dataset.fallbackApplied==="true")return;W.dataset.fallbackApplied="true",W.src=OQ,W.style.objectFit="contain",W.style.padding="12px",W.style.background="#020617",W.alt="Imagen no disponible"};var oJ=["Rostro","Ojos","Boca","Cabello","Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura","Sensualidad","Carisma","Elegancia","Dulzura","Talento"],tZ=[...oJ],J0=[{id:"PROFESIONES",label:"Profesiones",description:"Compará perfiles por profesión."},{id:"NACIONALIDADES",label:"Nacionalidades",description:"Compará perfiles por nacionalidad."},{id:"EDADES",label:"Edades",description:"Compará perfiles por rango etario."},{id:"GENERAL",label:"General",description:"Modo libre sin segmentación extra."}],O3=J0.map((j)=>j.id),jQ=(j="")=>{return J0.find((U)=>U.id===j)?.label||"General"},F3=(j="")=>{let W=String(j||"").trim();if(!W)return"";return encodeURIComponent(W.toLowerCase())},L3=(j="")=>{let W=String(j||"").trim();if(!W)return"";try{return decodeURIComponent(W).toLowerCase()}catch{return W.toLowerCase()}},HQ=(j,W="GENERAL",U="")=>{let z=String(j||"").trim(),F=String(W||"GENERAL").trim().toUpperCase(),I=F3(U);if(!z)return"";return`${F}::${I||"all"}::${z}`},DJ=(j="")=>String(j||"").trim(),T1=(j="")=>{let W=String(j||"").split("::");if(W.length<3)return{scopeId:"GENERAL",groupKey:"all",arenaName:""};let U=W.slice(2).join("::");return{scopeId:String(W[0]||"GENERAL").trim().toUpperCase()||"GENERAL",groupKey:L3(W[1]||"all")||"all",arenaName:String(U||"").trim()}},vQ=()=>oJ.reduce((j,W)=>{return j[W]=0,j},{}),A1=[],rZ={Cantante:{glyph:"crown",color:"rgba(34, 211, 238, 0.8)",tailwind:"cyan-400"},Actriz:{glyph:"theater",color:"rgba(34, 197, 94, 0.8)",tailwind:"green-500"},Modelo:{glyph:"floron",color:"rgba(168, 85, 247, 0.8)",tailwind:"purple-500"},NSFW:{glyph:"torch",color:"rgba(239, 68, 68, 0.8)",tailwind:"red-500"},Influencer:{glyph:"sigil",color:"rgba(236, 72, 153, 0.8)",tailwind:"pink-500"},"Bailarina y Atleta":{glyph:"floron",color:"rgba(249, 115, 22, 0.8)",tailwind:"orange-500"},Otro:{glyph:"sigil",color:"rgba(148, 163, 184, 0.8)",tailwind:"slate-400"}};var E3=(j="")=>{let W=String(j||"").toLowerCase();if(W.includes("cantante"))return"\uD83C\uDFA4";if(W.includes("nsfw"))return"\uD83D\uDD25";if(W.includes("actriz")||W.includes("actor"))return"\uD83C\uDFAC";if(W.includes("modelo"))return"\uD83D\uDC60";if(W.includes("influencer"))return"\uD83D\uDCF1";if(W.includes("periodista"))return"\uD83D\uDC53";if(W.includes("bailarina"))return"\uD83D\uDC83";if(W.includes("atleta"))return"\uD83C\uDFCB️‍♀️";return"\uD83D\uDCD6"},xQ=(j="")=>{let W=String(j||"").trim(),U=rZ[W]||rZ.Otro,z=String(U?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 1)"),F=String(U?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 0.75)");return{baseColor:z,glowColor:F}};var o=({name:j,size:W=20,className:U=""})=>{return React.createElement("i",{"data-lucide":j.toLowerCase().replace(/([a-z])([A-Z])/g,"$1-$2"),style:{width:W,height:W},className:`inline-block ${U}`})},oZ=({targetWindow:j,profileName:W,profession:U,photos:z,editingId:F,battlePhotoPrefs:I={},profilePhotoUrl:p=""})=>{if(!j||j.closed)return;let XJ=WJ(I),t=qJ(String(p||"").trim(),""),b=(z||[]).map((V,A)=>{let G=e(V);return{...G,sourceTag:V?.sourceTag||(G.type==="video"?"videos":"fotos"),sourceIndex:typeof V?.sourceIndex==="number"?V.sourceIndex:A}}).filter((V)=>V.url);j.document.open(),j.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Galería de ${W}</title>
                <style>
                    body {
                        background:
                            radial-gradient(circle at 20% 18%, rgba(255, 208, 140, 0.14), transparent 32%),
                            radial-gradient(circle at 82% 8%, rgba(184, 115, 51, 0.17), transparent 28%),
                            linear-gradient(180deg, #120f0a 0%, #1d160f 45%, #271b12 100%);
                        color: #f7ebd2;
                        font-family: 'Cinzel', 'Plus Jakarta Sans', serif;
                        padding: 40px;
                        margin: 0;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .btn-critical-plate {
                        position: fixed;
                        top: 20px;
                        right: 30px;
                        padding: 10px 20px;
                        color: #ff3131;
                        font-weight: 800;
                        font-size: 11px;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        background: #020617;
                        border: 2px solid #ff3131;
                        border-radius: 12px;
                        cursor: pointer;
                        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22), inset 0 0 0 2px rgba(255, 49, 49, 0.22), 4px 4px 0px #660000;
                        transition: all 0.3s ease;
                        text-shadow: 0 0 8px #ff3131;
                        z-index: 999;
                    }
                    .btn-critical-plate:hover {
                        background: #ff3131;
                        color: white;
                        box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 0 20px rgba(255,49,49,0.5);
                        transform: translateY(-1px);
                    }
                    .modal-url {
                        display: none;
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: #0f172a;
                        padding: 30px;
                        border-radius: 18px;
                        border: 1px solid rgba(100, 116, 139, 0.45);
                        box-shadow: inset 0 1px 0 rgba(148, 163, 184, 0.18), 0 24px 48px rgba(0,0,0,0.55);
                        z-index: 1000;
                        width: 350px;
                    }
                    input {
                        width: 100%;
                        padding: 12px;
                        margin-top: 15px;
                        background: #020617;
                        border: 1px solid #334155;
                        color: #22d3ee;
                        border-radius: 8px;
                        outline: none;
                    }
                    h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; color: #fff; text-align: center; }
                    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; width: 100%; }
                    .fullscreen-viewer {
                        display: none;
                        position: fixed;
                        inset: 0;
                        z-index: 2000;
                        background:
                            radial-gradient(circle at 50% 20%, rgba(255, 214, 153, 0.08), transparent 42%),
                            rgba(16, 10, 4, 0.95);
                        backdrop-filter: blur(6px);
                    }
                    .fullscreen-viewer.open {
                        display: flex;
                    }
                    .viewer-close {
                        position: fixed;
                        top: calc(env(safe-area-inset-top, 0px) + 16px);
                        right: calc(env(safe-area-inset-right, 0px) + 16px);
                        z-index: 2100;
                        background: rgba(15, 23, 42, 0.9);
                        color: #f87171;
                        border: 1px solid rgba(248, 113, 113, 0.78);
                        border-radius: 999px;
                        width: 48px;
                        height: 48px;
                        cursor: pointer;
                        font-size: 30px;
                        font-weight: 900;
                        line-height: 1;
                        font-weight: 700;
                        box-shadow:
                            0 6px 16px rgba(0, 0, 0, 0.55),
                            inset 0 1px 0 rgba(255, 244, 214, 0.35),
                            inset 0 -2px 0 rgba(48, 28, 12, 0.55);
                        text-shadow: 0 0 6px rgba(0, 0, 0, 0.75);
                        transition: transform 0.14s ease, opacity 0.14s ease, box-shadow 0.2s ease, filter 0.2s ease;
                    }
                    .viewer-close:hover {
                        transform: scale(1.06);
                        filter: brightness(1.08);
                        box-shadow:
                            0 8px 18px rgba(0, 0, 0, 0.62),
                            inset 0 1px 0 rgba(255, 244, 214, 0.42),
                            inset 0 -2px 0 rgba(48, 28, 12, 0.62);
                    }
                    .viewer-close:focus-visible,
                    .viewer-nav:focus-visible {
                        outline: 3px solid #ffe0a8;
                        outline-offset: 3px;
                    }
                    .viewer-close:active,
                    .viewer-nav:active,
                    .viewer-control-btn:active {
                        transform: scale(0.95);
                        opacity: 0.85;
                    }
                    .viewer-stage {
                        position: relative;
                        width: 100%;
                        height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 32px 24px 112px;
                        box-sizing: border-box;
                    }
                    .viewer-slide {
                        position: absolute;
                        inset: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        visibility: hidden;
                        pointer-events: none;
                        transform: translate3d(0, 12px, 0) scale(0.992);
                        transition: opacity 260ms ease, transform 300ms ease, visibility 0s linear 300ms;
                        will-change: opacity, transform;
                    }
                    .viewer-slide.active {
                        opacity: 1;
                        visibility: visible;
                        pointer-events: auto;
                        transform: translate3d(0, 0, 0) scale(1);
                        transition: opacity 240ms ease, transform 260ms ease, visibility 0s linear 0s;
                    }
                    .viewer-slide img {
                        max-width: min(92vw, 1400px);
                        max-height: calc(100vh - 64px);
                        width: auto;
                        height: auto;
                        object-fit: contain;
                        border-radius: 20px;
                        border: 3px solid #c8a167;
                        box-shadow:
                            0 24px 52px rgba(0, 0, 0, 0.64),
                            0 0 0 3px rgba(83, 55, 27, 0.8),
                            inset 0 0 24px rgba(255, 223, 171, 0.12);
                    }
                    .viewer-nav {
                        position: relative;
                        z-index: 2100;
                        width: 48px;
                        height: 48px;
                        border-radius: 50%;
                        border: 2px solid #d8b374;
                        background: linear-gradient(180deg, #624021 0%, #3a2512 100%);
                        color: #fff7e6;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        font-size: 28px;
                        font-weight: 900;
                        line-height: 1;
                        text-shadow: 0 0 5px rgba(0, 0, 0, 0.72);
                        box-shadow:
                            0 6px 16px rgba(0, 0, 0, 0.55),
                            inset 0 1px 0 rgba(255, 244, 214, 0.34),
                            inset 0 -2px 0 rgba(48, 28, 12, 0.55);
                        transition: transform 0.14s ease, opacity 0.14s ease, border-color 0.2s ease, color 0.2s ease, filter 0.2s ease;
                    }
                    .viewer-nav:hover {
                        transform: scale(1.06);
                        border-color: #f0c883;
                        color: #fff7e6;
                        filter: brightness(1.1);
                    }
                    .viewer-nav[disabled] {
                        opacity: 0.62;
                        cursor: default;
                        filter: grayscale(0.28);
                    }
                    .viewer-nav[disabled]:hover {
                        transform: none;
                        border-color: #d8b374;
                        color: #fff7e6;
                        filter: grayscale(0.28);
                    }
                    .viewer-hint {
                        position: fixed;
                        left: 50%;
                        bottom: calc(env(safe-area-inset-bottom, 0px) + 104px);
                        transform: translateX(-50%);
                        z-index: 2100;
                        padding: 10px 16px;
                        border-radius: 999px;
                        background: rgba(43, 29, 16, 0.72);
                        color: #f6e7ca;
                        border: 1px solid rgba(201, 162, 98, 0.72);
                        font-size: 12px;
                        letter-spacing: 0.08em;
                        text-transform: uppercase;
                        pointer-events: none;
                    }
                    .viewer-controls {
                        position: fixed;
                        top: calc(env(safe-area-inset-top, 0px) + 16px);
                        left: calc(env(safe-area-inset-left, 0px) + 16px);
                        z-index: 2100;
                        display: flex;
                        gap: 10px;
                        padding: 8px 10px;
                        border-radius: 999px;
                        background: rgba(10, 24, 38, 0.35);
                        border: 1px solid rgba(56, 189, 248, 0.28);
                    }
                    .viewer-bottom-bar {
                        position: fixed;
                        left: 50%;
                        transform: translateX(-50%);
                        bottom: calc(env(safe-area-inset-bottom, 0px) + 16px);
                        z-index: 2100;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;
                        padding: 10px 12px;
                        border-radius: 999px;
                        background: rgba(25, 16, 8, 0.85);
                        border: 1px solid rgba(201, 162, 98, 0.72);
                        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);
                    }
                    .viewer-control-btn {
                        border: 1px solid rgba(56, 189, 248, 0.5);
                        background: rgba(8, 47, 73, 0.52);
                        color: #bae6fd;
                        border-radius: 999px;
                        padding: 8px 14px;
                        min-width: 44px;
                        min-height: 44px;
                        font-size: 10px;
                        text-transform: uppercase;
                        letter-spacing: 0.2em;
                        font-weight: 900;
                        cursor: pointer;
                    }
                    .viewer-control-btn.random-active {
                        border-color: rgba(232, 121, 249, 0.85);
                        color: #f5d0fe;
                        background: rgba(192, 38, 211, 0.35);
                    }
                    @media (max-width: 640px) {
                        .viewer-stage {
                            padding: calc(env(safe-area-inset-top, 0px) + 18px) 16px calc(env(safe-area-inset-bottom, 0px) + 132px);
                        }
                        .viewer-close {
                            top: calc(env(safe-area-inset-top, 0px) + 12px);
                            right: calc(env(safe-area-inset-right, 0px) + 12px);
                            width: 48px;
                            height: 48px;
                        }
                        .viewer-nav {
                            width: 48px;
                            height: 48px;
                            font-size: 22px;
                        }
                        .viewer-hint {
                            bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
                            padding: 8px 12px;
                            font-size: 10px;
                            max-width: calc(100vw - 120px);
                            text-align: center;
                        }
                        .viewer-controls {
                            top: calc(env(safe-area-inset-top, 0px) + 12px);
                            left: calc(env(safe-area-inset-left, 0px) + 12px);
                            gap: 8px;
                            padding: 7px 9px;
                        }
                        .viewer-control-btn {
                            padding: 9px 12px;
                            font-size: 9px;
                            letter-spacing: 0.16em;
                            min-width: 46px;
                            min-height: 46px;
                        }
                        .viewer-bottom-bar {
                            bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);
                            gap: 8px;
                            padding: 8px 10px;
                            width: min(94vw, 430px);
                            justify-content: space-between;
                        }
                    }
                </style>
            </head>
            <body>
                <h1>Galería de ${W}</h1>
                <button class="btn-critical-plate" onclick="document.getElementById('miModal').style.display='block'">
                    AGREGAR ARCHIVO
                </button>

                <div id="miModal" class="modal-url">
                    <h2 style="margin:0; font-size: 14px; color: #94a3b8;">PEGAR URL DEL ARCHIVO</h2>
                    <input type="text" id="nuevaFotoUrl" placeholder="https://ejemplo.com/foto.jpg o https://youtube.com/...">
                    <label for="nuevoArchivoLocal" style="display:block; margin-top: 14px; font-size: 10px; font-weight: 900; letter-spacing: 0.14em; color: #94a3b8; text-transform: uppercase;">o subir desde escritorio</label>
                    <input type="file" id="nuevoArchivoLocal" accept="image/*,video/*,.gif" multiple style="width: 100%; margin-top: 8px; padding: 10px; background: #020617; border: 1px dashed rgba(34,211,238,0.65); color: #e2e8f0; border-radius: 8px; outline: none; font-size: 12px; box-shadow: 0 0 10px rgba(34,211,238,0.18);">
                    <select id="nuevoArchivoTipo" style="width: 100%; padding: 12px; margin-top: 15px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color: #e2e8f0; border-radius: 8px; outline: none; box-shadow: inset 0 1px 0 rgba(148,163,184,0.18);">
                        <option value="image">Imagen</option>
                        <option value="video">Video</option>
                    </select>
                    <select id="nuevaFotoEtiqueta" style="width: 100%; padding: 12px; margin-top: 15px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color: #e2e8f0; border-radius: 8px; outline: none; box-shadow: inset 0 1px 0 rgba(148,163,184,0.18);">
                        ${$J.map((V)=>`<option value="${V}">Etiqueta ${V}</option>`).join("")}
                    </select>
                    <input type="text" id="nuevaFotoAutor" placeholder="Autor (opcional)" style="width: 100%; padding: 12px; margin-top: 15px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color: #e2e8f0; border-radius: 8px; outline: none; box-shadow: inset 0 1px 0 rgba(148,163,184,0.18);">
                    <input type="hidden" id="slotSelectionId" value="">
                    <p id="slotGalleryHint" style="display:none; margin:10px 0 0; font-size:11px; color:#93c5fd;">Tip: para “Elegir desde galería” tocá cualquier imagen para asignarla.</p>
                    <button id="guardarArchivoButton" onclick="addMediaFromModal()"
                        style="margin-top: 15px; width: 100%; padding: 10px; background: linear-gradient(180deg, rgba(14,116,144,0.95), rgba(8,47,73,0.95)); color: #ecfeff; border: 1px solid rgba(103,232,249,0.9); border-radius: 8px; font-weight: 800; cursor: pointer; text-transform: uppercase; letter-spacing: 0.08em; box-shadow: 0 0 14px rgba(34,211,238,0.4);">
                        Guardar
                    </button>
                    <p id="uploadStatusMessage" style="display:none; margin:10px 0 0; font-size:11px; color:#67e8f9; font-weight:800; letter-spacing:0.08em; text-transform:uppercase;"></p>
                    <button id="modalPlayFullscreenButton" type="button" onclick="startFullscreenPlaybackFromModal(event)"
                        style="margin-top: 10px; width: 100%; padding: 10px; background: linear-gradient(180deg, rgba(30,64,175,0.95), rgba(30,58,138,0.95)); color: #dbeafe; border: 1px solid rgba(147,197,253,0.9); border-radius: 8px; font-weight: 800; cursor: pointer; text-transform: uppercase; letter-spacing: 0.08em; box-shadow: 0 0 14px rgba(59,130,246,0.38);">
                        Play pantalla completa
                    </button>
                </div>

                <details open style="width:100%; margin-bottom: 20px; border-radius: 12px; border: 1px solid rgba(148,163,184,0.28); background: rgba(2,6,23,0.45);">
                    <summary style="cursor:pointer; list-style:none; padding: 12px 14px; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 900; color: #f8fafc;">
                        5 Principales
                    </summary>
                    <div style="padding: 0 14px 14px; display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 10px;">
                    ${rJ.map((V)=>{let A=V.id==="perfil",G=A?t:XJ[V.id]||"",P=Boolean(G),K=!A;return`
                            <div class="gallery-slot-card" data-slot-id="${V.id}" style="border:1px solid ${P?"rgba(74,222,128,0.95)":"rgba(248,113,113,0.95)"}; border-radius:10px; padding:10px; background:${P?"linear-gradient(155deg, rgba(20,83,45,0.95) 0%, rgba(21,128,61,0.82) 45%, rgba(5,46,22,0.96) 100%)":"linear-gradient(155deg, rgba(127,29,29,0.96) 0%, rgba(185,28,28,0.84) 45%, rgba(69,10,10,0.96) 100%)"}; box-shadow: inset 0 2px 0 rgba(255,255,255,0.24), inset 0 -2px 0 rgba(2,6,23,0.45), inset 0 0 0 1px ${P?"rgba(187,247,208,0.25)":"rgba(254,202,202,0.22)"}, 0 8px 16px rgba(2,6,23,0.45), 0 0 18px ${P?"rgba(74,222,128,0.35)":"rgba(248,113,113,0.3)"}; position: relative;">
                                <div style="position:absolute; inset:1px; border-radius:9px; pointer-events:none; background: linear-gradient(145deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.05) 22%, rgba(255,255,255,0) 42%, rgba(2,6,23,0.22) 78%, rgba(2,6,23,0.42) 100%);"></div>
                                <div style="font-size:10px; color:#f8fafc; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; position:relative;">${V.label}</div>
                                <div style="font-size:11px; color:${P?"#dcfce7":"#fee2e2"}; margin-top:6px; font-weight:800; position:relative; text-shadow: 0 1px 0 rgba(15,23,42,0.65);">
                                    Estado: ${P?"Asignada":"No asignada"}
                                </div>
                                <div style="margin-top:8px; border-radius:8px; overflow:hidden; aspect-ratio:4/3; border:1px dashed rgba(148,163,184,0.45); background: rgba(2,6,23,0.86); display:flex; align-items:center; justify-content:center;">
                                    ${P?`<img src="${G}" alt="Vista previa ${V.label}" onerror="${lZ}" style="width:100%; height:100%; object-fit:cover; display:block;" />`:'<span style="font-size:10px; color:#fca5a5; text-transform:uppercase; letter-spacing:0.08em; font-weight:700; text-align:center; padding:0 8px;">Sin foto designada</span>'}
                                </div>
                                <div style="display:grid; gap:6px; margin-top:8px;">
                                    <button
                                        type="button"
                                        onclick="event.stopPropagation(); openSlotActionModal('${V.id}', 'url');"
                                        style="width:100%; border:1px solid rgba(125,211,252,0.6); background: rgba(2,6,23,0.82); color:#e2e8f0; border-radius:8px; padding:6px 8px; font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; box-shadow: 0 0 12px rgba(34,211,238,0.22);"
                                    >
                                        Agregar URL/Archivo
                                    </button>
                                    ${K?`<button
                                        type="button"
                                        class="slot-gallery-select-btn"
                                        data-slot-id="${V.id}"
                                        onclick="event.stopPropagation(); selectSlotFromGallery('${V.id}');"
                                        style="width:100%; border:1px solid rgba(203,213,225,0.92); background: linear-gradient(165deg, rgba(148,163,184,0.5) 0%, rgba(71,85,105,0.82) 45%, rgba(30,41,59,0.94) 100%); color:#f8fafc; border-radius:8px; padding:6px 8px; font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; box-shadow: inset 0 1px 0 rgba(255,255,255,0.42), inset 0 -1px 0 rgba(15,23,42,0.55), 0 6px 12px rgba(2,6,23,0.45); transition: box-shadow 180ms ease, border-color 180ms ease, filter 180ms ease, background 180ms ease;"
                                    >
                                        Designar de galería
                                    </button>`:""}
                                </div>
                            </div>
                        `}).join("")}
                    </div>
                </details>

                <div class="grid" id="galleryGrid">
                    ${b.length?b.map((V,A)=>{let G=$3(V),P=M1(V),K=tJ(P),VJ={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},c=VJ[U?.toUpperCase()]||VJ.DEFAULT;return`
                        <div
                            class="gallery-card"
                            data-gallery-index="${A}"
                            data-source-index="${V.sourceIndex}"
                            data-media-type="${lJ(V)}"
                            data-url="${G}"
                            data-compatible-slots="${P}"
                            draggable="${lJ(V)==="image"?"true":"false"}"
                            title="Abrir visor de pantalla completa"
                            style="
                                aspect-ratio: 1/1;
                                border-radius: 15px;
                                overflow: hidden;
                                border: 2px solid ${c.color};
                                box-shadow: 0 0 15px ${c.sombra};
                                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                                cursor: ${lJ(V)==="image"?"grab":"pointer"};
                                position: relative;
                                background: #0f172a;
                            "
                            onmouseover="this.style.transform='scale(1.08)'; this.style.boxShadow='0 0 35px ${c.color}, inset 0 0 15px ${c.sombra}'; this.style.zIndex='10';"
                            onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 0 15px ${c.sombra}'; this.style.zIndex='1';"
                        >
                           <button
                            onclick="event.stopPropagation(); window.opener.postMessage({type: 'DELETE_IMAGE', index: ${V.sourceIndex}, mediaType: '${lJ(V)}', id: '${F}'}, '*');"
                            style="
                                position: absolute;
                                top: 5px;
                                right: 5px;
                                z-index: 20;
                                background: #ef4444;
                                color: white;
                                border: none;
                                width: 22px;
                                height: 22px;
                                border-radius: 50%;
                                cursor: pointer;
                                font-weight: bold;
                                font-size: 12px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
                            "
                            aria-label="Eliminar elemento de galería"
                            type="button"
                        >✕</button>
                        ${lJ(V)==="video"?(()=>{let NJ=FQ(G);if(NJ)return`<div style="width: 100%; height: 100%; background: radial-gradient(circle at top, rgba(34,211,238,0.35), rgba(15,23,42,0.96)); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; padding: 18px; box-sizing:border-box; text-align:center;"><div style="width:64px; height:64px; border-radius:999px; border:1px solid rgba(34,211,238,0.5); background:rgba(15,23,42,0.75); display:flex; align-items:center; justify-content:center; color:#22d3ee; font-size:28px;">▶</div><div style="font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#e2e8f0;">Video embebido</div><div style="font-size:11px; color:#94a3b8; max-width:100%; word-break:break-word;">${NJ.provider.toUpperCase()}</div></div>`;return`<video src="${G}" style="width: 100%; height: 100%; object-fit: cover;" muted playsinline preload="metadata"></video>`})():`<img src="${G}" alt="Imagen de la galería" onerror="${lZ}" style="width: 100%; height: 100%; object-fit: cover;" />`}
                        <div style="position:absolute; left: 12px; top: 12px; z-index: 15; padding: 6px 10px; border-radius: 999px; background: rgba(2,6,23,0.72); border: 1px solid rgba(148,163,184,0.24); color: #e2e8f0; display:flex; align-items:center; justify-content:center; font-size: 10px; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase; backdrop-filter: blur(8px);">${lJ(V)==="video"?"VIDEO":"IMG"}</div>
                        ${P?`<div style="position:absolute; left: 50%; bottom: 10px; transform: translateX(-50%); z-index: 15; min-width: 52px; height: 30px; padding: 0 14px; border-radius: 999px; background: ${K.bg}; border: 1px solid ${K.border}; color: ${K.text}; display:flex; align-items:center; justify-content:center; font-size: 12px; font-weight: 900; letter-spacing: 0.24em; box-shadow: 0 0 14px ${K.glow}, 0 0 24px ${K.glow}; text-shadow: 0 0 10px ${K.glow}; backdrop-filter: blur(8px);">${P}</div>`:""}
                        ${V.autor?`<div style="position:absolute; left:10px; right:10px; bottom:${P?"48px":"10px"}; z-index:15; padding:6px 8px; border-radius:10px; background:rgba(2,6,23,0.74); border:1px solid rgba(148,163,184,0.3); color:#e2e8f0; font-size:10px; line-height:1.2; font-weight:700; letter-spacing:0.04em; text-align:left; backdrop-filter:blur(6px);">Autor: ${V.autor}</div>`:""}
                        </div>
                    `}).join(""):'<p style="text-align:center; grid-column: 1/-1; color: #64748b;">No hay archivos cargados.</p>'}
                </div>

                <div id="fullscreenViewer" class="fullscreen-viewer">
                    <button class="viewer-close" onclick="closeFullscreenViewer()" aria-label="Cerrar visor">✕</button>
                    <div class="viewer-bottom-bar">
                        <button id="viewerRandomToggle" class="viewer-control-btn" type="button" onclick="toggleViewerRandom(event)">Random Off</button>
                        <button id="viewerPlayToggle" class="viewer-control-btn viewer-control-btn--center" type="button" onclick="toggleViewerAutoplay(event)">Play</button>
                        <button class="viewer-nav next" id="viewerNext" onclick="showNextViewerPhoto(event)" aria-label="Foto siguiente">→</button>
                    </div>
                    <div class="viewer-hint">Usá ← → para cambiar y Escape para salir</div>
                    <div class="viewer-stage" id="viewerStage">
                        ${b.map((V,A)=>{let G=lJ(V),P=FQ(V.url);return`
                            <div class="viewer-slide" id="viewer-slide-${A}">
                                ${G==="video"?P?`<iframe src="${P.src}" title="${P.title} ${A+1}" style="width:min(92vw, 1400px); height:min(75vh, 820px); border:0; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`:`<video src="${V.url}" controls playsinline preload="metadata" style="max-width:min(92vw, 1400px); max-height:calc(100vh - 64px); width:auto; height:auto; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;"></video>`:`<img src="${V.url}" alt="Vista completa ${A+1}" onerror="${lZ}" />`}
                            </div>`}).join("")}
                    </div>
                </div>

                <script>
                    const viewer = document.getElementById('fullscreenViewer');
                    const viewerStage = document.getElementById('viewerStage');
                    const galleryGrid = document.getElementById('galleryGrid');
                    const viewerSlides = Array.from(document.querySelectorAll('.viewer-slide'));
                    const viewerNextButton = document.getElementById('viewerNext');
                    const viewerPlayToggleButton = document.getElementById('viewerPlayToggle');
                    const viewerRandomToggleButton = document.getElementById('viewerRandomToggle');
                    const modalPlayFullscreenButton = document.getElementById('modalPlayFullscreenButton');
                    const VALID_FILE_MIME_PREFIXES = ['image/', 'video/'];
                    const VALID_FILE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'mp4', 'webm', 'ogg', 'mov', 'm4v'];
                    const VIEWER_IMAGE_TIMEOUT_MS = 7000;
                    const VIEWER_VIDEO_FALLBACK_TIMEOUT_MS = 30000;
                    const VIEWER_RETRY_DELAY_MS = 900;
                    const VIEWER_PRELOAD_RADIUS = 1;
                    const VIEWER_STATES = Object.freeze({
                        IDLE: 'idle',
                        SHOWING_IMAGE: 'showing-image',
                        PLAYING_VIDEO: 'playing-video',
                        TRANSITIONING: 'transitioning'
                    });
                    let currentViewerIndex = 0;
                    let viewerAutoplay = false;
                    let viewerRandom = false;
                    let viewerAutoplayTimeout = null;
                    let viewerState = VIEWER_STATES.IDLE;
                    let viewerTransitionToken = 0;
                    let viewerRecoveryInProgress = false;
                    let activeSlotSelectionId = '';
                    const DND_PAYLOAD_TYPE = 'application/x-battle-slot-item';
                    const LONG_PRESS_MS = 280;
                    let longPressTimer = null;
                    let touchPayload = null;
                    const SWIPE_DISTANCE_THRESHOLD = 72;
                    const SWIPE_VELOCITY_THRESHOLD = 0.35;
                    const SWIPE_FEEDBACK_MAX_TRANSLATE = 52;
                    const SWIPE_VERTICAL_LOCK_RATIO = 1.2;
                    let viewerSwipeState = {
                        active: false,
                        pointerId: null,
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        startTime: 0,
                        isHorizontal: false,
                        isVertical: false,
                        blockedByMediaControl: false
                    };

                    function isAllowedFileType(file) {
                        if (!file) return false;
                        const mime = String(file.type || '').toLowerCase();
                        const ext = String(file.name || '').split('.').pop()?.toLowerCase() || '';
                        return VALID_FILE_MIME_PREFIXES.some((prefix) => mime.startsWith(prefix)) || VALID_FILE_EXTENSIONS.includes(ext);
                    }

                    function setUploadStatus(message = '', isError = false) {
                        const status = document.getElementById('uploadStatusMessage');
                        const saveButton = document.getElementById('guardarArchivoButton');
                        if (status) {
                            status.textContent = message;
                            status.style.display = message ? 'block' : 'none';
                            status.style.color = isError ? '#fda4af' : '#67e8f9';
                        }
                        if (saveButton) {
                            saveButton.disabled = Boolean(message) && !isError;
                            saveButton.style.opacity = saveButton.disabled ? '0.65' : '1';
                            saveButton.style.cursor = saveButton.disabled ? 'wait' : 'pointer';
                        }
                    }

                    function readLocalFileAsDataUrl(file) {
                        return new Promise((resolve, reject) => {
                            const reader = new FileReader();
                            reader.onload = () => resolve(String(reader.result || ''));
                            reader.onerror = () => reject(new Error('No se pudo leer el archivo local.'));
                            reader.readAsDataURL(file);
                        });
                    }

                    async function uploadLocalFileFromGalleryWindow(file, uploadTarget) {
                        const parentUploader = window.opener && !window.opener.closed ? window.opener.uploadLocalFileToStorage : null;
                        if (typeof parentUploader === 'function') {
                            return parentUploader(file, uploadTarget);
                        }
                        return readLocalFileAsDataUrl(file);
                    }

                    function openSlotActionModal(slotId, mode = '') {
                        activeSlotSelectionId = slotId || '';
                        const modal = document.getElementById('miModal');
                        const galleryHint = document.getElementById('slotGalleryHint');
                        const slotInput = document.getElementById('slotSelectionId');
                        if (slotInput) slotInput.value = activeSlotSelectionId;
                        if (galleryHint) {
                            galleryHint.style.display = mode === 'gallery' && slotId !== 'perfil' ? 'block' : 'none';
                        }
                        if (modal) modal.style.display = 'block';
                    }

                    function updateSlotGalleryButtons() {
                        const buttons = document.querySelectorAll('.slot-gallery-select-btn');
                        buttons.forEach((button) => {
                            const buttonSlotId = button.getAttribute('data-slot-id') || '';
                            const isActive = Boolean(activeSlotSelectionId) && buttonSlotId === activeSlotSelectionId;
                            if (isActive) {
                                button.style.borderColor = 'rgba(74,222,128,0.98)';
                                button.style.background = 'linear-gradient(160deg, rgba(22,163,74,0.98) 0%, rgba(34,197,94,0.94) 45%, rgba(20,83,45,0.98) 100%)';
                                button.style.color = '#ecfdf5';
                                button.style.boxShadow = 'inset 0 1px 0 rgba(220,252,231,0.55), inset 0 -1px 0 rgba(5,46,22,0.62), 0 0 16px rgba(74,222,128,0.95), 0 0 34px rgba(34,197,94,0.82)';
                                button.style.filter = 'brightness(1.24) saturate(1.2)';
                            } else {
                                button.style.borderColor = 'rgba(203,213,225,0.92)';
                                button.style.background = 'linear-gradient(165deg, rgba(148,163,184,0.5) 0%, rgba(71,85,105,0.82) 45%, rgba(30,41,59,0.94) 100%)';
                                button.style.color = '#f8fafc';
                                button.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.42), inset 0 -1px 0 rgba(15,23,42,0.55), 0 6px 12px rgba(2,6,23,0.45)';
                                button.style.filter = 'brightness(1) saturate(1)';
                            }
                        });
                    }

                    function selectSlotFromGallery(slotId) {
                        activeSlotSelectionId = slotId || '';
                        const slotInput = document.getElementById('slotSelectionId');
                        if (slotInput) slotInput.value = activeSlotSelectionId;
                        updateSlotGalleryButtons();
                    }

                    function isImagePayload(payload = {}) {
                        return String(payload.mediaType || '').trim() === 'image';
                    }

                    function assignToSlot(payload = {}, slotId = '') {
                        if (!slotId || !window.opener || !isImagePayload(payload)) return false;
                        const sourceIndex = Number(payload.sourceIndex);
                        if (!Number.isInteger(sourceIndex) || sourceIndex < 0) return false;
                        window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: '${F}', slotId, index: sourceIndex, mediaType: payload.mediaType || 'image' }, '*');
                        activeSlotSelectionId = '';
                        const slotInput = document.getElementById('slotSelectionId');
                        if (slotInput) slotInput.value = '';
                        updateSlotGalleryButtons();
                        return true;
                    }

                    function tryAssignGalleryCardToActiveSlot(card) {
                        if (!card || !activeSlotSelectionId) return false;
                        const payload = {
                            sourceIndex: Number(card.dataset.sourceIndex),
                            mediaType: card.dataset.mediaType || 'image',
                            url: card.dataset.url || '',
                            compatibleSlots: card.dataset.compatibleSlots || ''
                        };
                        return assignToSlot(payload, activeSlotSelectionId);
                    }

                    function resetAddMediaModalFields() {
                        const urlInput = document.getElementById('nuevaFotoUrl');
                        const localInput = document.getElementById('nuevoArchivoLocal');
                        const labelInput = document.getElementById('nuevaFotoEtiqueta');
                        const authorInput = document.getElementById('nuevaFotoAutor');
                        const mediaTypeInput = document.getElementById('nuevoArchivoTipo');
                        const slotInput = document.getElementById('slotSelectionId');
                        if (urlInput) urlInput.value = '';
                        if (localInput) localInput.value = '';
                        if (labelInput) labelInput.value = '${$J[0]}';
                        if (authorInput) authorInput.value = '';
                        if (mediaTypeInput) mediaTypeInput.value = 'image';
                        if (slotInput) slotInput.value = '';
                        const galleryHint = document.getElementById('slotGalleryHint');
                        if (galleryHint) galleryHint.style.display = 'none';
                        activeSlotSelectionId = '';
                        updateSlotGalleryButtons();
                    }

                    async function addMediaFromModal() {
                        const urlInput = document.getElementById('nuevaFotoUrl');
                        const localInput = document.getElementById('nuevoArchivoLocal');
                        const labelInput = document.getElementById('nuevaFotoEtiqueta');
                        const authorInput = document.getElementById('nuevaFotoAutor');
                        const mediaTypeInput = document.getElementById('nuevoArchivoTipo');
                        const normalizedUrl = (urlInput?.value || '').trim();
                        const selectedFiles = Array.from(localInput?.files || []);
                        const mediaType = mediaTypeInput?.value || 'image';
                        const label = labelInput?.value || '${$J[0]}';
                        const autor = (authorInput?.value || '').trim();
                        const slotSelectionId = activeSlotSelectionId || document.getElementById('slotSelectionId')?.value || '';

                        const postMedia = (finalUrl, finalType, canAssignSlot = true) => {
                            if (!finalUrl) return;
                            window.opener.postMessage({ type: 'ADD_IMAGE', url: finalUrl, label, autor, mediaType: finalType, id: '${F}' }, '*');
                            if (slotSelectionId && canAssignSlot) {
                                window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF_BY_URL', id: '${F}', slotId: slotSelectionId, url: finalUrl, mediaType: finalType, label }, '*');
                            }
                        };

                        if (selectedFiles.length) {
                            const invalidFile = selectedFiles.find((file) => !isAllowedFileType(file));
                            if (invalidFile) {
                                alert('Uno o más archivos no son válidos. Usá imagen o video.');
                                setUploadStatus('', false);
                                return;
                            }

                            setUploadStatus('Subiendo ' + selectedFiles.length + ' archivo(s)...', false);
                            try {
                                const filesData = await Promise.all(selectedFiles.map(async (file) => {
                                    const uploadTarget = file.type && file.type.startsWith('video/') ? 'perfiles/videos' : 'perfiles/fotos';
                                    const uploadedUrl = await uploadLocalFileFromGalleryWindow(file, uploadTarget);
                                    return {
                                        url: uploadedUrl,
                                        type: file.type && file.type.startsWith('video/') ? 'video' : 'image'
                                    };
                                }));
                                filesData.forEach((fileData, index) => {
                                    postMedia(fileData.url, fileData.type, index === 0);
                                });
                                document.getElementById('miModal').style.display = 'none';
                                resetAddMediaModalFields();
                                setUploadStatus('', false);
                            } catch (error) {
                                const message = error && error.message ? error.message : 'No se pudo subir el archivo seleccionado.';
                                setUploadStatus(message, true);
                                alert(message);
                            }
                            return;
                        }

                        if (!normalizedUrl) {
                            alert('Pegá una URL o seleccioná un archivo local.');
                            return;
                        }

                        postMedia(normalizedUrl, mediaType);
                        document.getElementById('miModal').style.display = 'none';
                        resetAddMediaModalFields();
                    }

                    galleryGrid?.addEventListener('click', (event) => {
                        const card = event.target.closest('.gallery-card');
                        if (!card) return;
                        const assigned = tryAssignGalleryCardToActiveSlot(card);
                        if (assigned) {
                            event.preventDefault();
                            event.stopImmediatePropagation();
                            event.stopPropagation();
                            return;
                        }
                    });
                    galleryGrid?.addEventListener('dragstart', (event) => {
                        const card = event.target.closest('.gallery-card');
                        if (!card) return;
                        const payload = {
                            sourceIndex: Number(card.dataset.sourceIndex),
                            mediaType: card.dataset.mediaType || 'image',
                            url: card.dataset.url || '',
                            compatibleSlots: card.dataset.compatibleSlots || ''
                        };
                        if (!isImagePayload(payload)) return;
                        event.dataTransfer.effectAllowed = 'copy';
                        event.dataTransfer.setData(DND_PAYLOAD_TYPE, JSON.stringify(payload));
                        event.dataTransfer.setData('text/plain', payload.url || '');
                    });
                    galleryGrid?.addEventListener('pointerdown', (event) => {
                        const card = event.target.closest('.gallery-card');
                        if (!card || card.dataset.mediaType !== 'image') return;
                        clearTimeout(longPressTimer);
                        touchPayload = {
                            sourceIndex: Number(card.dataset.sourceIndex),
                            mediaType: card.dataset.mediaType || 'image',
                            url: card.dataset.url || '',
                            compatibleSlots: card.dataset.compatibleSlots || ''
                        };
                        longPressTimer = setTimeout(() => {
                            card.classList.add('ring-2', 'ring-cyan-300');
                        }, LONG_PRESS_MS);
                    });
                    galleryGrid?.addEventListener('pointerup', (event) => {
                        clearTimeout(longPressTimer);
                        const card = event.target.closest('.gallery-card');
                        if (card) card.classList.remove('ring-2', 'ring-cyan-300');
                        if (!touchPayload) return;
                        const slotEl = document.elementFromPoint(event.clientX, event.clientY)?.closest('.gallery-slot-card[data-slot-id]');
                        if (slotEl && slotEl.dataset.slotId && slotEl.dataset.slotId !== 'perfil') {
                            assignToSlot(touchPayload, slotEl.dataset.slotId);
                        }
                        touchPayload = null;
                    });
                    galleryGrid?.addEventListener('pointercancel', () => {
                        clearTimeout(longPressTimer);
                        touchPayload = null;
                    });
                    document.querySelectorAll('.gallery-slot-card').forEach((slotCard) => {
                        const slotId = slotCard.dataset.slotId || '';
                        if (!slotId || slotId === 'perfil') return;
                        slotCard.addEventListener('dragover', (event) => {
                            let payload = null;
                            try { payload = JSON.parse(event.dataTransfer.getData(DND_PAYLOAD_TYPE) || '{}'); } catch {}
                            if (!isImagePayload(payload)) return;
                            event.preventDefault();
                            slotCard.style.filter = 'brightness(1.1)';
                            slotCard.style.outline = '2px solid rgba(34,211,238,0.8)';
                        });
                        slotCard.addEventListener('dragleave', () => {
                            slotCard.style.filter = '';
                            slotCard.style.outline = '';
                        });
                        slotCard.addEventListener('drop', (event) => {
                            event.preventDefault();
                            slotCard.style.filter = '';
                            slotCard.style.outline = '';
                            let payload = null;
                            try { payload = JSON.parse(event.dataTransfer.getData(DND_PAYLOAD_TYPE) || '{}'); } catch {}
                            assignToSlot(payload, slotId);
                        });
                    });

                    function getNextViewerIndex() {
                        if (viewerSlides.length <= 1) return 0;
                        if (!viewerRandom) return (currentViewerIndex + 1) % viewerSlides.length;
                        const candidates = viewerSlides.map((_, idx) => idx).filter((idx) => idx !== currentViewerIndex);
                        return candidates[Math.floor(Math.random() * candidates.length)];
                    }

                    function clearViewerAutoplayTimer() {
                        if (viewerAutoplayTimeout) {
                            clearTimeout(viewerAutoplayTimeout);
                            viewerAutoplayTimeout = null;
                        }
                    }

                    function setViewerAutoplayState(nextState) {
                        viewerAutoplay = !!nextState;
                        if (viewerPlayToggleButton) {
                            viewerPlayToggleButton.textContent = viewerAutoplay ? 'Pause' : 'Play';
                        }
                        scheduleViewerAutoplay();
                    }

                    function setViewerRandomState(nextState) {
                        viewerRandom = !!nextState;
                        if (viewerRandomToggleButton) {
                            viewerRandomToggleButton.textContent = viewerRandom ? 'Random On' : 'Random Off';
                            viewerRandomToggleButton.classList.toggle('random-active', viewerRandom);
                        }
                    }

                    function preloadViewerAround(index) {
                        if (!viewerSlides.length) return;
                        for (let offset = -VIEWER_PRELOAD_RADIUS; offset <= VIEWER_PRELOAD_RADIUS; offset += 1) {
                            const targetIndex = (index + offset + viewerSlides.length) % viewerSlides.length;
                            const slide = viewerSlides[targetIndex];
                            const nearVideo = slide ? slide.querySelector('video') : null;
                            if (nearVideo && nearVideo.preload !== 'auto') {
                                nearVideo.preload = 'auto';
                                nearVideo.load();
                            }
                        }
                    }

                    function pauseAndResetInactiveVideos(activeIndex) {
                        viewerSlides.forEach((slide, slideIndex) => {
                            if (slideIndex === activeIndex) return;
                            const video = slide.querySelector('video');
                            if (!video) return;
                            video.pause();
                            if (!video.dataset.manuallyPaused) {
                                video.currentTime = 0;
                            }
                        });
                    }

                    function recoverViewerPlayback(reason = 'unknown') {
                        if (viewerRecoveryInProgress) return;
                        viewerRecoveryInProgress = true;
                        setTimeout(() => {
                            viewerRecoveryInProgress = false;
                            if (viewerSlides.length > 1 && viewer.classList.contains('open')) {
                                renderViewerSlide(getNextViewerIndex());
                            } else {
                                clearViewerAutoplayTimer();
                                viewerState = VIEWER_STATES.IDLE;
                            }
                        }, VIEWER_RETRY_DELAY_MS);
                    }

                    function scheduleViewerAutoplay() {
                        clearViewerAutoplayTimer();
                        if (!viewerAutoplay || !viewer.classList.contains('open') || viewerSlides.length <= 1) return;
                        if (viewerState === VIEWER_STATES.TRANSITIONING) return;
                        if (viewerState === VIEWER_STATES.PLAYING_VIDEO) {
                            viewerAutoplayTimeout = setTimeout(() => {
                                recoverViewerPlayback('video-timeout');
                            }, VIEWER_VIDEO_FALLBACK_TIMEOUT_MS);
                            return;
                        }
                        viewerAutoplayTimeout = setTimeout(function() {
                            renderViewerSlide(getNextViewerIndex());
                        }, VIEWER_IMAGE_TIMEOUT_MS);
                    }

                    function syncViewerButtons() {
                        const disableNavigation = viewerSlides.length <= 1;
                        if (viewerNextButton) viewerNextButton.disabled = disableNavigation;
                    }

                    function renderViewerSlide(index) {
                        if (!viewerSlides.length) return;
                        const renderToken = ++viewerTransitionToken;
                        viewerState = VIEWER_STATES.TRANSITIONING;
                        currentViewerIndex = Math.max(0, Math.min(index, viewerSlides.length - 1));
                        pauseAndResetInactiveVideos(currentViewerIndex);
                        viewerSlides.forEach(function(slide, slideIndex) {
                            slide.classList.toggle('active', slideIndex === currentViewerIndex);
                        });
                        const activeSlide = viewerSlides[currentViewerIndex];
                        const activeImage = activeSlide ? activeSlide.querySelector('img') : null;
                        const activeVideo = activeSlide ? activeSlide.querySelector('video') : null;
                        preloadViewerAround(currentViewerIndex);
                        if (activeVideo) {
                            activeVideo.onpause = function() {
                                if (!viewerAutoplay) activeVideo.dataset.manuallyPaused = '1';
                            };
                            activeVideo.onplay = function() {
                                activeVideo.dataset.manuallyPaused = '';
                            };
                            if (viewerAutoplay) {
                                if (!activeVideo.dataset.manuallyPaused) {
                                    activeVideo.currentTime = 0;
                                }
                                activeVideo.play().catch(function() {
                                    recoverViewerPlayback('play-error');
                                });
                            }
                            viewerState = VIEWER_STATES.PLAYING_VIDEO;
                        }
                        if (activeImage) {
                            activeImage.onerror = function() {
                                recoverViewerPlayback('image-error');
                            };
                            viewerState = VIEWER_STATES.SHOWING_IMAGE;
                        }
                        if (activeVideo) {
                            activeVideo.onerror = function() {
                                recoverViewerPlayback('video-error');
                            };
                            activeVideo.onended = function() {
                                if (viewerAutoplay && viewerSlides.length > 1) {
                                    renderViewerSlide(getNextViewerIndex());
                                }
                            };
                        }
                        requestAnimationFrame(() => {
                            if (renderToken !== viewerTransitionToken) return;
                            if (!activeVideo && !activeImage) viewerState = VIEWER_STATES.IDLE;
                            scheduleViewerAutoplay();
                        });
                        syncViewerButtons();
                    }

                    function resetViewerStageTransform(withTransition = false) {
                        if (!viewerStage) return;
                        viewerStage.style.transition = withTransition ? 'transform 160ms ease-out' : '';
                        viewerStage.style.transform = 'translateX(0px)';
                        if (withTransition) {
                            window.setTimeout(function() {
                                if (viewerStage) viewerStage.style.transition = '';
                            }, 180);
                        }
                    }

                    function updateViewerSwipeFeedback(deltaX) {
                        if (!viewerStage) return;
                        const clampedDelta = Math.max(-SWIPE_FEEDBACK_MAX_TRANSLATE, Math.min(SWIPE_FEEDBACK_MAX_TRANSLATE, deltaX * 0.28));
                        viewerStage.style.transition = '';
                        viewerStage.style.transform = 'translateX(' + clampedDelta + 'px)';
                    }

                    function targetHasDirectMediaControls(target) {
                        if (!target || typeof target.closest !== 'function') return false;
                        return Boolean(target.closest('iframe, video'));
                    }

                    function onViewerStagePointerDown(event) {
                        if (!viewer.classList.contains('open') || viewerSlides.length <= 1) return;
                        const blockedByMediaControl = targetHasDirectMediaControls(event.target);
                        viewerSwipeState = {
                            active: true,
                            pointerId: event.pointerId,
                            startX: event.clientX,
                            startY: event.clientY,
                            currentX: event.clientX,
                            startTime: performance.now(),
                            isHorizontal: false,
                            isVertical: false,
                            blockedByMediaControl
                        };
                        if (blockedByMediaControl) return;
                        if (viewerStage?.setPointerCapture) {
                            try { viewerStage.setPointerCapture(event.pointerId); } catch {}
                        }
                    }

                    function onViewerStagePointerMove(event) {
                        if (!viewerSwipeState.active || viewerSwipeState.pointerId !== event.pointerId || viewerSwipeState.blockedByMediaControl) return;
                        const deltaX = event.clientX - viewerSwipeState.startX;
                        const deltaY = event.clientY - viewerSwipeState.startY;
                        viewerSwipeState.currentX = event.clientX;

                        if (!viewerSwipeState.isHorizontal && !viewerSwipeState.isVertical) {
                            if (Math.abs(deltaY) > Math.abs(deltaX) * SWIPE_VERTICAL_LOCK_RATIO) {
                                viewerSwipeState.isVertical = true;
                                resetViewerStageTransform(false);
                                return;
                            }
                            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                                viewerSwipeState.isHorizontal = true;
                            }
                        }

                        if (viewerSwipeState.isHorizontal) {
                            event.preventDefault();
                            updateViewerSwipeFeedback(deltaX);
                        }
                    }

                    function onViewerStagePointerEnd(event) {
                        if (!viewerSwipeState.active || viewerSwipeState.pointerId !== event.pointerId) return;
                        const elapsedMs = Math.max(1, performance.now() - viewerSwipeState.startTime);
                        const deltaX = viewerSwipeState.currentX - viewerSwipeState.startX;
                        const velocityX = Math.abs(deltaX) / elapsedMs;
                        const shouldNavigate = !viewerSwipeState.blockedByMediaControl
                            && viewerSwipeState.isHorizontal
                            && !viewerSwipeState.isVertical
                            && (Math.abs(deltaX) >= SWIPE_DISTANCE_THRESHOLD || velocityX >= SWIPE_VELOCITY_THRESHOLD);

                        resetViewerStageTransform(true);
                        if (shouldNavigate) {
                            if (deltaX < 0) showNextViewerPhoto();
                            else showPreviousViewerPhoto();
                        }

                        if (viewerStage?.releasePointerCapture) {
                            try { viewerStage.releasePointerCapture(event.pointerId); } catch {}
                        }
                        viewerSwipeState.active = false;
                    }

                    function openFullscreenViewer(index) {
                        if (!viewerSlides.length) return;
                        const parsedIndex = Number(index);
                        if (!Number.isInteger(parsedIndex) || parsedIndex < 0 || parsedIndex >= viewerSlides.length) return;
                        viewer.classList.add('open');
                        document.body.style.overflow = 'hidden';
                        viewerState = VIEWER_STATES.TRANSITIONING;
                        renderViewerSlide(parsedIndex);
                    }
                    function closeFullscreenViewer() {
                        viewer.classList.remove('open');
                        document.body.style.overflow = '';
                        clearViewerAutoplayTimer();
                        viewerState = VIEWER_STATES.IDLE;
                        pauseAndResetInactiveVideos(-1);
                    }
                    function showNextViewerPhoto(event) {
                        if (event) event.stopPropagation();
                        if (viewerSlides.length <= 1) return;
                        renderViewerSlide((currentViewerIndex + 1) % viewerSlides.length);
                    }
                    function showPreviousViewerPhoto(event) {
                        if (event) event.stopPropagation();
                        if (viewerSlides.length <= 1) return;
                        renderViewerSlide((currentViewerIndex - 1 + viewerSlides.length) % viewerSlides.length);
                    }
                    function toggleViewerAutoplay(event) {
                        if (event) event.stopPropagation();
                        setViewerAutoplayState(!viewerAutoplay);
                    }
                    function toggleViewerRandom(event) {
                        if (event) event.stopPropagation();
                        setViewerRandomState(!viewerRandom);
                    }

                    function startFullscreenPlaybackFromModal(event) {
                        if (event) event.stopPropagation();
                        const modal = document.getElementById('miModal');
                        if (modal) modal.style.display = 'none';
                        if (!viewer.classList.contains('open')) {
                            openFullscreenViewer(currentViewerIndex || 0);
                        }
                        setViewerAutoplayState(true);
                    }
                    if (galleryGrid) {
                        galleryGrid.addEventListener('click', function(event) {
                            const deleteButton = event.target.closest('.gallery-delete');
                            if (deleteButton) {
                                event.preventDefault();
                                event.stopPropagation();
                                window.opener.postMessage({
                                    type: 'DELETE_IMAGE',
                                    index: Number(deleteButton.dataset.deleteIndex),
                                    mediaType: deleteButton.dataset.deleteMediaType,
                                    id: '${F}'
                                }, '*');
                                return;
                            }

                            const card = event.target.closest('.gallery-card');
                            if (!card) return;
                            if (activeSlotSelectionId) {
                                if ((card.dataset.mediaType || 'image') !== 'image') return;
                                const assigned = tryAssignGalleryCardToActiveSlot(card);
                                if (assigned) return;
                            }
                            event.preventDefault();
                            openFullscreenViewer(card.dataset.galleryIndex);
                        });
                    }
                    viewer.addEventListener('click', function(event) {
                        if (event.target === viewer) {
                            closeFullscreenViewer();
                        }
                    });
                    viewerStage?.addEventListener('pointerdown', onViewerStagePointerDown, { passive: true });
                    viewerStage?.addEventListener('pointermove', onViewerStagePointerMove, { passive: false });
                    viewerStage?.addEventListener('pointerup', onViewerStagePointerEnd);
                    viewerStage?.addEventListener('pointercancel', onViewerStagePointerEnd);
                    window.addEventListener('keydown', function(event) {
                        if (!viewer.classList.contains('open')) return;

                        if (event.key === 'Escape') {
                            event.preventDefault();
                            closeFullscreenViewer();
                            return;
                        }

                        if (event.key === 'ArrowRight') {
                            event.preventDefault();
                            showNextViewerPhoto();
                        }

                        if (event.key === 'ArrowLeft') {
                            event.preventDefault();
                            showPreviousViewerPhoto();
                        }
                    });
                    setViewerAutoplayState(false);
                    renderViewerSlide(0);
                </script>
            </body>
            </html>
        `),j.document.close()},V3=()=>{let[j,W]=React.useState(null),U=zJ(null),z=zJ(null),[F,I]=E([]),p={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},XJ=(J="")=>{let Q=String(J||"").normalize("NFD").replace(/[̀-ͯ]/g,"").trim().toUpperCase();return p[Q]||p.DEFAULT},[t,b]=E(A1),[V,A]=E("EXPLORAR"),[G,P]=E(null),[K,VJ]=E(null),[c,NJ]=E(""),[_J,PJ]=E({}),[CJ,yJ]=E({}),[eJ,K1]=E(!1),[w1,G1]=E(!1),[Q0,k1]=E(tZ[0]||""),[bQ,LQ]=E(null),[S1,x1]=E(!1),[Z0,uJ]=E(!1),[$0,IQ]=E(!1),[QJ,EQ]=E(null),[P1,VQ]=E(null),[RJ,UQ]=E(null),[v1,X0]=E(!1),[Y0,gQ]=E(""),[ZJ,DQ]=React.useState(null),[DZ,hQ]=E(!1),[q0,b1]=E({x:0,y:0}),[YJ,_0]=E("promedio"),[fJ,CZ]=E("desc"),[RZ,I1]=E(!1),[BJ,CQ]=E({isOpen:!1,profile:null,category:null}),[BZ,mQ]=E({isOpen:!1,profile:null}),[vJ,TZ]=E("INICIAL"),[g,g1]=E("GENERAL"),[TJ,JJ]=E(null),[yQ,RQ]=E(null),[BQ,AZ]=E([]),[JQ,j0]=E([]),[MJ,TQ]=E(!1),[bJ,zZ]=E(!1),[KJ,H0]=E(!1),[NZ,h1]=E(5),[W0,O0]=E(20),[F0,L0]=E(!1),[AJ,m1]=E(!0),[E0,QQ]=E(!1),[V0,uQ]=E(""),[U0,fQ]=E(""),[D0,cJ]=E(""),[C0,R0]=E(!1),[MZ,B0]=E(""),[KZ,T0]=E("url"),[A0,z0]=E(""),[N0,M0]=E(null),[K0,y1]=E($J[0]),[w0,G0]=E(""),[k0,cQ]=E(""),[sJ,u1]=E(""),[IJ,f1]=E([]),[S0,x0]=E(""),[sQ,P0]=E("url"),[v0,b0]=E(""),[I0,g0]=E(null),[h0,wJ]=E(""),[wZ,c1]=E(!1),[dQ,m0]=E(""),[nQ,y0]=E(""),[pQ,dJ]=E(""),[s1,d1]=E(!1),[GZ,kZ]=E(!1),[u0,SZ]=E({}),[xZ,f0]=E({}),[n1,iQ]=E({}),[p1,c0]=E({}),[ZQ,i1]=E(!1),[lQ,l1]=E(!1),[t1,AQ]=E(""),nJ=zJ(null),tQ=zJ(null),PZ=zJ(null),zQ=zJ(null),NQ=zJ(null),oQ=zJ(!1),aQ=zJ(null),rQ=zJ(!1),s0=()=>({label:"",emoji:"\uD83D\uDCC1",coverImg:"",reglas:{nacionalidades:[],profesiones:[],ciudades:[],edadMin:"",edadMax:"",caracteristica:"Rostro",operador:"Superior a",umbral:""}}),eQ=()=>({nombre:"",nacionalidad:"",ciudad:"",profesion:"",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:[],gifs:[],videos:[]},batallaFotosPreferidas:eZ(),puntuaciones:vQ()}),[v,a]=E(eQ);r(()=>{if(!K){if(c)NJ("");return}if(K==="GENERAL"&&c!=="all")NJ("all")},[K,c]);let JZ=(J={})=>{let Q=eQ(),Z=J&&typeof J==="object"?J:{},$=Z?.puntuaciones&&typeof Z.puntuaciones==="object"?{...Q.puntuaciones,...Z.puntuaciones}:Q.puntuaciones;return{...Z,...Q,nombre:typeof Z.nombre==="string"?Z.nombre:"",nacionalidad:typeof Z.nacionalidad==="string"?Z.nacionalidad:"",ciudad:typeof Z.ciudad==="string"?Z.ciudad:"",profesion:typeof Z.profesion==="string"?Z.profesion:"",fechaNacimiento:typeof Z.fechaNacimiento==="string"?Z.fechaNacimiento:"",estaturaCm:Z.estaturaCm===void 0||Z.estaturaCm===null?"":Z.estaturaCm,fotos:Array.isArray(Z.fotos)?Z.fotos:[],galeria:{fotos:Array.isArray(Z?.galeria?.fotos)?Z.galeria.fotos:[],gifs:Array.isArray(Z?.galeria?.gifs)?Z.galeria.gifs:[],videos:Array.isArray(Z?.galeria?.videos)?Z.galeria.videos:[]},batallaFotosPreferidas:WJ(Z?.batallaFotosPreferidas),puntuaciones:$}},QZ=(J={})=>{if(J?.isAnonymousGallery||J?.firebaseId===xJ)return;a(JZ(J)),EQ(J.firebaseId||J.id||null),uJ(!0)},o1=(J={})=>{if(!(J?.firebaseId||J?.nombre))return;let Z=U.current,$=Z&&!Z.closed?Z:window.open("","_blank");U.current=$,oZ({targetWindow:$,profileName:J?.nombre||"",profession:J?.profesion||"",photos:[...(J?.galeria?.fotos||[]).map((X,Y)=>({...e(X,"image"),sourceTag:"fotos",sourceIndex:Y})),...(J?.galeria?.videos||[]).map((X,Y)=>({...e(X,"video"),sourceTag:"videos",sourceIndex:Y}))],editingId:J?.firebaseId||J?.id||"",battlePhotoPrefs:J?.batallaFotosPreferidas||J?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:J?.fotos?.[0]||""}),$?.focus(),dJ(""),AQ("")},d0=(J="")=>{if(V==="anonimo")return;let Q=String(J||"").trim();EQ(null),a({...eQ(),profesion:Q}),uJ(!0)},ZZ=f(()=>{let Q=[{key:"nombre",label:"Nombre",value:v?.nombre},{key:"fotos.0",label:"Foto principal",value:v?.fotos?.[0]},{key:"profesion",label:"Profesión",value:v?.profesion},{key:"nacionalidad",label:"Nacionalidad",value:v?.nacionalidad},{key:"ciudad",label:"Ciudad",value:v?.ciudad},{key:"fechaNacimiento",label:"Fecha de nacimiento",value:v?.fechaNacimiento},{key:"estaturaCm",label:"Estatura",value:v?.estaturaCm}].map((Z)=>{let $=typeof Z.value==="string"?Z.value.trim():Z.value,X=!($===""||$===void 0||$===null),Y=Z.key==="fotos.0"?X?"SI":"NO":X?String($):"Sin completar";return{...Z,isComplete:X,preview:Y}});return{completed:Q.filter((Z)=>Z.isComplete),missing:Q.filter((Z)=>!Z.isComplete)}},[v]),D3=async({profileId:J,url:Q,tag:Z="fotos",label:$="",type:X="image",autor:Y=""})=>{let O=(Q||"").trim(),_=$J.includes($)?$:"",H=aJ(O,X);if(!J||!O)return[];let q=w.ref(`perfiles/${J}/galeria/${Z}`),D=[...(await q.once("value")).val()||[],{url:O,label:_,type:H,autor:aZ(Y)}];if(await q.set(D),J===QJ)a((x)=>({...x,galeria:{...x.galeria||{fotos:[],gifs:[],videos:[]},[Z]:D}}));return D},a1=async({profileId:J,sourceTag:Q,sourceIndex:Z,label:$})=>{if(!J||!Q||!Number.isInteger(Z))return;let X=$J.includes($)?$:"",Y=w.ref(`perfiles/${J}/galeria/${Q}`),O=await Y.once("value"),_=Array.isArray(O.val())?O.val():[];if(!_[Z])return;let H=[..._],q=e(H[Z],Q==="videos"?"video":"image");if(H[Z]={...q,label:X},await Y.set(H),J===QJ)a((L)=>({...L,galeria:{...L.galeria||{fotos:[],gifs:[],videos:[]},[Q]:H}}))},n0=async({profileId:J,sourceTag:Q,sourceIndex:Z,url:$})=>{if(!J||!Q||!Number.isInteger(Z))return;let X=($||"").trim();if(!X)return;let Y=w.ref(`perfiles/${J}/galeria/${Q}`),O=await Y.once("value"),_=Array.isArray(O.val())?O.val():[];if(!_[Z])return;let H=[..._],q=Q==="videos"?"video":"image",L=e(H[Z],q);if(H[Z]={...L,url:X,type:aJ(X,q)},await Y.set(H),J===QJ)a((R)=>({...R,galeria:{...R.galeria||{fotos:[],gifs:[],videos:[]},[Q]:H}}))},r1=async({profileId:J,sourceTag:Q,sourceIndex:Z})=>{if(!J||!Q||!Number.isInteger(Z))return;let $=w.ref(`perfiles/${J}/galeria/${Q}`),X=await $.once("value"),Y=Array.isArray(X.val())?X.val():[],O=Y[Z];if(!O)return;let _=Y.filter((q,L)=>L!==Z);await $.set(_);let H=e(O,Q==="videos"?"video":"image").url;if(H){let q=w.ref(`perfiles/${J}/batallaFotosPreferidas`),L=await q.once("value"),D={...WJ(L.val())},x=!1;if(Object.keys(D).forEach((N)=>{if(D[N]===H)D[N]="",x=!0}),x)await q.set(D)}if(J===QJ)a((q)=>({...q,galeria:{...q.galeria||{fotos:[],gifs:[],videos:[]},[Q]:_},batallaFotosPreferidas:(()=>{let L=WJ(q.batallaFotosPreferidas);if(!H)return L;let R={...L};return Object.keys(R).forEach((D)=>{if(R[D]===H)R[D]=""}),R})()}))},C3=(J)=>new Promise((Q,Z)=>{let $=new FileReader;$.onload=()=>Q(String($.result||"")),$.onerror=()=>Z(new Error("No se pudo leer el archivo.")),$.readAsDataURL(J)}),p0=(J,Q)=>{let Z=String(Q||"").trim(),$=Array.isArray(J?.galeria?.fotos)?J.galeria.fotos:[];if(!Z)return{...J,fotos:[""]};let Y=$.some((O)=>e(O,"image").url===Z)?$:[...$,{url:Z,label:"C",type:"image"}];return{...J,fotos:[Z],galeria:{...J.galeria||{},fotos:Y}}},e1=async(J)=>{let Q=J.target.files?.[0];if(!Q)return;try{let Z=await PQ(Q,"perfiles/fotos");a(($)=>p0($,Z))}catch(Z){console.error("Error al cargar foto de perfil local:",Z)}finally{J.target.value=""}},J2=async({url:J,label:Q,autor:Z="",forcedTag:$=""})=>{let X=String(J||"").trim();if(!X)throw new Error("Ingresá una URL o seleccioná un archivo.");let Y=$J.includes(Q)?Q:"",O=aJ(X);if(!(O==="image"||z1.test(X)||Boolean(FQ(X))))throw new Error("Formato no válido. Usá imagen, video archivo o URL de YouTube/Vimeo.");let H=$||(O==="video"?"videos":"fotos"),q=w.ref(`${_Q}/${H}`),L=await q.once("value"),D=[...Array.isArray(L.val())?L.val():[],{url:X,label:Y,type:O,autor:String(Z||"").trim()}];await q.set(D)},Q2=async(J="")=>{cQ("");try{let Q=String(A0||"").trim();if(KZ==="file"){if(!N0)throw new Error("Seleccioná un archivo local.");Q=await PQ(N0,"anonimo/galeria")}await J2({url:Q,label:K0,autor:w0,forcedTag:J}),z0(""),M0(null),G0(""),T0("url")}catch(Q){cQ(Q?.message||"No se pudo guardar en galería anónima.")}},Z2=async()=>{let J=String(S0||"").trim();if(wJ(""),!J){wJ("Completá el nombre del audio.");return}try{let Q=String(v0||"").trim();if(sQ==="file"){if(!I0){wJ("Seleccioná un archivo de audio.");return}Q=await PQ(I0,"anonimo/audios")}else if(!Q){wJ("Completá la URL del audio.");return}if(sQ==="url"&&!r2.test(Q)){wJ("La URL debe apuntar a un archivo de audio válido.");return}let Z=w.ref(`${_Q}/audios`),$=await Z.once("value"),Y=[...Array.isArray($.val())?$.val():[],{nombre:J,url:Q}];await Z.set(Y),x0(""),b0(""),g0(null),P0("url")}catch(Q){wJ("No se pudo guardar el audio en Firebase.")}},$2=async(J)=>{if(wJ(""),!Number.isInteger(J)||J<0)return;try{let Q=w.ref(`${_Q}/audios`),Z=await Q.once("value"),$=Array.isArray(Z.val())?Z.val():[];if(J>=$.length)return;let X=$[J],Y=$.filter((_,H)=>H!==J);await Q.set(Y);let O=String(X?.url||"").trim();if(O){if(dQ===O)m0("");if(nQ===O)y0("")}}catch(Q){wJ("No se pudo borrar el audio de Firebase.")}},R3=async(J,Q)=>{if(Q.stopPropagation(),confirm("¿Estás seguro de que querés eliminar esto, corazón?"))try{await w.collection("galeria").doc(J).delete()}catch(Z){console.error("Error al borrar de Firebase:",Z)}},[k,jJ]=E(s0()),vZ=()=>jJ(s0());r(()=>{if(window.lucide)window.lucide.createIcons()},[V,Z0,$0,F,ZJ,t]),r(()=>{if(U.current&&!U.current.closed&&QJ)oZ({targetWindow:U.current,profileName:v.nombre,profession:v.profesion,photos:[...(v.galeria?.fotos||[]).map((J,Q)=>({...e(J,"image"),sourceTag:"fotos",sourceIndex:Q})),...(v.galeria?.videos||[]).map((J,Q)=>({...e(J,"video"),sourceTag:"videos",sourceIndex:Q}))],editingId:QJ,battlePhotoPrefs:v.batallaFotosPreferidas,profilePhotoUrl:v.fotos?.[0]||""})},[QJ,v.nombre,v.profesion,v.galeria?.fotos,v.galeria?.videos,v.batallaFotosPreferidas]),r(()=>{let J=async(C)=>{if(C.data.type==="ADD_IMAGE"){let{url:T,id:B,label:M,mediaType:d,autor:y}=C.data,i=d==="video"?"videos":"fotos";if(!B)return;let h=B===xJ?w.ref(`${_Q}/${i}`):w.ref(`perfiles/${B}/galeria/${i}`),HJ=(await h.once("value")).val()||[],n=(T||"").trim();if(!n)return;if(n.startsWith("data:"))try{let LJ=await(await fetch(n)).blob(),qQ=`media.${(LJ.type||"").split("/")[1]||"bin"}`,LZ=d==="video"?"perfiles/videos":"perfiles/fotos",d2=new File([LJ],qQ,{type:LJ.type||"application/octet-stream"});n=await PQ(d2,LZ)}catch(u){console.error("No se pudo subir el archivo local a Firebase Storage:",u);return}let l=[...HJ,{url:n,label:$J.includes(M)?M:"",type:aJ(n,d),autor:aZ(y)}];await h.set(l),a((u)=>({...u,galeria:{...u.galeria,[i]:l}}))}if(C.data.type==="DELETE_IMAGE"){let{index:T,id:B,mediaType:M}=C.data,d=M==="video"?"videos":"fotos";if(!B)return;let y=B===xJ?w.ref(`${_Q}/${d}`):w.ref(`perfiles/${B}/galeria/${d}`),h=(await y.once("value")).val()||[],UJ=h[T],HJ=h.filter((l,u)=>u!==T);await y.set(HJ);let n=e(UJ,M).url;if(n&&B!==xJ){let l=w.ref(`perfiles/${B}/batallaFotosPreferidas`),u=await l.once("value"),EJ={...WJ(u.val())},qQ=!1;if(Object.keys(EJ).forEach((LZ)=>{if(EJ[LZ]===n)EJ[LZ]="",qQ=!0}),qQ)await l.set(EJ)}a((l)=>({...l,galeria:{...l.galeria,[d]:HJ},batallaFotosPreferidas:(()=>{let u=WJ(l.batallaFotosPreferidas);if(!n)return u;let LJ={...u};return Object.keys(LJ).forEach((EJ)=>{if(LJ[EJ]===n)LJ[EJ]=""}),LJ})()}))}if(C.data.type==="SET_BATTLE_PHOTO_PREF"){let{id:T,slotId:B,index:M,mediaType:d}=C.data,y=VZ(B);if(!T||T===xJ||!y||!Number.isInteger(M))return;let i=d==="video"?"videos":"fotos",HJ=(await w.ref(`perfiles/${T}/galeria/${i}`).once("value")).val()||[],n=e(HJ[M],d);if(!n.url||n.type!=="image")return;await w.ref(`perfiles/${T}/batallaFotosPreferidas/${B}`).set(n.url),a((u)=>({...u,batallaFotosPreferidas:{...WJ(u.batallaFotosPreferidas),[B]:n.url}}))}if(C.data.type==="SET_BATTLE_PHOTO_PREF_BY_URL"){let{id:T,slotId:B,url:M,mediaType:d,label:y}=C.data,i=VZ(B),h=String(M||"").trim();if(!T||T===xJ||!i||!h)return;if(d==="video")return;await w.ref(`perfiles/${T}/batallaFotosPreferidas/${B}`).set(h),a((HJ)=>({...HJ,batallaFotosPreferidas:{...WJ(HJ.batallaFotosPreferidas),[B]:h}}))}if(C.data.type==="CLEAR_BATTLE_PHOTO_PREF"){let{id:T,slotId:B}=C.data,M=VZ(B);if(!T||T===xJ||!M)return;await w.ref(`perfiles/${T}/batallaFotosPreferidas/${B}`).set(""),a((y)=>({...y,batallaFotosPreferidas:{...WJ(y.batallaFotosPreferidas),[B]:""}}))}};window.addEventListener("message",J);let Q=w.ref("perfiles"),Z=w.ref(_Q),$={},X={},Y=4194304,O=(C)=>{if(!C||typeof C!=="object")return{};if(Array.isArray(C))return C.slice(0,100);return Object.fromEntries(Object.entries(C).slice(0,400).map(([T,B])=>{let M=JZ(B||{});return[T,{nombre:M.nombre,nacionalidad:M.nacionalidad,ciudad:M.ciudad,profesion:M.profesion,fechaNacimiento:M.fechaNacimiento,estaturaCm:M.estaturaCm,fotos:(M.fotos||[]).slice(0,1),galeria:{fotos:(M?.galeria?.fotos||[]).slice(0,8),gifs:(M?.galeria?.gifs||[]).slice(0,8),videos:(M?.galeria?.videos||[]).slice(0,8)},batallaFotosPreferidas:WJ(M.batallaFotosPreferidas),puntuaciones:M.puntuaciones}]}))},_=(C,T)=>{try{let B=JSON.stringify(T||{});if(B.length<=Y){localStorage.setItem(C,B);return}let M=O(T),d=JSON.stringify(M);if(d.length<=Y){localStorage.setItem(C,d);return}localStorage.removeItem(C),console.warn("Caché local omitida por tamaño excesivo.")}catch(B){console.warn("No se pudo persistir caché local:",B)}},H=(C)=>{try{let T=localStorage.getItem(C);if(!T)return{};let B=JSON.parse(T);return B&&typeof B==="object"?B:{}}catch(T){return console.warn("No se pudo leer caché local:",T),{}}},q=()=>{let C=Object.keys($||{}).map((M)=>({...JZ($[M]),firebaseId:M})),T=X3(X||{}),B=Object.values(T.galeria||{}).some((M)=>Array.isArray(M)&&M.length>0);I(B?[...C,T]:C)};$=H(D1),X=H(C1),q(),Q.on("value",(C)=>{$=C.val()||{},_(D1,$),q()}),Z.on("value",(C)=>{X=C.val()||{},_(C1,X);let T=Array.isArray(X?.audios)?X.audios.map((B)=>({nombre:String(B?.nombre||"").trim(),url:String(B?.url||"").trim()})).filter((B)=>B.nombre&&B.url):[];f1(T),q()}),b(A1);let L=w.ref("arenaBattleState"),R=!1,D=!1,x=()=>{if(R&&D)K1(!0)};L.on("value",(C)=>{R=!0,PJ(C.val()||{}),x()});let N=w.ref("arenaGlobalState");return N.on("value",(C)=>{D=!0,yJ(C.val()||{}),x()}),()=>{window.removeEventListener("message",J),Q.off(),Z.off(),L.off(),N.off()}},[]),r(()=>{let J=IJ.find((Z)=>Z.url===dQ),Q=IJ.find((Z)=>Z.url===nQ);if([zQ.current,NQ.current].forEach((Z)=>{if(!Z)return;Z.pause(),Z.currentTime=0}),!wZ)return;if(J&&zQ.current)zQ.current.src=J.url,zQ.current.play().catch(()=>{});if(Q&&NQ.current&&Q.url!==J?.url)NQ.current.src=Q.url,NQ.current.play().catch(()=>{})},[wZ,dQ,nQ,IJ]);let gJ=(J)=>{if(!J)return"?";let Q=new Date,Z=new Date(J),$=Q.getFullYear()-Z.getFullYear();if(Q.getMonth()<Z.getMonth()||Q.getMonth()===Z.getMonth()&&Q.getDate()<Z.getDate())$--;return $},bZ=(J={})=>{return{...vQ(),...J?.puntuaciones||{}}},pJ={Rostro:["Rostro","Ojos","Boca","Cabello"],Cuerpo:["Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura"],Actitud:["Sensualidad","Carisma","Elegancia","Dulzura","Talento"]},IZ=(J={},Q=[])=>{if(!Array.isArray(Q)||!Q.length)return 0;let Z=bZ(J);return Q.reduce(($,X)=>$+(Number(Z[X])||0),0)/Q.length},$Z=(J={})=>{return IZ(J,pJ.Rostro)},XZ=(J={})=>{return IZ(J,pJ.Cuerpo)},YZ=(J={})=>{return IZ(J,pJ.Actitud)},i0=(J={},Q="")=>{if(Q==="Rostro")return $Z(J);if(Q==="Cuerpo")return XZ(J);if(Q==="Actitud")return YZ(J);return 0},OJ=(J={})=>{let Q=Object.keys(pJ).map(($)=>i0(J,$));return(Q.reduce(($,X)=>$+X,0)/Q.length).toFixed(0)},qZ=(J)=>{let Q=[],Z=(J.nacionalidad||"").toLowerCase(),$=(J.profesion||"").toLowerCase(),X=(J.ciudad||"").toLowerCase(),Y=gJ(J.fechaNacimiento);return t.forEach((O)=>{let _=O.reglas,H=!0;if(_.nacionalidades?.length>0&&!_.nacionalidades.some((q)=>Z===q.toLowerCase()))H=!1;if(_.profesiones?.length>0&&!_.profesiones.some((q)=>$===q.toLowerCase()))H=!1;if(_.ciudades?.length>0&&!_.ciudades.some((q)=>X===q.toLowerCase()))H=!1;if(_.edadMin&&(Y==="?"||Y<parseInt(_.edadMin)))H=!1;if(_.edadMax&&(Y==="?"||Y>parseInt(_.edadMax)))H=!1;if(_.caracteristica&&_.umbral){let q=bZ(J)[_.caracteristica]||0,L=parseInt(_.umbral);if(_.operador==="Superior a"&&q<=L)H=!1;if(_.operador==="Inferior a"&&q>=L)H=!1}if(H)Q.push(O.firebaseId)}),Q},X2=f(()=>["Todas",...new Set(F.map((J)=>J.nacionalidad).filter(Boolean))],[F]),B3=f(()=>["Todas",...new Set(F.map((J)=>J.profesion).filter(Boolean))],[F]),Y2=f(()=>["Todas",...new Set(F.map((J)=>J.ciudad).filter(Boolean))],[F]),l0=f(()=>{return(F||[]).reduce((J,Q)=>{if(!Q?.firebaseId)return J;return J[Q.firebaseId]=qZ(Q),J},{})},[F,t]),$Q=f(()=>{return(F||[]).flatMap((J)=>{let Q=Y3(J);return[...Array.isArray(J?.galeria?.fotos)?J.galeria.fotos.map(($,X)=>({item:$,sourceTag:"fotos",sourceIndex:X,fallbackType:"image"})):[],...Array.isArray(J?.galeria?.gifs)?J.galeria.gifs.map(($,X)=>({item:$,sourceTag:"gifs",sourceIndex:X,fallbackType:"image"})):[],...Array.isArray(J?.galeria?.videos)?J.galeria.videos.map(($,X)=>({item:$,sourceTag:"videos",sourceIndex:X,fallbackType:"video"})):[]].map(({item:$,sourceTag:X,sourceIndex:Y,fallbackType:O})=>{let _=e($,O);return{id:`${J.firebaseId||J.nombre||"perfil"}-${X}-${Y}`,url:_.url,label:_.label,type:_.type,isGif:_.type==="image"&&W3(_.url),nombre:J.nombre||"Sin nombre",profesion:J.profesion||"Perfil",nacionalidad:J.nacionalidad||"",fotoPerfil:J.fotos?.[0]||_.url,profileId:J.firebaseId,sourceCharacterId:Q,sourceTag:X,sourceIndex:Y}})})},[F]),FJ=f(()=>{return $Q.filter((J)=>Boolean(J.url))},[$Q]),gZ=f(()=>{return FJ.reduce((J,Q)=>{let Z=Q.label||"";if(!J[Z])J[Z]=[];return J[Z].push(Q),J},{})},[FJ]),t0=f(()=>{return FJ.reduce((J,Q)=>{let Z=Q.profileId||Q.nombre;if(!Z)return J;if(!J[Z])J[Z]=[];return J[Z].push(Q),J},{})},[FJ]),q2=f(()=>{return new Set(FJ.map((J)=>J.profileId).filter(Boolean)).size},[FJ]),o0=f(()=>{return Object.entries(l0||{}).reduce((J,[Q,Z])=>{return J[Q]=new Set(Array.isArray(Z)?Z:[]),J},{})},[l0]),hJ=f(()=>{if(g==="GENERAL")return[{id:"GENERAL",nombre:"General",profesion:"Archivo global",nacionalidad:"",fotoPerfil:FJ[0]?.url||"",photos:FJ.filter((J)=>!l2.includes(J.label||""))}];if(g==="PERSONAJE")return Object.entries(t0).map(([J,Q])=>{let Z=Q[0]||{};return{id:`PERSONAJE-${J}`,profileId:Z.profileId||null,nombre:Z.nombre||"Sin nombre",profesion:Z.profesion||"Perfil",nacionalidad:Z.nacionalidad||"",fotoPerfil:Z.fotoPerfil||Z.url||"",photos:Q}}).filter((J)=>J.photos.length>0).sort((J,Q)=>J.nombre.localeCompare(Q.nombre,"es",{sensitivity:"base"}));if(g==="ETIQUETA")return $J.map((J)=>{let Q=gZ[J]||[];return{id:`ETIQUETA-${J}`,nombre:`Etiqueta ${J}`,profesion:"Archivo por etiqueta",nacionalidad:"",fotoPerfil:Q[0]?.url||"",photos:Q}}).filter((J)=>J.photos.length>0);return(t||[]).map((J)=>{let Q=FJ.filter((Z)=>{if(!Z.profileId)return!1;let $=o0[Z.profileId];return $?$.has(J.firebaseId):!1});return{id:`CARPETA-${J.firebaseId}`,nombre:J.label||"Carpeta sin nombre",profesion:"Categoría",nacionalidad:"",fotoPerfil:J.coverImg||Q[0]?.fotoPerfil||Q[0]?.url||"",photos:Q}}).filter((J)=>J.photos.length>0).sort((J,Q)=>J.nombre.localeCompare(Q.nombre,"es",{sensitivity:"base"}))},[FJ,gZ,t0,t,g,o0]),iJ=f(()=>{if(g==="GENERAL")return hJ[0]||null;if(!yQ)return null;return hJ.find((J)=>J.id===yQ.id)||null},[hJ,yQ,g]),GJ=f(()=>{if(g!=="PERSONAJE")return[];return hJ.filter((J)=>BQ.includes(J.id))},[hJ,g,BQ]),MQ=f(()=>{if(g==="PERSONAJE")return GJ.flatMap((J)=>J.photos||[]);if(g==="ETIQUETA"){if(!JQ.length)return[];return FJ.filter((J)=>JQ.includes(J.label))}return iJ?.photos||FJ},[g,GJ,iJ,FJ,JQ]),_2=f(()=>{let J=MQ.reduce((Q,Z)=>{let $=Z.label||"";if(!$)return Q;return Q[$]=(Q[$]||0)+1,Q},{});return $J.reduce((Q,Z)=>{return Q[Z]=J[Z]||0,Q},{})},[MQ]),m=f(()=>{return MQ.filter((J)=>g==="ETIQUETA"?!0:vJ==="INICIAL"?J.label!=="X":vJ==="100"?!0:J.label===vJ)},[MQ,vJ,g]),hZ=f(()=>{return m.slice(0,W0)},[m,W0]),j2=hZ.length<m.length,_Z=V1[g]||g,jZ=g!=="GENERAL"&&g!=="ETIQUETA",a0=f(()=>{if(g!=="PERSONAJE")return[];return hJ.filter((J)=>!BQ.includes(J.id))},[hJ,g,BQ]),S=TJ===null?null:m[WQ(TJ,m.length)]||null,kJ=f(()=>{return $Q.filter((J)=>{if(J.type!=="image")return!1;if(!J.url)return!0;return Boolean(u0[J.id])})},[$Q,u0]),r0=f(()=>{let J=kJ.reduce((Q,Z)=>{let $=Z.profileId||Z.nombre||"sin-perfil";if(!Q[$])Q[$]={id:$,nombre:Z.nombre||"Sin nombre",profesion:Z.profesion||"Perfil",nacionalidad:Z.nacionalidad||"",fotos:[]};return Q[$].fotos.push(Z),Q},{});return Object.values(J).map((Q)=>({...Q,fotos:Q.fotos.sort((Z,$)=>(Z.label||"").localeCompare($.label||"","es",{sensitivity:"base"}))})).sort((Q,Z)=>Q.nombre.localeCompare(Z.nombre,"es",{sensitivity:"base"}))},[kJ]);r(()=>{if(!S){QQ(!1),uQ(""),fQ(""),cJ("");return}QQ(!1),uQ(S.label||""),fQ(S.url||""),cJ("")},[S]),r(()=>{if(V!=="GALERIA")RQ(null),JJ(null)},[V]),r(()=>{O0(40),JJ(null)},[g,vJ,JQ,BQ,yQ,F.length]),r(()=>{RQ(null),JJ(null),AZ([]),j0([])},[g]),r(()=>{if(TJ===null)return;if(!m.length){JJ(null);return}if(TJ>=m.length)JJ(0)},[m,TJ]),r(()=>{if(TJ===null)return;let J=(Q)=>{if(Q.key==="Escape"){JJ(null);return}if(!m.length)return;if(Q.key==="ArrowRight")JJ((Z)=>WQ((Z??0)+1,m.length));if(Q.key==="ArrowLeft")JJ((Z)=>WQ((Z??0)-1,m.length))};return window.addEventListener("keydown",J),()=>window.removeEventListener("keydown",J)},[m.length,TJ]),r(()=>{if(TJ===null)TQ(!1),zZ(!1),H0(!1)},[TJ]),r(()=>{if(!DZ)return;let J=(Z)=>{if(z.current&&!z.current.contains(Z.target))hQ(!1)},Q=(Z)=>{if(Z.key==="Escape")hQ(!1)};return document.addEventListener("mousedown",J),window.addEventListener("keydown",Q),()=>{document.removeEventListener("mousedown",J),window.removeEventListener("keydown",Q)}},[DZ]),r(()=>{let J=!1,Q=$Q.filter(($)=>$.type==="image"&&$.url);if(!Q.length){SZ({});return}return(async()=>{let X=[];for(let O=0;O<Q.length;O+=8){let _=Q.slice(O,O+8),H=await Promise.all(_.map(async(q)=>({id:q.id,isBroken:await R1(q.url)})));if(X.push(...H),J)return}if(J)return;let Y=X.reduce((O,_)=>{return O[_.id]=_.isBroken,O},{});SZ(Y)})(),()=>{J=!0}},[$Q]),r(()=>{if(!GZ)return;let J=kJ.reduce((Q,Z)=>{return Q[Z.id]=Z.url,Q},{});f0(J),c0({})},[GZ,kJ]),r(()=>{if(nJ.current)clearTimeout(nJ.current),nJ.current=null;if(!MJ||!S)return;if(S.type==="video")return;let J=NZ*1000;return nJ.current=setTimeout(()=>{JJ((Q)=>U1(Q,m,bJ))},J),()=>{if(nJ.current)clearTimeout(nJ.current),nJ.current=null}},[MJ,S,m,bJ,NZ]),r(()=>{if(!S||!oQ.current)return;oQ.current=!1,requestAnimationFrame(()=>{W2()})},[S]);let mZ=typeof window!=="undefined"?window.matchMedia("(max-width: 1023px), (pointer: coarse)").matches:!1,e0=()=>{let J=tQ.current;if(!J)return;J.classList.add("mobile-gallery-fallback-fullscreen"),document.body.classList.add("mobile-gallery-fallback-active")},H2=()=>{let J=tQ.current;if(J)J.classList.remove("mobile-gallery-fallback-fullscreen");document.body.classList.remove("mobile-gallery-fallback-active")},W2=()=>{let J=tQ.current;if(!J)return;if(document.fullscreenElement)return;let Q=J.requestFullscreen||J.webkitRequestFullscreen||J.msRequestFullscreen;if(typeof Q==="function")Promise.resolve(Q.call(J)).catch(()=>{if(mZ)e0()});else if(mZ)e0()},O2=()=>{if(!document.fullscreenElement)return;let J=document.exitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen;if(typeof J==="function")Promise.resolve(J.call(document)).catch(()=>{})},J1=(J,{autoplay:Q=!1,fromGeneralPlay:Z=!1}={})=>{oQ.current=!!Q,JJ(J),TQ(Q),H0(Z),QQ(!Z)},F2=(J)=>{if(!J)return;AZ((Q)=>Q.includes(J)?Q:[...Q,J]),JJ(null)},L2=(J)=>{if(!J)return;AZ((Q)=>Q.filter((Z)=>Z!==J)),JJ(null)},E2=(J)=>{if(!J)return;j0((Q)=>Q.includes(J)?Q.filter((Z)=>Z!==J):[...Q,J]),JJ(null)},V2=async()=>{if(!(typeof window!=="undefined"&&typeof window.JSZip!=="undefined")){window.alert("No se pudo iniciar la descarga: falta la librería ZIP.");return}if(!m.length){window.alert("No hay archivos visibles para descargar.");return}let Q=($="")=>String($||"").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[\/:*?"<>|]/g,"-").replace(/\s+/g," ").trim(),Z=($="")=>{return((String($||"").split("?")[0].split("#")[0].match(/\.([a-zA-Z0-9]{2,5})$/)||[])[1]||"jpg").toLowerCase()};L0(!0);try{let $=new window.JSZip,X=m.filter((T)=>T?.url),Y=0,O=0,_=0,q=String(window.GALLERY_DOWNLOAD_PROXY||"").trim()||"https://corsproxy.io/?",L=(T)=>{if(!q)return"";if(q.includes("{url}"))return q.replace("{url}",encodeURIComponent(T));let B=q.endsWith("?")||q.endsWith("=")?"":q.includes("?")?"&":"?";return`${q}${B}${encodeURIComponent(T)}`},R=async(T)=>{let B=await fetch(T,{mode:"cors"});if(!B.ok)throw new Error(`HTTP ${B.status}`);return{blob:await B.blob(),viaProxy:!1}};for(let T=0;T<X.length;T+=1){let B=X[T],M=Q(B.nombre||"Sin nombre")||"Sin nombre",d=Z(B.url),y=Q(B.label||"sin-etiqueta")||"sin-etiqueta",i=`${String(T+1).padStart(4,"0")}_${y}.${d}`;try{let h;try{h=await R(B.url)}catch(UJ){let HJ=L(B.url);if(!HJ)throw UJ;let n=await fetch(HJ,{mode:"cors"});if(!n.ok)throw new Error(`Proxy HTTP ${n.status}`);h={blob:await n.blob(),viaProxy:!0}}if($.folder(M).file(i,h.blob),Y+=1,h.viaProxy)_+=1}catch(h){O+=1,console.warn("No se pudo descargar un archivo de la galería:",B.url,h)}}if(!Y){window.alert("No se pudo descargar ningún archivo. Revisá permisos CORS/URLs.");return}let D=await $.generateAsync({type:"blob"}),x=URL.createObjectURL(D),N=document.createElement("a"),C=new Date().toISOString().slice(0,10);if(N.href=x,N.download=`galeria-completa-${C}.zip`,document.body.appendChild(N),N.click(),N.remove(),URL.revokeObjectURL(x),O>0)window.alert(`Descarga completada con avisos: ${Y} archivos incluidos, ${O} omitidos y ${_} recuperados por proxy.`)}catch($){console.error("Error al generar ZIP de galería:",$),window.alert("No se pudo crear el ZIP de la galería.")}finally{L0(!1)}},Q1=()=>{oQ.current=!1,TQ(!1),JJ(null),H2(),O2()},KQ=()=>JJ((J)=>U1(J,m,bJ)),T3=()=>JJ((J)=>WQ((J??0)-1,m.length)),U2=async()=>{if(!S?.profileId||!S?.sourceTag||!Number.isInteger(S?.sourceIndex))return;let J=(U0||"").trim();if(!J){cJ("La URL no puede estar vacía.");return}if(N1(J)||!qJ(J,"")){cJ("La URL está bloqueada o no es válida.");return}try{if(R0(!0),cJ(""),J!==S.url)await n0({profileId:S.profileId,sourceTag:S.sourceTag,sourceIndex:S.sourceIndex,url:J});await a1({profileId:S.profileId,sourceTag:S.sourceTag,sourceIndex:S.sourceIndex,label:V0}),QQ(!1)}catch(Q){cJ("No se pudo guardar la edición del ítem."),console.error("Error al actualizar etiqueta de la multimedia:",Q)}finally{R0(!1)}},D2=(J,Q)=>{f0((Z)=>({...Z,[J]:Q}))},Z1=(J,Q)=>{if(!J)return;c0((Z)=>({...Z,[J]:Boolean(Q)}))},C2=(J)=>{let Q=(xZ[J?.id]||J?.url||"").trim();if(!Q)return;window.open(Q,"_blank","noopener,noreferrer")},R2=async(J)=>{if(!J)return;let Q=(xZ[J.id]||"").trim();if(!Q)return;iQ((Z)=>({...Z,[J.id]:!0}));try{if(Q!==J.url)await n0({profileId:J.profileId,sourceTag:J.sourceTag,sourceIndex:J.sourceIndex,url:Q});let Z=await R1(Q);if(SZ(($)=>({...$,[J.id]:Z})),!Z)Z1(J.id,!1)}catch(Z){console.error("Error al actualizar URL rota:",Z)}finally{iQ((Z)=>({...Z,[J.id]:!1}))}},B2=async(J)=>{if(!J)return;if(!window.confirm("¿Eliminar esta foto rota de la galería?"))return;iQ((Z)=>({...Z,[J.id]:!0}));try{await r1({profileId:J.profileId,sourceTag:J.sourceTag,sourceIndex:J.sourceIndex})}catch(Z){console.error("Error al eliminar foto rota:",Z)}finally{iQ((Z)=>({...Z,[J.id]:!1}))}},T2=f(()=>{if(g==="PERSONAJE")return GJ.length?`${GJ.length} personaje${GJ.length>1?"s":""} seleccionado${GJ.length>1?"s":""}`:"Sin personajes seleccionados";if(iJ&&jZ)return iJ.nombre;return _Z},[g,GJ,iJ,jZ,_Z]),A2=(J)=>{J.preventDefault();let Q={...v};if(QJ)w.ref(`perfiles/${QJ}`).set(Q).then(()=>{uJ(!1),EQ(null)}).catch((Z)=>console.error("Error al excitar la base de datos:",Z));else w.ref("perfiles").push(Q).then(()=>{uJ(!1),a(eQ())}).catch((Z)=>console.error("No pudo entrar el perfil:",Z))},z2=async(J)=>{J.preventDefault();let{firebaseId:Q,...Z}=k,$={...Z,type:"custom"};try{if(Q)await w.ref(`categorias/${Q}`).update($);else await w.ref("categorias").push($);IQ(!1),vZ()}catch(X){console.error("La categoría no quiso guardarse:",X)}},N2=async(J)=>{if(!J)return;try{await w.ref(`categorias/${J}`).remove(),b((Q)=>Q.filter((Z)=>Z.firebaseId!==J)),DQ((Q)=>Q===J?null:Q)}catch(Q){console.error("No se pudo borrar la categoría:",Q),alert("No se pudo borrar la carpeta. Probá de nuevo.")}},yZ=(J)=>{if(!J?.firebaseId)return;gQ(""),UQ(J),X0(!0)},M2=()=>{if(!QJ)return;let J=F.find((Q)=>Q.firebaseId===QJ);if(!J)return;yZ(J)},uZ=()=>{X0(!1),VQ(null),UQ(null)},K2=async(J)=>{if(!J)return;await w.ref(`perfiles/${J}`).remove(),I((Q)=>Q.filter((Z)=>Z.firebaseId!==J))},w2=async()=>{if(!RJ?.firebaseId)return;try{if(await K2(RJ.firebaseId),gQ(""),uJ(!1),QJ===RJ.firebaseId)EQ(null);uZ()}catch(J){console.error("No se pudo borrar el perfil:",J),gQ("No se pudo borrar el perfil en Firebase. Probá de nuevo.")}},HZ=()=>{hQ(!1),UQ(null)},G2=(J,Q)=>{J.preventDefault(),hQ(!0),b1({x:J.clientX,y:J.clientY}),UQ(Q)},k2=()=>{if(!RJ)return;a(JZ(RJ)),EQ(RJ.firebaseId),uJ(!0),HZ()},S2=async()=>{if(!RJ?.firebaseId)return;if(!confirm("¿Borrar perfil? Esta acción también lo elimina de Firebase.")){HZ();return}try{await w.ref(`perfiles/${RJ.firebaseId}`).remove(),I((Q)=>Q.filter((Z)=>Z.firebaseId!==RJ.firebaseId)),HZ()}catch(Q){console.error("No se pudo borrar el perfil:",Q),alert("No se pudo borrar el perfil. Probá de nuevo."),HZ()}},$1=(J)=>{let Q=J?.estaturaCm;if(Q===void 0||Q===null||Q==="")return"Sin dato";let Z=Number(Q);if(Number.isNaN(Z)||Z<=0)return"Sin dato";return`${Math.round(Z)} cm`},fZ=(J="")=>String(J||"").trim().toLowerCase(),x2=(J="")=>String(J||"").trim(),wQ=(J=[])=>[...J||[]].filter((Q)=>Q?.firebaseId&&(Q?.nombre||"").trim()).sort((Q,Z)=>(Q.nombre||"").localeCompare(Z.nombre||"","es",{sensitivity:"base"})).map((Q)=>Q.firebaseId),X1=(J=[],Q="GENERAL")=>{let Z=String(Q||"GENERAL").trim().toUpperCase(),$=[...J||[]].filter((_)=>_?.firebaseId&&(_?.nombre||"").trim()).sort((_,H)=>(_.nombre||"").localeCompare(H.nombre||"","es",{sensitivity:"base"}));if(Z==="GENERAL")return[{key:"all",label:"Todas",typeLabel:"General",ids:$.map((_)=>_.firebaseId)}];if(Z==="EDADES"){let _={"18-28":{key:"18-28",label:"18–28",typeLabel:"Edad",ids:[]},"29-39":{key:"29-39",label:"29–39",typeLabel:"Edad",ids:[]},"40+":{key:"40+",label:"40–50+",typeLabel:"Edad",ids:[]}};return $.forEach((H)=>{let q=gJ(H.fechaNacimiento);if(!Number.isFinite(q)||q<18)return;if(q<=28)_["18-28"].ids.push(H.firebaseId);else if(q<=39)_["29-39"].ids.push(H.firebaseId);else _["40+"].ids.push(H.firebaseId)}),Object.values(_)}let X=Z==="NACIONALIDADES"?"nacionalidad":"profesion",Y=Z==="NACIONALIDADES"?"Nacionalidad":"Profesión",O=$.reduce((_,H)=>{let q=fZ(H?.[X]);if(!q)return _;if(!_[q])_[q]={key:q,label:x2(H?.[X])||q,typeLabel:Y,ids:[]};return _[q].ids.push(H.firebaseId),_},{});return Object.values(O).sort((_,H)=>_.label.localeCompare(H.label,"es",{sensitivity:"base"}))},cZ=(J=[],Q="GENERAL",Z="")=>{let $=[...J||[]].filter((_)=>_?.firebaseId&&(_?.nombre||"").trim()).sort((_,H)=>(_.nombre||"").localeCompare(H.nombre||"","es",{sensitivity:"base"}));if(Q==="GENERAL"){let _=$.map((H)=>H.firebaseId);return{groupedIds:_.length>1?[{key:"general",label:"General",typeLabel:"General",ids:_}]:[],orderedIds:_}}let X=X1($,Q),Y=fZ(Z),O=X.filter((_)=>{if(!Y||Y==="all")return!0;return fZ(_.key)===Y}).filter((_)=>_.ids.length>=2);return{groupedIds:O,orderedIds:O.flatMap((_)=>_.ids)}},mJ=(J,Q)=>[J,Q].sort().join("__"),XQ=(J)=>{if(!J||typeof J!=="object")return null;let Q=String(J.winnerId||"").trim(),Z=String(J.loserId||"").trim();if(!Q||!Z||Q===Z)return null;return{winnerId:Q,loserId:Z,reason:J.reason==="transitive"?"transitive":"direct",playedAt:Number.isFinite(J.playedAt)?J.playedAt:null}},WZ=(J={},Q="")=>!!XQ(J?.[Q]),GQ=(J={},Q=[])=>{let Z=new Set((Q||[]).filter(Boolean)),$={},X={},Y={};Object.entries(J||{}).forEach(([q,L])=>{let R=XQ(L);if(!R)return;let{winnerId:D,loserId:x}=R;if(Z.size&&(!Z.has(D)||!Z.has(x)))return;let N=mJ(D,x),C={winnerId:D,loserId:x,reason:"direct",playedAt:R.playedAt??Date.now()};if($[N]=C,X[N]=C,!Y[D])Y[D]=new Set;Y[D].add(x)}),new Set([...Object.keys(Y),...Object.values(Y).flatMap((q)=>[...q])]).forEach((q)=>{let L=[...Y[q]||[]],R=new Set;while(L.length){let D=L.shift();if(!D||R.has(D)||D===q)continue;R.add(D);let x=mJ(q,D);if(!X[x])X[x]={winnerId:q,loserId:D,reason:"transitive",playedAt:null};(Y[D]||[]).forEach((N)=>{if(!R.has(N))L.push(N)})}});let _=Object.fromEntries(Object.entries(Y).map(([q,L])=>[q,[...L]])),H=v2(X);return{directMatchups:$,matchups:X,victoryGraph:_,stats:H}},kQ=(J,Q={})=>{let Z=DJ(J);if(!Z)return null;let $=wQ(F),X=GQ(Q?.directMatchups||Q?.matchups||{},$);return{arenaName:Z,orderedIds:$,...X}},P2=(J=[],Q={})=>{for(let Z=0;Z<J.length-1;Z++)for(let $=Z+1;$<J.length;$++){let X=mJ(J[Z],J[$]);if(!WZ(Q,X))return[J[Z],J[$]]}return null},sZ=(J=[],Q={},Z={})=>{let $={...Q||{},...Z||{}};for(let X of J){let Y=P2(X?.ids||[],$);if(Y)return Y}return null},SQ=(J=[],Q,Z="")=>{if(!Q)return null;return J.find(($)=>{let X=$?.ids||[];if(!X.includes(Q))return!1;return!Z||X.includes(Z)})||null},v2=(J={})=>{return Object.keys(J||{}).reduce((Q,Z)=>{let $=XQ(J[Z]);if(!$)return Q;let{winnerId:X,loserId:Y}=$,O=Q[X]||{wins:0,battles:0},_=Q[Y]||{wins:0,battles:0};return{...Q,[X]:{wins:O.wins+1,battles:O.battles+1},[Y]:{wins:_.wins,battles:_.battles+1}}},{})},Y1=(J="",Q="")=>{let Z=String(Q||"").trim();if(!J||!Z)return!1;return J.endsWith(`::${Z}`)},b2=(J,Q)=>{let Z=XQ(Q);if(!Z||Z.reason!=="direct")return J||null;let $=XQ(J);if(!$||$.reason!=="direct")return Z;let X=$.playedAt??0;return(Z.playedAt??0)>=X?Z:$},q1=(J,Q=_J)=>{let Z=String(J||"").trim();if(!Z)return GQ({},[]);let $={};Object.entries(Q||{}).forEach(([Y,O])=>{if(!Y1(Y,Z))return;let _=O?.directMatchups||{};Object.entries(_).forEach(([H,q])=>{$[H]=b2($[H],q)})});let X=[...F||[]].map((Y)=>Y?.firebaseId).filter(Boolean).sort((Y,O)=>String(Y).localeCompare(String(O),"es",{sensitivity:"base"}));return GQ($,X)},_1=(J,Q)=>{let $=(q1(J).stats||{})[Q]||{wins:0,battles:0},X=$.battles?Math.round($.wins/$.battles*100):0;return{...$,score:X}},j1=(J,Q=_J)=>{let Z=q1(J,Q).stats||{};return[...F||[]].filter(($)=>$?.firebaseId).reduce(($,X)=>{let Y=Z[X.firebaseId]||{wins:0,battles:0};return $[X.firebaseId]=Y.battles?Math.round(Y.wins/Y.battles*100):0,$},{})},A3=(J=[],Q={})=>{for(let Z=0;Z<J.length-1;Z++)for(let $=Z+1;$<J.length;$++){let X=mJ(J[Z],J[$]);if(!WZ(Q,X))return[J[Z],J[$]]}return null},H1=(J,Q,Z=null)=>{if(!Q)return null;let $=O3.includes(Q.mode)?Q.mode:"GENERAL",X=String(Q.groupKey||"all").trim().toLowerCase()||"all",Y=cZ(F,$,X),O=Y.groupedIds||[],_=Y.orderedIds||[],H=kQ(J,Z||CJ?.[DJ(J)]||{}),q=H?.directMatchups||{},L=H?.matchups||{},R=H?.victoryGraph||{},D=H?.stats||{},x=Q.championId,N=Q.challengerId,C=SQ(O,x,N),T=!!x&&!!N&&x!==N&&!!C&&!WZ(L,mJ(x,N)),B=O.length?sZ(O,Q.matchups||{},L):null,M=T?[x,N]:B,d=!B,y=SQ(O,M?.[0],M?.[1]);return{...Q,mode:$,groupKey:X,groupedIds:O,orderedIds:_,stats:D,directMatchups:q,matchups:L,victoryGraph:R,championId:M?M[0]:null,challengerId:M?M[1]:null,activeGroupKey:y?.key||null,activeGroupLabel:y?`${y.typeLabel}: ${y.label}`:"",isFinished:d}};r(()=>{if(!F.length)return;let J={},Q=[];if(Object.entries(_J||{}).forEach(([Z,$])=>{let{arenaName:X}=T1(Z),Y=H1(X,$,CJ?.[DJ(X)]);if(!Y)return;if(JSON.stringify($)===JSON.stringify(Y))return;J[Z]=Y,Q.push(w.ref(`arenaBattleState/${Z}`).set(Y).catch((_)=>console.error("No se pudo normalizar el estado del arena:",_)))}),!Object.keys(J).length)return;PJ((Z)=>({...Z,...J})),Promise.all(Q).catch(()=>{})},[_J,CJ,F,eJ]),r(()=>{if(!F.length)return;let J={};Object.entries(_J||{}).forEach(([$,X])=>{let{arenaName:Y}=T1($),O=DJ(Y);if(!O)return;if(!J[O])J[O]={};Object.entries(X?.directMatchups||{}).forEach(([_,H])=>{let q=XQ(H);if(!q)return;J[O][_]={winnerId:q.winnerId,loserId:q.loserId,reason:"direct",playedAt:q.playedAt??Date.now()}})});let Q=[],Z={};if(Object.entries(J).forEach(([$,X])=>{let Y=DJ($);if(!Y||CJ?.[Y])return;let O=kQ($,{directMatchups:X});if(!O)return;Z[Y]=O,Q.push(w.ref(`arenaGlobalState/${Y}`).set(O).catch((_)=>console.error("No se pudo migrar arenaGlobalState:",_)))}),!Object.keys(Z).length)return;yJ(($)=>({...$,...Z})),Promise.all(Q).catch(()=>{})},[_J,CJ,F]);let W1=(J,Q=K,Z=c)=>{let $=[...F].filter((C)=>C?.firebaseId&&(C?.nombre||"").trim()).sort((C,T)=>(C.nombre||"").localeCompare(T.nombre||"","es",{sensitivity:"base"}));if(!eJ||$.length<2)return;let X=String(Q||"GENERAL").trim().toUpperCase(),Y=cZ($,X,Z),O=Y.groupedIds||[],_=Y.orderedIds||[],H=DJ(J),q=kQ(J,CJ?.[H]||{}),L=q?.matchups||{},R=sZ(O,{},L);if(!R)return;let D=SQ(O,R[0],R[1]),x={mode:X,groupKey:String(Z||"").trim().toLowerCase()||"all",groupedIds:O,orderedIds:_,stats:q?.stats||{},directMatchups:q?.directMatchups||{},matchups:L,victoryGraph:q?.victoryGraph||{},championId:R[0],challengerId:R[1],activeGroupKey:D?.key||null,activeGroupLabel:D?`${D.typeLabel}: ${D.label}`:"",isFinished:!1},N=HQ(J,Q,Z);if(!N)return;if(PJ((C)=>({...C,[N]:x})),!CJ?.[H])yJ((C)=>({...C,[H]:q})),w.ref(`arenaGlobalState/${H}`).set(q).catch((C)=>console.error("No se pudo guardar arenaGlobalState inicial:",C));w.ref(`arenaBattleState/${N}`).set(x).catch((C)=>console.error("No se pudo guardar el estado del arena:",C))},I2=async(J,Q,Z)=>{if(!J)return;try{await w.ref(`perfiles/${J}/puntuaciones/${Q}`).set(Z)}catch($){console.error("No se pudo actualizar score del arena:",$)}},O1=(J,Q,Z=K,$=c)=>{let X=HQ(J,Z,$),Y=_J[X];if(!Y||Y.isFinished)return;let O=DJ(J),_=kQ(J,CJ?.[O]||{}),H=Array.isArray(Y.groupedIds)&&Y.groupedIds.length?Y.groupedIds:cZ(F,Y.mode||"GENERAL",Y.groupKey||"all").groupedIds,{championId:q,challengerId:L}=Y;if(Q!==q&&Q!==L)return;let R=Q===q?L:q;if(!Q||!R)return;let D=mJ(Q,R),x={..._?.directMatchups||{},[D]:{winnerId:Q,loserId:R,reason:"direct",playedAt:Date.now()}},N=GQ(x,wQ(F)),C=N.matchups,T=N.stats||{},B=SQ(H,Q,R),d=((l,u,LJ)=>{if(!u)return null;for(let EJ of l){if(!EJ||EJ===u)continue;let qQ=mJ(u,EJ);if(!WZ(LJ,qQ))return EJ}return null})(B?.ids||[],Q,C),y=d?[Q,d]:sZ(H,Y.matchups||{},C),i=SQ(H,y?.[0],y?.[1]),h={arenaName:O,orderedIds:wQ(F),directMatchups:N.directMatchups,matchups:C,victoryGraph:N.victoryGraph,stats:T},UJ={...Y,groupedIds:H,directMatchups:h.directMatchups,stats:T,matchups:C,victoryGraph:N.victoryGraph,championId:y?y[0]:null,challengerId:y?y[1]:null,activeGroupKey:i?.key||null,activeGroupLabel:i?`${i.typeLabel}: ${i.label}`:"",isFinished:!y},HJ={..._J||{},[X]:UJ},n=j1(J,HJ);I((l)=>l.map((u)=>{if(!u?.firebaseId||!Object.prototype.hasOwnProperty.call(n,u.firebaseId))return u;let LJ=n[u.firebaseId];return{...u,puntuaciones:{...u.puntuaciones||{},[J]:LJ}}})),Object.entries(n).forEach(([l,u])=>{I2(l,J,u)}),PJ((l)=>({...l,[X]:UJ})),yJ((l)=>({...l,[O]:h})),Promise.all([w.ref(`arenaGlobalState/${O}`).set(h),w.ref(`arenaBattleState/${X}`).set(UJ)]).catch((l)=>console.error("No se pudo guardar avance de batallas:",l))},g2=async()=>{if(!window.confirm("Esto va a poner TODAS las calificaciones en 0. ¿Continuar?"))return;try{await Promise.all((F||[]).map((Q)=>{if(!Q?.firebaseId)return Promise.resolve();return w.ref(`perfiles/${Q.firebaseId}/puntuaciones`).set(vQ())})),I((Q)=>Q.map((Z)=>({...Z,puntuaciones:vQ()}))),PJ({}),yJ({}),await w.ref("arenaBattleState").remove(),await w.ref("arenaGlobalState").remove(),alert("Calificaciones reiniciadas en 0 para todos los items.")}catch(Q){console.error("No se pudieron resetear las calificaciones:",Q),alert("No se pudo completar el reseteo.")}},h2=async(J,Q=K,Z=c)=>{if(!J){alert("Seleccioná un item para resetear.");return}if(!window.confirm(`Esto va a poner en 0 el item "${J}" para todos los perfiles. ¿Continuar?`))return;try{let X={..._J||{}},Y=Object.keys(X).filter((_)=>Y1(_,J));Y.forEach((_)=>delete X[_]),await Promise.all(Y.map((_)=>w.ref(`arenaBattleState/${_}`).remove())),PJ(X),await Promise.all((F||[]).map((_)=>{if(!_?.firebaseId)return Promise.resolve();return w.ref(`perfiles/${_.firebaseId}/puntuaciones/${J}`).set(0)})),I((_)=>_.map((H)=>({...H,puntuaciones:{...H.puntuaciones||{},[J]:0}})));let O=HQ(J,Q,Z);PJ((_)=>{if(!_?.[O])return _;let H={..._};return delete H[O],H}),yJ((_)=>{let H=DJ(J);if(!_?.[H])return _;let q={..._};return delete q[H],q}),await w.ref(`arenaBattleState/${O}`).remove(),await w.ref(`arenaGlobalState/${DJ(J)}`).remove(),alert(`Se reseteó "${J}" (${jQ(Q)}) y se limpió su estado de batallas.`)}catch(X){console.error("No se pudo resetear el item:",X),alert("No se pudo resetear ese item.")}},F1=async(J,Q,Z,$=K,X=c)=>{let Y=HQ(J,$,X),O=_J?.[Y],_=DJ(J),H=kQ(J,CJ?.[_]||{});if(!O){alert("Esa arena no tiene estado cargado.");return}let q=H?.matchups||{},L=H?.directMatchups||{};if(!Object.keys(q).filter((N)=>!!q[N]).length){alert("No hay cruces jugados para resetear en esta arena.");return}let D=mJ(Q,Z);if(!q[D]){alert("Ese cruce no existe o no fue jugado todavía.");return}if(!L[D]){alert("Ese cruce se resolvió por transitividad. Deshacé primero la batalla directa correspondiente.");return}if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{let N={...L};delete N[D];let C=GQ(N,wQ(F)),T={arenaName:_,orderedIds:wQ(F),directMatchups:C.directMatchups,matchups:C.matchups,victoryGraph:C.victoryGraph,stats:C.stats},B={...O,directMatchups:T.directMatchups,matchups:T.matchups,victoryGraph:T.victoryGraph,stats:T.stats},M=H1(J,B,T);if(!M){alert("No se pudo recomponer el estado del arena.");return}PJ((i)=>({...i,[Y]:M})),yJ((i)=>({...i,[_]:T})),await Promise.all([w.ref(`arenaGlobalState/${_}`).set(T),w.ref(`arenaBattleState/${Y}`).set(M)]);let d={..._J||{},[Y]:M},y=j1(J,d);await Promise.all(Object.entries(y).map(async([i,h])=>{await w.ref(`perfiles/${i}/puntuaciones/${J}`).set(h)})),I((i)=>i.map((h)=>{if(!h?.firebaseId||!Object.prototype.hasOwnProperty.call(y,h.firebaseId))return h;let UJ=y[h.firebaseId];return{...h,puntuaciones:{...h.puntuaciones||{},[J]:UJ}}})),alert("Batalla reseteada correctamente.")}catch(N){console.error("No se pudo resetear la batalla:",N),alert("No se pudo resetear esa batalla.")}},m2=f(()=>{let J=F;if(V==="RANKING")return[...J].sort((Q,Z)=>parseFloat(OJ(Z))-parseFloat(OJ(Q)));if(V==="CATEGORIAS"&&ZJ)return J.filter((Q)=>qZ(Q).includes(ZJ));return J},[F,V,ZJ]),L1=f(()=>{return new Set(kJ.map((J)=>String(J?.profileId||"").trim()).filter(Boolean))},[kJ]),OZ=f(()=>{let J=String(MZ||"").trim().toLowerCase(),Q=($)=>{return[$?.profesion,$?.profesiones].flatMap((Y)=>{if(Array.isArray(Y))return Y;if(typeof Y==="string")return Y.split(",");return[]}).map((Y)=>String(Y||"").trim()).filter(Boolean).join(" ")},Z=($)=>{if(!$||typeof $!=="object")return!1;return[String($.nombre||"").trim(),String($.nacionalidad||"").trim(),String($.ciudad||"").trim(),Q($),String($.fechaNacimiento||"").trim(),String($.estaturaCm||"").trim()].some(Boolean)||Array.isArray($.fotos)&&$.fotos.some(Boolean)};return[...F||[]].filter(($)=>{if(!Z($))return!1;if(ZQ&&q3($))return!1;if(lQ){let Y=String($?.firebaseId||$?.id||"").trim();if(!Y||!L1.has(Y))return!1}if(!J)return!0;return[String($.nombre||"").trim(),String($.nacionalidad||"").trim(),Q($)].join(" ").toLowerCase().includes(J)}).sort(($,X)=>String($?.nombre||"").localeCompare(String(X?.nombre||""),"es",{sensitivity:"base"}))},[F,MZ,ZQ,lQ,L1]),s=f(()=>OZ.find((J)=>J?.firebaseId===pQ)||null,[OZ,pQ]);r(()=>{let J=()=>AQ("");return document.addEventListener("click",J),()=>document.removeEventListener("click",J)},[]);let y2=f(()=>{if(!K)return[];return X1(F,K)},[F,K]),FZ=K&&K!=="GENERAL",E1=(J,Q)=>{if(Q==="promedio")return Number(OJ(J))||0;if(Q==="nombre")return(J.nombre||"").toLowerCase();if(Q==="nacionalidad")return(J.nacionalidad||"").toLowerCase();if(Q==="edad"){let Z=gJ(J.fechaNacimiento);return typeof Z==="number"?Z:-1}if(Q==="Rostro")return $Z(J)||0;if(Q==="Cuerpo")return XZ(J)||0;if(Q==="Actitud")return YZ(J)||0;return Number(J.puntuaciones?.[Q]||0)},u2=(J)=>{if(YJ==="promedio")return OJ(J);if(YJ==="Rostro")return $Z(J).toFixed(0);if(YJ==="Cuerpo")return XZ(J).toFixed(0);if(YJ==="Actitud")return YZ(J).toFixed(0);if(oJ.includes(YJ))return Number(J.puntuaciones?.[YJ]||0).toFixed(0);return OJ(J)},YQ=(J,Q="asc")=>{if(YJ===J){CZ((Z)=>Z==="asc"?"desc":"asc");return}_0(J),CZ(Q)},f2=(J,Q)=>{let Z=pJ[Q]||[],$=new Set,X=new Set,Y=Object.entries(_J||{});Z.forEach((H)=>{let q=CJ?.[DJ(H)]?.matchups||{};Object.values(q).forEach((L)=>{if(!L||typeof L!=="object")return;if(L.winnerId===J&&L.loserId)$.add(L.loserId);if(L.loserId===J&&L.winnerId)X.add(L.winnerId)})});let O=new Map((F||[]).filter((H)=>H?.firebaseId).map((H)=>[H.firebaseId,H.nombre||"Sin nombre"])),_=(H)=>[...H].map((q)=>O.get(q)).filter(Boolean).sort((q,L)=>q.localeCompare(L,"es",{sensitivity:"base"}));return{wins:_($),losses:_(X)}},dZ=(J,Q)=>{let Z=String(Q||"").trim(),$=String(J||"").trim();if(!Z||!$)return{arenaName:Z,wins:[],losses:[]};let X=CJ?.[DJ(Z)]?.matchups||{},Y=new Map((F||[]).filter((H)=>H?.firebaseId).map((H)=>[H.firebaseId,H.nombre||"Sin nombre"])),O=([H,q])=>{if(!q||typeof q!=="object")return null;let L=String(q.winnerId||"").trim(),R=String(q.loserId||"").trim();if(!L||!R)return null;let D=L===$;if(!D&&R!==$)return null;let N=D?R:L;return{pairKey:H,arenaName:Z,profileId:$,opponentId:N,opponentName:Y.get(N)||"Sin nombre",winnerId:L,loserId:R}},_=Object.entries(X).map(O).filter(Boolean).sort((H,q)=>H.opponentName.localeCompare(q.opponentName,"es",{sensitivity:"base"}));return{arenaName:Z,wins:_.filter((H)=>H.winnerId===$),losses:_.filter((H)=>H.loserId===$)}},c2=(J,Q)=>{let Z=dZ(J,Q),$=Z.wins.length,X=Z.losses.length,Y=$+X,O=Y?$/Y*100:0;return{wins:$,losses:X,total:Y,winRate:O}},nZ=[...m2].sort((J,Q)=>{let Z=E1(J,YJ),$=E1(Q,YJ),X=0;if(typeof Z==="string"||typeof $==="string")X=String(Z).localeCompare(String($),"es",{sensitivity:"base"});else X=Z-$;if(X===0)return(J.nombre||"").localeCompare(Q.nombre||"","es",{sensitivity:"base"});return fJ==="asc"?X:-X}),pZ=!AJ,s2=f(()=>RZ?nZ:nZ.slice(0,10),[nZ,RZ]);return React.createElement("div",{className:"app-space-theme flex h-screen w-screen overflow-hidden bg-[#020617] stone-wall-surface relative"},AJ&&React.createElement("aside",{className:"hud-frame hud-frame--panel w-64 shrink-0 theme-surface-card stone-wall-surface border-r theme-border-secondary flex flex-col p-6 z-20 shadow-xl overflow-y-auto relative"},React.createElement("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"}),React.createElement("div",{className:"mb-12 text-center flex-shrink-0"},React.createElement("h1",{className:"neon-sign neon-sign--cyan text-5xl font-black text-[var(--metal-gold)] italic tracking-tighter leading-none"},"G2"),React.createElement("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-2"},"Elite Database")),React.createElement("nav",{className:"flex-1 space-y-2 mb-8"},[{id:"EXPLORAR",icon:"layout-grid",label:"Explorar"},{id:"RANKING",icon:"trending-up",label:"Ranking"},{id:"BATALLAS",icon:"swords",label:"Batallas"},{id:"GALERIA",icon:"images",label:"Galería"},{id:"CAMPEONAS",icon:"crown",label:"Campeonas"},{id:"anonimo",icon:"user-round-x",label:"ánonimo"},{id:"TALLER",icon:"hammer",label:"Taller"}].map((J)=>React.createElement("button",{key:J.id,onClick:()=>{A(J.id),DQ(null),RQ(null),JJ(null),dJ("")},className:`btn-metal sidebar-nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-[1.6rem] text-xs transition-all ${V===J.id?"is-active text-[#ecfeff]":"text-slate-900"}`},React.createElement(o,{name:J.icon,size:18}),J.label))),React.createElement("button",{onClick:()=>d0(),className:"btn-metal btn-metal--gold py-5 rounded-[2.2rem] text-[11px] flex items-center justify-center gap-2 flex-shrink-0"},React.createElement(o,{name:"plus",size:16})," Nuevo Perfil")),React.createElement("main",{className:"flex-1 min-w-0 w-full flex flex-col overflow-hidden bg-[#020617] stone-wall-surface relative"},React.createElement("button",{onClick:()=>m1((J)=>!J),className:"sidebar-screen-toggle btn-metal btn-metal--silver rounded-full text-slate-900","aria-label":AJ?"Replegar menú lateral":"Desplegar menú lateral",title:AJ?"Replegar menú lateral":"Desplegar menú lateral"},React.createElement(o,{name:AJ?"panel-left-close":"panel-left-open",size:12})),React.createElement("div",{className:`hud-section flex-1 overflow-y-auto relative z-10 stone-wall-surface ${AJ?"p-6 md:p-10 lg:p-12":"p-4 md:p-8 lg:p-10"}`},React.createElement("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"}),React.createElement("div",{className:"corner-ember-glow corner-ember-glow--right corner-ember-glow--top","aria-hidden":"true"}),s&&React.createElement("div",{className:`fixed inset-0 z-[140] flex items-center justify-center bg-slate-950/75 backdrop-blur-sm px-4 py-8 ${AJ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>dJ(""),role:"presentation"},React.createElement("section",{className:"taller-detail-panel rounded-[2rem] p-8 md:p-10 relative overflow-hidden w-full max-w-5xl max-h-[90vh] overflow-y-auto",onClick:(J)=>J.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Ficha del personaje"},React.createElement("button",{type:"button",onClick:()=>dJ(""),className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100 flex items-center justify-center hover:bg-slate-800/90 transition","aria-label":"Cerrar ficha"},React.createElement(o,{name:"x",size:18})),React.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-[minmax(260px,320px),1fr] gap-8 items-start"},React.createElement("div",{className:"taller-detail-avatar rounded-[1.8rem] overflow-hidden border border-cyan-200/35"},React.createElement("img",{src:s.fotos?.[0]||"https://via.placeholder.com/500x700",alt:s.nombre||"Perfil seleccionado",className:"w-full h-full object-cover"})),React.createElement("div",{className:"space-y-6"},React.createElement("div",null,React.createElement("p",{className:"text-[10px] uppercase tracking-[0.35em] text-cyan-200/90 font-black"},"Ficha del personaje"),React.createElement("h3",{className:"taller-detail-title text-3xl md:text-4xl font-black uppercase mt-2"},s.nombre||"Sin nombre")),!s?.isAnonymousGallery&&React.createElement("div",{className:"grid grid-cols-1 gap-4"},React.createElement("article",{className:"taller-data-chip"},React.createElement("span",null,"Profesión"),React.createElement("strong",null,s.profesion||"No definida")),React.createElement("article",{className:"taller-data-chip"},React.createElement("span",null,"Nacionalidad - Ciudad"),React.createElement("strong",null,`${s.nacionalidad||"No definida"} - ${s.ciudad||"No definida"}`)),React.createElement("article",{className:"taller-data-chip"},React.createElement("span",null,"Fecha de nacimiento - Edad"),React.createElement("strong",null,`${s.fechaNacimiento||"No informado"} - ${gJ(s.fechaNacimiento)} años`)),React.createElement("article",{className:"taller-data-chip"},React.createElement("span",null,"Estatura"),React.createElement("strong",null,s.estaturaCm?`${s.estaturaCm} cm`:"No informada"))),React.createElement("div",{className:"pt-2"},React.createElement("div",{className:"grid grid-cols-2 sm:grid-cols-[1fr,1fr,auto,auto] gap-3 items-center"},!s?.isAnonymousGallery&&React.createElement("button",{type:"button",onClick:()=>{mQ({isOpen:!0,profile:s})},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase"},"Puntajes"),React.createElement("button",{type:"button",onClick:()=>{let J=U.current,Q=J&&!J.closed?J:window.open("","_blank");U.current=Q,oZ({targetWindow:Q,profileName:s?.nombre||"",profession:s?.profesion||"",photos:[...(s?.galeria?.fotos||[]).map((Z,$)=>({...e(Z,"image"),sourceTag:"fotos",sourceIndex:$})),...(s?.galeria?.videos||[]).map((Z,$)=>({...e(Z,"video"),sourceTag:"videos",sourceIndex:$}))],editingId:s?.firebaseId||s?.id||"",battlePhotoPrefs:s?.batallaFotosPreferidas||s?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:s?.fotos?.[0]||""}),Q?.focus()},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase"},"Ver Galería"),!s?.isAnonymousGallery&&React.createElement(React.Fragment,null,React.createElement("button",{type:"button",onClick:()=>{dJ(""),QZ(s)},className:"w-10 h-10 rounded-md bg-yellow-400 text-slate-950 text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Editar ficha completa",title:"Editar ficha completa"},"✏️"),React.createElement("button",{type:"button",onClick:()=>yZ(s),className:"w-10 h-10 rounded-md bg-red-500 text-white text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Eliminar ficha",title:"Eliminar ficha"},"\uD83D\uDDD1️")))))))),V==="TALLER"&&React.createElement("div",{className:"space-y-8 animate-in fade-in duration-500"},React.createElement("div",{className:"space-y-2"},React.createElement("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter"},"Taller")),React.createElement("div",{className:"max-w-2xl"},React.createElement("input",{id:"tallerSearchInput",type:"text",value:MZ,onChange:(J)=>B0(J.target.value),placeholder:"Ej: Argentina, Modelo, Lucía...","aria-label":"Buscar perfiles del taller",className:"w-full rounded-2xl border border-cyan-200/30 bg-slate-950/70 px-5 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-300/70 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"})),React.createElement("div",{className:"flex flex-wrap gap-3"},React.createElement("button",{type:"button",onClick:()=>i1((J)=>!J),className:`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${ZQ?"btn-metal--danger":""}`},"Fotos incompletas ",ZQ?"(Activo)":""),React.createElement("button",{type:"button",onClick:()=>l1((J)=>!J),className:`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${lQ?"btn-metal--danger":""}`},"Fotos Rotas ",lQ?"(Activo)":"")),React.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"},OZ.map((J)=>{let Q=XJ(J.profesion),Z=pQ&&pQ===J.firebaseId,$=_3(J),X=t1===(J.firebaseId||J.nombre);return React.createElement("button",{key:J.firebaseId||J.nombre,type:"button",onClick:()=>{if(rQ.current){rQ.current=!1;return}AQ(""),dJ(""),QZ(J)},onContextMenu:(Y)=>{if(!ZQ||!$.length)return;Y.preventDefault(),Y.stopPropagation(),AQ((O)=>O===(J.firebaseId||J.nombre)?"":J.firebaseId||J.nombre)},onTouchStart:()=>{if(!ZQ||!$.length)return;rQ.current=!1,clearTimeout(aQ.current),aQ.current=setTimeout(()=>{rQ.current=!0,AQ(J.firebaseId||J.nombre)},550)},onTouchEnd:()=>{clearTimeout(aQ.current)},onTouchMove:()=>{clearTimeout(aQ.current)},className:`profile-card rounded-2xl p-4 relative text-left transition-all ${Z?"taller-card--selected":""}`},React.createElement("div",{className:"w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-slate-900/70"},React.createElement("img",{src:J.fotos?.[0]||"https://via.placeholder.com/400x500",alt:J.nombre||"Personaje",className:"w-full h-full object-cover",loading:"lazy"})),React.createElement("h3",{className:"text-lg font-black text-white uppercase tracking-wide truncate"},J.nombre||"Sin nombre"),React.createElement("p",{className:"text-xs text-slate-300 truncate"},J.nacionalidad||"Nacionalidad no definida"),React.createElement("p",{className:"text-[10px] uppercase font-bold tracking-widest mt-2 truncate",style:{color:Q.color,textShadow:`0 0 12px ${Q.sombra}`}},J.profesion||"Profesión no definida"),X&&React.createElement("button",{type:"button",className:"absolute left-4 right-4 bottom-4 z-20 rounded-xl border border-red-300/55 bg-slate-950/95 px-3 py-3 text-[11px] text-slate-100 text-left shadow-[0_0_24px_rgba(248,113,113,0.45)] transition hover:border-cyan-300/75 hover:text-cyan-100",onClick:(Y)=>{Y.preventDefault(),Y.stopPropagation(),o1(J)},role:"tooltip",title:"Ir a la galería de este personaje"},React.createElement("p",{className:"font-black uppercase tracking-wider text-red-200 mb-2"},"Faltan fotos:"),React.createElement("ul",{className:"space-y-1 mb-2"},$.map((Y)=>React.createElement("li",{key:Y,className:"leading-tight"},"• ",Y))),React.createElement("span",{className:"inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200"},"Ir a galería ↗")))})),!OZ.length&&React.createElement("div",{className:"rounded-2xl border border-slate-500/30 bg-slate-900/50 px-6 py-8 text-center text-sm text-slate-300"},"No hay personajes que coincidan con la búsqueda."),React.createElement(H3,{isOpen:s1,profile:s,onClose:()=>d1(!1)})),V==="CAMPEONAS"&&!ZJ&&(()=>{let J=[{id:"18-23",min:18,max:23},{id:"24-29",min:24,max:29},{id:"30-35",min:30,max:35},{id:"36-41",min:36,max:41},{id:"42-60",min:42,max:60}],Q=(F||[]).filter(Boolean),Z=(q=[])=>[...q].sort((L,R)=>(Number(OJ(R))||0)-(Number(OJ(L))||0)).slice(0,3),$={nacionalidades:[],profesiones:[],edades:[],items:[],caracteristicas:[]},X=Z(Q);[...new Set(Q.map((q)=>String(q.nacionalidad||"").trim()).filter(Boolean))].forEach((q)=>$.nacionalidades.push({id:`nac-${q}`,title:`Nacionalidad · ${q}`,top:Z(Q.filter((L)=>String(L.nacionalidad||"").trim()===q))})),J.forEach((q)=>$.edades.push({id:`edad-${q.id}`,title:`Edad · ${q.id}`,top:Z(Q.filter((L)=>{let R=gJ(L.fechaNacimiento);return typeof R==="number"&&R>=q.min&&R<=q.max}))})),[...new Set(Q.map((q)=>String(q.profesion||"").trim()).filter(Boolean))].forEach((q)=>$.profesiones.push({id:`prof-${q}`,title:`Profesión · ${q}`,top:Z(Q.filter((L)=>String(L.profesion||"").trim()===q))})),oJ.forEach((q)=>{let L=[...Q].sort((R,D)=>(Number(D?.puntuaciones?.[q])||0)-(Number(R?.puntuaciones?.[q])||0)).slice(0,3);$.items.push({id:`item-${q}`,title:`Ítem · ${q}`,top:L,scoreType:"item",scoreKey:q})}),[["Cuerpo",["Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura"]],["Rostro",["Rostro","Ojos","Boca","Cabello"]],["Actitud",["Sensualidad","Carisma","Elegancia","Dulzura","Talento"]]].forEach(([q,L])=>{let R=[...Q].map((D)=>({...D,__metaScore:L.reduce((x,N)=>x+(Number(D?.puntuaciones?.[N])||0),0)/L.length})).sort((D,x)=>(x.__metaScore||0)-(D.__metaScore||0)).slice(0,3);$.caracteristicas.push({id:`meta-${q}`,title:q,top:R,scoreType:"meta"})});let _=[{id:"general",title:"Podio de puntuación general",cards:[{id:"general-score",title:"General · Ranking total",top:X}]},{id:"nacionalidades",title:"Podios por nacionalidades",cards:$.nacionalidades},{id:"profesiones",title:"Podios por profesión",cards:$.profesiones},{id:"edades",title:"Podios por edades",cards:$.edades},{id:"items",title:"Podios por ítem",cards:$.items},{id:"caracteristicas",title:"Podios por características",cards:$.caracteristicas}],H=(q,L=!1)=>React.createElement("article",{key:q.id,className:`champion-podium-card champion-podium-card--${L?"general":"section"} rounded-2xl p-5`},React.createElement("h3",{className:`champion-podium-title text-xs font-black uppercase tracking-[0.18em] mb-3 ${L?"text-[var(--metal-gold)]":"text-cyan-100"}`},q.title),React.createElement("ol",{className:"space-y-2"},q.top.length?q.top.map((R,D)=>{let x=qJ(String(R?.fotos?.[0]||"").trim(),""),N=D===0;return React.createElement("li",{key:`${q.id}-${R.firebaseId||R.nombre||D}`,className:`champion-rank-row champion-rank-row--${D+1} flex items-center justify-between gap-3 text-xs`},React.createElement("div",{className:"flex items-center gap-2 min-w-0"},N&&x&&React.createElement("div",{className:"flex flex-col items-center shrink-0 -mt-1",title:`Campeona de ${q.title}`},React.createElement("span",{className:"text-[12px] leading-none -mb-0.5","aria-hidden":"true"},"\uD83D\uDC51"),React.createElement("img",{src:x,alt:`Miniatura de ${R.nombre||"Campeona"}`,className:`champion-avatar w-8 h-8 rounded-full object-cover border ${L?"champion-avatar--general":"champion-avatar--section"}`})),React.createElement("span",{className:`champion-rank-name font-black truncate ${N?"champion-rank-name--winner":"text-slate-100"}`},D+1,". ",R.nombre||"Sin nombre")),React.createElement("span",{className:`champion-score font-black shrink-0 ${D===0?"champion-score--winner":""}`},OJ(R)))}):React.createElement("li",{className:"text-xs text-slate-400"},"Sin datos suficientes.")));return React.createElement("div",{className:"space-y-8 animate-in fade-in duration-500"},React.createElement("div",null,React.createElement("h2",{className:"neon-sign neon-sign--magenta text-4xl font-black italic text-white uppercase tracking-tighter"},"Campeonas"),React.createElement("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1"},"Podios organizados por secciones")),React.createElement("div",{className:"space-y-7"},_.map((q)=>React.createElement("section",{key:q.id,className:"space-y-3"},React.createElement("h3",{className:"text-[11px] font-black uppercase tracking-[0.2em] text-cyan-100/85"},q.title),React.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"},q.cards.map((L)=>H(L,q.id==="general")))))))})(),V==="anonimo"&&!ZJ&&React.createElement("div",{className:"space-y-8 animate-in fade-in duration-500"},React.createElement("section",{className:"hud-frame hud-frame--panel profession-banner p-8 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand"},React.createElement("p",{className:"text-[11px] uppercase tracking-[0.35em] text-cyan-200/80 font-black"},"Modo"),React.createElement("h2",{className:"neon-sign neon-sign--magenta font-title text-5xl md:text-6xl font-black italic text-white tracking-[0.08em] leading-none mt-3"},"ánonimo"),React.createElement("p",{className:"text-sm md:text-base text-slate-200/85 mt-4 max-w-3xl"},"Este panel reutiliza el estilo visual del sistema y no abre la ficha de personaje para mantener una navegación discreta."),React.createElement("div",{className:"mt-8 space-y-5"},React.createElement("div",{className:"grid gap-3 sm:grid-cols-3"},[{key:"imagen",label:"Imagen"},{key:"escena",label:"Escena"},{key:"audio",label:"Audio"}].map((J)=>React.createElement("button",{key:J.key,type:"button",onClick:()=>{u1(J.key),cQ(""),wJ("")},className:`px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] transition-all border ${sJ===J.key?"text-cyan-100 border-cyan-300/50 bg-cyan-500/35":"text-slate-200 border-slate-500/50 bg-slate-700/30 hover:bg-slate-600/35"}`},J.label))),(sJ==="imagen"||sJ==="escena")&&React.createElement("div",{className:"grid gap-4 md:grid-cols-2"},React.createElement("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:KZ,onChange:(J)=>{T0(J.target.value),cQ("")}},React.createElement("option",{value:"url"},"URL"),React.createElement("option",{value:"file"},"Archivo de dispositivo")),React.createElement("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:K0,onChange:(J)=>y1(J.target.value)},$J.map((J)=>React.createElement("option",{key:J,value:J},J))),KZ==="url"?React.createElement("input",{placeholder:"URL",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:A0,onChange:(J)=>z0(J.target.value)}):React.createElement("input",{type:"file",accept:sJ==="imagen"?"image/*,.gif":"image/*,video/*,.gif",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",onChange:(J)=>M0(J.target.files?.[0]||null)}),React.createElement("input",{placeholder:"Autor (opcional)",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:w0,onChange:(J)=>G0(J.target.value)}),React.createElement("button",{type:"button",onClick:async()=>{await Q2(sJ==="escena"?"videos":"fotos")},className:"md:col-span-2 px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all"},"Guardar ",sJ),k0&&React.createElement("p",{className:"md:col-span-2 text-xs font-black uppercase tracking-[0.12em] text-rose-300"},k0)),sJ==="audio"&&React.createElement("div",{className:"border-t border-cyan-300/25 pt-4 mt-2 space-y-3"},React.createElement("p",{className:"text-[11px] uppercase tracking-[0.25em] text-cyan-200/80 font-black"},"Audio para botón \uD83C\uDFB5"),React.createElement("input",{placeholder:"Nombre",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:S0,onChange:(J)=>x0(J.target.value)}),React.createElement("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:sQ,onChange:(J)=>P0(J.target.value)},React.createElement("option",{value:"url"},"URL"),React.createElement("option",{value:"file"},"Archivo de dispositivo")),sQ==="url"?React.createElement("input",{placeholder:"URL",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:v0,onChange:(J)=>b0(J.target.value)}):React.createElement("input",{type:"file",accept:"audio/*",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",onChange:(J)=>g0(J.target.files?.[0]||null)}),React.createElement("button",{type:"button",onClick:Z2,className:"px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all"},"Guardar audio en Firebase"),IJ.length>0&&React.createElement("div",{className:"space-y-2 pt-1"},IJ.map((J,Q)=>React.createElement("div",{key:`${J.url}-${Q}`,className:"theme-surface-soft border theme-border-secondary rounded-xl px-3 py-2 flex items-center justify-between gap-3"},React.createElement("div",{className:"min-w-0"},React.createElement("p",{className:"text-sm font-bold text-cyan-100 truncate"},J.nombre),React.createElement("p",{className:"text-[11px] text-cyan-200/70 truncate"},J.url)),React.createElement("button",{type:"button",onClick:()=>$2(Q),className:"w-8 h-8 rounded-full border border-rose-400/70 text-rose-200 bg-rose-500/20 hover:bg-rose-500/35 hover:text-white transition-all font-black text-lg leading-none shrink-0","aria-label":`Eliminar audio ${J.nombre}`,title:"Eliminar audio"},"×")))),h0?React.createElement("p",{className:"text-xs font-black uppercase tracking-[0.12em] text-rose-300"},h0):null)))),V==="EXPLORAR"&&!ZJ&&React.createElement("div",{className:"space-y-10 animate-in fade-in duration-500"},React.createElement("div",null,React.createElement("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter"},"Explorar"),React.createElement("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1"},"Organización automática por profesión")),React.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"},[...new Set((F||[]).map((J)=>String(J?.profesion||"").trim()).filter(Boolean))].map((J)=>{let Q=(F||[]).filter(($)=>String($?.profesion||"").trim()===J).length,Z=xQ(J);return React.createElement("div",{key:J,onClick:()=>DQ(J),className:"profession-folder-card rounded-2xl p-8 text-center cursor-pointer transition-all group relative overflow-hidden active:scale-95",style:{"--folder-color":Z.baseColor,"--folder-glow":Z.glowColor}},React.createElement("div",{className:"profession-folder-card__icon w-24 h-24 rounded-[2rem] flex items-center justify-center text-5xl mx-auto mb-6"},E3(J)),React.createElement("h3",{className:"text-2xl font-black text-white mb-2 truncate uppercase tracking-tighter italic"},J),React.createElement("div",{className:"inline-flex items-center gap-2 px-5 py-2 rounded-full border",style:{borderColor:"color-mix(in srgb, var(--folder-color) 65%, rgba(2,6,23,0.8) 35%)",background:"color-mix(in srgb, var(--folder-color) 14%, rgba(2,6,23,0.68) 86%)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.16), 0 0 14px color-mix(in srgb, var(--folder-glow) 35%, transparent)"}},React.createElement("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest"},Q," ",Q===1?"Perfil":"Perfiles")))}))),ZJ&&React.createElement("div",{className:"space-y-8 animate-in slide-in-from-bottom-4 duration-500"},React.createElement("div",{className:"hud-frame hud-frame--panel profession-banner flex items-center justify-between p-6 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",style:{"--banner-color":V==="CATEGORIAS"?"rgba(148, 163, 184, 0.8)":xQ(ZJ).baseColor}},React.createElement("div",{className:"flex items-center gap-3"},React.createElement("button",{onClick:()=>DQ(null),className:"group flex items-center","aria-label":"Volver",title:"Volver"},React.createElement("div",{className:"back-btn-silver p-2 rounded-xl text-slate-400 group-hover:text-slate-200 transition-all"},React.createElement("i",{"data-lucide":"arrow-left",className:"w-4 h-4"}))),React.createElement("button",{onClick:()=>d0(V==="CATEGORIAS"?"":ZJ),className:"w-9 h-9 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xl leading-none flex items-center justify-center shadow-[0_0_14px_rgba(16,185,129,0.45)] transition-all","aria-label":"Agregar nuevo perfil",title:"Agregar nuevo perfil"},"+")),React.createElement("h2",{className:"neon-sign neon-sign--magenta font-title text-6xl font-black italic text-white tracking-[0.08em] leading-none"},V==="CATEGORIAS"?t.find((J)=>J.firebaseId===ZJ)?.label||"Archivo del Reino":ZJ)),React.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"},(F||[]).filter((J)=>{if(!J)return!1;if(V==="CATEGORIAS")return qZ(J).includes(ZJ);return String(J.profesion||"").trim().toLowerCase()===String(ZJ).trim().toLowerCase()}).map((J)=>{let Q=Number(typeof OJ==="function"?OJ(J):0)||0,Z=Q>=95?"card-score-badge--gold":Q>=86?"card-score-badge--diamond":Q>=75?"card-score-badge--fire":"",$=XJ(J.profesion);return React.createElement("div",{key:J.firebaseId||Math.random(),onClick:()=>{VQ(null),B0(""),dJ(J.firebaseId||"")},onContextMenu:(X)=>G2(X,J),className:"profile-card group relative rounded-2xl overflow-hidden cursor-pointer",style:{"--card-neon-color":$.color,"--card-neon-glow":$.sombra}},React.createElement("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden"},React.createElement("img",{src:qJ(J.fotos&&J.fotos.length>0?J.fotos[0]:"","https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:SJ}),React.createElement("div",{className:"absolute top-3 left-3 z-20"},React.createElement("button",{type:"button",onClick:(X)=>{X.stopPropagation(),gQ(""),UQ(J),VQ((Y)=>Y===J.firebaseId?null:J.firebaseId)},className:"card-menu-btn rounded-full bg-slate-900/88 backdrop-blur-md border border-white/10 text-slate-200 hover:text-white hover:border-[var(--metal-gold)] transition-all flex items-center justify-center","aria-label":"Abrir menú contextual del perfil"},React.createElement(o,{name:"more-vertical",size:12})),P1===J.firebaseId&&React.createElement("div",{className:"absolute top-12 left-0 min-w-[170px] rounded-xl border theme-border-secondary bg-slate-950/95 shadow-2xl p-2 space-y-1",onClick:(X)=>X.stopPropagation()},React.createElement("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-slate-200 hover:bg-slate-800 transition-all",onClick:()=>{VQ(null),QZ(J)}},"Editar"),React.createElement("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-red-300 hover:bg-red-500/20 transition-all",onClick:()=>{yZ(J),VQ(null)}},"Eliminar"))),React.createElement("button",{type:"button",onClick:(X)=>{X.stopPropagation(),mQ({isOpen:!0,profile:J})},className:`card-score-badge ${Z} absolute top-2 right-2 w-14 h-14 backdrop-blur-md rounded-full flex flex-col items-center justify-center border`,title:`Puntaje de ${J.nombre}`},Q>=75&&Q<=85&&React.createElement("span",{className:"card-score-badge__fire-emoji","aria-hidden":"true"},"\uD83D\uDD25"),React.createElement("span",{className:"text-[9px] font-black text-[var(--metal-gold)] leading-none"},"G2"),React.createElement("span",{className:"card-score-badge__value text-lg font-black"},typeof OJ==="function"?OJ(J):"8.5")),React.createElement("div",{className:"absolute bottom-4 left-4 right-4"},React.createElement("div",{className:"text-bubble card-footer-profession w-full backdrop-blur-md p-4 rounded-2xl border"},React.createElement("h3",{className:"text-lg font-black text-white italic tracking-tighter leading-none flex items-center gap-2"},J.nombre,React.createElement("span",{className:"text-[var(--metal-gold)] text-sm not-italic"},"(",typeof gJ==="function"?gJ(J.fechaNacimiento):"??",")")),React.createElement("div",{className:"flex justify-between items-center mt-1"},React.createElement("span",{className:"text-[var(--metal-gold)] text-[7px] font-black uppercase tracking-widest"},J.profesion),React.createElement("p",{className:"text-[7px] font-bold text-slate-400 uppercase"},J.nacionalidad))))))})),DZ&&RJ&&React.createElement("div",{ref:z,className:"fixed z-[120] min-w-[11rem] rounded-xl border border-cyan-400/40 bg-slate-950/95 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.55)] p-2",style:{top:`${q0.y}px`,left:`${q0.x}px`}},React.createElement("button",{type:"button",onClick:k2,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-cyan-200 hover:bg-cyan-500/20 transition-colors"},"Editar"),React.createElement("button",{type:"button",onClick:S2,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-rose-300 hover:bg-rose-500/20 transition-colors"},"Eliminar"))),V==="GALERIA"&&!ZJ&&React.createElement("div",{className:"space-y-10 animate-in fade-in duration-500"},React.createElement("div",{className:"flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6"},React.createElement("div",null,React.createElement("h2",{className:"neon-sign neon-sign--magenta text-4xl font-black italic text-white uppercase tracking-tighter"},"Galería"),React.createElement("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1"},`Vista por ${_Z} · ${T2}`)),React.createElement("div",{className:"flex flex-wrap gap-2"},t2.map((J)=>React.createElement("button",{key:J,type:"button",onClick:()=>g1(J),className:`btn-metal px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all ${g===J?"btn-metal--gold text-[#fffaf0]":"btn-metal--silver text-slate-900"}`},V1[J])),React.createElement("button",{type:"button",onClick:()=>kZ(!0),className:"btn-metal btn-metal--danger px-4 py-2 rounded-full text-[10px] tracking-[0.08em] inline-flex items-center gap-2",title:"Ver y corregir fotos rotas"},React.createElement("span",{className:"text-sm leading-none"},"\uD83D\uDC94"),"Rotas (",kJ.length,")")),React.createElement("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3"},React.createElement("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4"},React.createElement("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500"},"Total"),React.createElement("p",{className:"text-2xl font-black italic text-white mt-1"},MQ.length)),React.createElement("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4"},React.createElement("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500"},"Visibles"),React.createElement("p",{className:"text-2xl font-black italic text-[var(--metal-gold)] mt-1"},m.length)),React.createElement("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4"},React.createElement("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500"},"Etiquetas"),React.createElement("p",{className:"text-2xl font-black italic text-white mt-1"},$J.length)),React.createElement("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4"},React.createElement("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500"},"Perfiles"),React.createElement("p",{className:"text-2xl font-black italic text-white mt-1"},q2)))),g!=="PERSONAJE"&&jZ&&!iJ?React.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"},hJ.map((J)=>React.createElement("button",{key:J.id,type:"button",onClick:()=>{RQ(J),JJ(null)},className:"group text-left theme-surface-card border theme-border-secondary rounded-[1.4rem] overflow-hidden hover:border-[color:color-mix(in_srgb,var(--metal-gold)_40%,transparent)] hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition-all duration-500"},React.createElement("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden"},J.fotoPerfil?React.createElement("img",{src:qJ(J.fotoPerfil,"https://via.placeholder.com/400x500"),alt:`Portada ${J.nombre}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100",onError:SJ}):React.createElement("div",{className:"w-full h-full flex items-center justify-center text-slate-500"},React.createElement(o,{name:"image-off",size:34})),React.createElement("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent"}),React.createElement("div",{className:"absolute inset-x-0 bottom-0 p-5"},React.createElement("p",{className:"text-xl font-black italic text-white tracking-tighter leading-none"},J.nombre),React.createElement("p",{className:"text-[10px] font-black uppercase tracking-widest text-[var(--metal-gold)] mt-2"},J.profesion||"Perfil"),React.createElement("div",{className:"mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border theme-border-secondary bg-slate-950/85 text-[9px] font-black uppercase tracking-[0.2em] text-slate-200"},J.photos.length," archivos")))))):React.createElement(React.Fragment,null,g!=="PERSONAJE"&&jZ&&React.createElement("div",{className:"flex items-center gap-3"},React.createElement("button",{type:"button",onClick:()=>{RQ(null),JJ(null)},className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] text-slate-900"},React.createElement(o,{name:"arrow-left",size:14}),"Volver al índice")),g==="PERSONAJE"&&React.createElement("div",{className:"space-y-4"},React.createElement("div",{className:"flex flex-col lg:flex-row lg:items-center gap-3"},React.createElement("label",{htmlFor:"galleryCharacterSelector",className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300"},"Selector de personajes"),React.createElement("select",{id:"galleryCharacterSelector",className:"filter-select max-w-lg",value:"",onChange:(J)=>F2(J.target.value)},React.createElement("option",{value:"",disabled:!0},a0.length?"Seleccionar personaje…":"No hay más personajes disponibles"),a0.map((J)=>React.createElement("option",{key:J.id,value:J.id},J.nombre," · ",J.photos.length," archivos")))),GJ.length>0?React.createElement("div",{className:"flex flex-wrap gap-2"},GJ.map((J)=>React.createElement("button",{key:J.id,type:"button",onClick:()=>L2(J.id),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] text-slate-900",title:"Quitar personaje de la galería visible"},J.nombre,React.createElement(o,{name:"x",size:12})))):React.createElement("p",{className:"text-xs text-slate-400"},"Seleccioná uno o más personajes para mostrar su multimedia en la galería.")),g==="ETIQUETA"&&React.createElement("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4"},$J.map((J)=>React.createElement("button",{key:J,onClick:()=>E2(J),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:EZ(J,JQ.includes(J))},J," · ",(gZ[J]||[]).length))),g==="PERSONAJE"&&React.createElement("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4"},React.createElement("button",{onClick:()=>TZ("INICIAL"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:EZ("INICIAL",vJ==="INICIAL")},"Inicial"),$J.map((J)=>{return React.createElement("button",{key:J,onClick:()=>TZ(J),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:EZ(J,vJ===J)},J," · ",_2[J]||0)}),React.createElement("button",{onClick:()=>TZ("100"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:EZ("100",vJ==="100")},"100%")),React.createElement("div",{className:"flex flex-wrap items-center gap-3"},React.createElement("button",{type:"button",onClick:()=>J1(0,{autoplay:!0,fromGeneralPlay:!0}),disabled:!m.length,className:"btn-metal btn-metal--gold inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] disabled:opacity-40 disabled:cursor-not-allowed"},React.createElement(o,{name:"play",size:14}),"Play ",iJ?.nombre||_Z),React.createElement("button",{type:"button",onClick:V2,disabled:F0||!m.length,className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed",title:"Descargar toda la multimedia visible en un ZIP"},React.createElement(o,{name:"download",size:14}),F0?"Generando ZIP...":"DESCARGAR TODO"),React.createElement("button",{type:"button",onClick:()=>c1((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${wZ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,title:"Música de galería"},"\uD83C\uDFB5"),IJ.length>0&&React.createElement(React.Fragment,null,React.createElement("select",{className:"filter-select min-w-[180px]",value:dQ,onChange:(J)=>m0(J.target.value)},React.createElement("option",{value:""},"Audio principal"),IJ.map((J,Q)=>React.createElement("option",{key:`${J.url}-${Q}`,value:J.url},J.nombre))),React.createElement("select",{className:"filter-select min-w-[180px]",value:nQ,onChange:(J)=>y0(J.target.value)},React.createElement("option",{value:""},"Audio secundario (opcional)"),IJ.map((J,Q)=>React.createElement("option",{key:`${J.url}-b-${Q}`,value:J.url},J.nombre)))),React.createElement("div",{className:"inline-flex items-center gap-2 rounded-full border theme-border-secondary bg-slate-950/80 px-3 py-2"},React.createElement("label",{htmlFor:"galleryPlaybackSeconds",className:"text-[10px] font-black uppercase tracking-[0.15em] text-slate-300"},"Duración"),React.createElement("select",{id:"galleryPlaybackSeconds",className:"filter-select",value:NZ,onChange:(J)=>h1(Number(J.target.value))},[3,5,7,10].map((J)=>React.createElement("option",{key:J,value:J},J," segundos"))))),m.length===0?React.createElement("div",{className:"py-24 border border-dashed theme-border-secondary rounded-2xl text-center bg-slate-950/30"},React.createElement("div",{className:"w-20 h-20 rounded-full bg-slate-900 border theme-border-secondary flex items-center justify-center mx-auto mb-6"},React.createElement(o,{name:"image-off",size:28,className:"text-slate-600"})),React.createElement("h3",{className:"font-title text-xl font-black italic text-white tracking-[0.06em]"},"No hay archivos para mostrar"),React.createElement("p",{className:"font-title text-xs font-medium text-slate-500 tracking-[0.06em] mt-3"},g==="ETIQUETA"&&JQ.length===0?"Seleccioná una o más etiquetas para ver multimedia.":"Probá con otra etiqueta o quitá el filtro por etiqueta.")):React.createElement(React.Fragment,null,React.createElement("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"},hZ.map((J,Q)=>{let Z=tJ(J.label),$=xQ(J.profesion);return React.createElement("button",{key:J.id,type:"button",onClick:()=>J1(Q),className:"group text-left theme-surface-card border rounded-[1.4rem] overflow-hidden transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[var(--glow-gold)] focus:ring-offset-2 focus:ring-offset-[#020617]",style:{borderColor:`color-mix(in srgb, ${$.glowColor} 72%, rgba(148,163,184,0.48) 28%)`,boxShadow:`inset 0 -30px 70px color-mix(in srgb, ${$.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${$.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${$.glowColor} 35%, transparent)`},onMouseEnter:(X)=>{X.currentTarget.style.transform="translateY(-2px) scale(1.01)",X.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${$.baseColor} 20%, transparent), 0 0 26px color-mix(in srgb, ${$.glowColor} 76%, transparent), 0 0 58px color-mix(in srgb, ${$.glowColor} 52%, transparent)`},onMouseLeave:(X)=>{X.currentTarget.style.transform="translateY(0) scale(1)",X.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${$.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${$.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${$.glowColor} 35%, transparent)`}},React.createElement("div",{className:"aspect-[3/4] relative overflow-hidden bg-slate-950"},J.type==="video"?(()=>{let X=FQ(J.url);if(X)return React.createElement("div",{className:"w-full h-full bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.3),_rgba(15,23,42,0.95))] flex flex-col items-center justify-center gap-4 p-6 text-center"},React.createElement("div",{className:"w-16 h-16 rounded-full border border-[var(--metal-gold)]/40 bg-slate-950/70 flex items-center justify-center text-[color:color-mix(in_srgb,var(--metal-gold)_72%,white)] text-2xl"},"▶"),React.createElement("div",null,React.createElement("p",{className:"font-title text-sm font-semibold tracking-[0.1em] text-white"},"Video"),React.createElement("p",{className:"font-title text-[10px] font-medium tracking-[0.08em] text-slate-400 mt-2"},X.provider)));return React.createElement("video",{src:J.url,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",muted:!0,playsInline:!0,preload:"none"})})():React.createElement("img",{src:qJ(J.url,OQ),alt:`${J.nombre} - ${J.label||"galería"}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",onError:SJ,loading:"lazy",decoding:"async"}),React.createElement("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-cyan-950/40 via-transparent to-transparent"}),React.createElement("div",{className:"absolute top-3 right-3 min-w-[32px] h-[32px] px-2 rounded-xl border flex items-center justify-center text-[10px] font-black uppercase shadow-xl z-20",style:{background:Z.bg,borderColor:Z.border,color:Z.text,boxShadow:`0 0 10px ${Z.glow}, 0 0 24px color-mix(in srgb, ${Z.glow} 48%, transparent)`},title:`Etiqueta ${J.label||"sin etiqueta"}`},J.label||"—"),React.createElement("div",{className:"absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent"},React.createElement("div",{className:"flex items-end justify-between gap-3"},React.createElement("div",{className:"min-w-0 flex-1"},React.createElement("p",{className:"text-xs sm:text-sm font-black italic text-white tracking-tight leading-none truncate",title:J.nombre},J.nombre),J.autor?React.createElement("p",{className:"text-[10px] font-semibold text-slate-300 mt-1 truncate",title:J.autor},"Autor: ",J.autor):null),React.createElement("div",{className:"px-2 py-[2px] rounded-full border theme-border-secondary bg-slate-950/85 text-[7px] font-black uppercase tracking-[0.18em] text-slate-200 shrink-0"},J.type==="video"?"VIDEO":J.isGif?"GIF":"IMG")))))})),j2&&React.createElement("div",{className:"flex justify-center mt-8"},React.createElement("button",{type:"button",onClick:()=>O0((J)=>J+20),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-6 py-3 rounded-full text-[10px] text-slate-900"},"Cargar más (",hZ.length,"/",m.length,")")))),React.createElement("audio",{ref:zQ,loop:!0,preload:"none"}),React.createElement("audio",{ref:NQ,loop:!0,preload:"none"}),S&&React.createElement("div",{ref:tQ,className:"gallery-viewer-overlay fixed top-0 bottom-0 z-[260] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-0",style:AJ?{left:"18rem",width:"calc(100vw - 18rem)"}:{left:0,width:"100vw"},onClick:Q1},React.createElement("button",{type:"button",onClick:Q1,className:`btn-metal btn-metal--danger absolute ${KJ?"top-2 right-2 sm:top-3 sm:right-3 w-10 h-10":"top-4 right-4 sm:top-6 sm:right-6 w-12 h-12"} rounded-full flex items-center justify-center`,"aria-label":"Cerrar visor"},React.createElement("span",{className:"text-[26px] leading-none font-black"},"✕")),React.createElement("div",{className:`gallery-viewer-shell w-screen h-screen max-h-screen flex flex-col ${KJ?"gap-1 px-1 py-1 sm:px-2 sm:py-2":"gap-4 px-3 py-3 sm:px-6 sm:py-6"}`,onClick:(J)=>J.stopPropagation()},!KJ&&React.createElement("div",{className:"flex items-center justify-between gap-4 px-1 sm:px-2"},React.createElement("div",null,React.createElement("p",{className:"text-2xl sm:text-3xl font-black italic text-white tracking-tighter"},S.nombre),React.createElement("p",{className:"text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[var(--metal-gold)] mt-2"},S.profesion,S.nacionalidad?` · ${S.nacionalidad}`:""),S.autor?React.createElement("p",{className:"text-[11px] sm:text-xs font-semibold text-slate-300 mt-2"},"Autor: ",S.autor):null),React.createElement("div",{className:"flex items-center gap-3"},m.length>1&&React.createElement(React.Fragment,null,React.createElement("button",{type:"button",onClick:()=>TQ((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${MJ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":MJ?"Pausar reproducción":"Reproducir"},"▶️"),React.createElement("button",{type:"button",onClick:()=>zZ((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${bJ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":bJ?"Aleatorio activado":"Aleatorio desactivado"},"\uD83D\uDD00")),React.createElement("div",{className:"px-3 py-2 rounded-full border theme-border-secondary bg-slate-950/85 text-[10px] font-black uppercase tracking-[0.3em] text-slate-200"},S.type==="video"?"VIDEO":S.isGif?"GIF":"IMG"),React.createElement("div",{className:"min-w-[52px] h-[52px] rounded-2xl border flex items-center justify-center text-base font-black uppercase shadow-xl",style:{background:tJ(S.label).bg,borderColor:tJ(S.label).border,color:tJ(S.label).text,boxShadow:`0 0 20px ${tJ(S.label).glow}`}},S.label||"—"))),React.createElement("div",{className:`gallery-viewer-media-wrap relative flex-1 min-h-0 overflow-hidden bg-black/50 ${KJ?"rounded-xl md:rounded-2xl":"md:rounded-[2rem] md:border theme-border-secondary"}`},S.type==="video"?(()=>{let J=FQ(S.url);if(J)return React.createElement("iframe",{ref:PZ,src:J.src,title:`${S.nombre} video`,className:`w-full ${KJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} bg-black`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0});return React.createElement("video",{ref:PZ,src:S.url,controls:!0,playsInline:!0,muted:mZ,autoPlay:MJ,onEnded:()=>{if(MJ&&m.length>1)KQ()},onError:()=>{if(m.length>1)KQ()},className:`w-full ${KJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} object-contain bg-black`})})():React.createElement("img",{src:qJ(S.url,OQ),alt:`${S.nombre} - ${S.label||"galería"}`,ref:PZ,className:`w-full ${KJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} object-contain bg-black`,onError:(J)=>{if(SJ(J),m.length>1)KQ()}}),m.length>1&&React.createElement(React.Fragment,null,KJ?React.createElement("div",{className:"absolute left-1/2 bottom-3 sm:bottom-4 -translate-x-1/2 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_40%,rgba(148,163,184,0.45))] bg-slate-950/85 backdrop-blur-md shadow-[0_0_18px_rgba(15,23,42,0.65)]"},React.createElement("button",{type:"button",onClick:(J)=>{J.stopPropagation(),zZ((Q)=>!Q)},className:`px-3 sm:px-4 h-10 rounded-full border text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] transition-all ${bJ?"border-[var(--metal-gold)] text-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_28%,rgba(2,6,23,0.9))]":"theme-border-secondary text-slate-200 bg-slate-900/90"}`,"aria-label":bJ?"Aleatorio activado":"Aleatorio desactivado"},bJ?"Random On":"Random Off"),React.createElement("button",{type:"button",onClick:(J)=>{J.stopPropagation(),TQ((Q)=>!Q)},className:`px-4 sm:px-5 h-10 rounded-full border text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] transition-all ${MJ?"border-[var(--metal-gold)] text-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_28%,rgba(2,6,23,0.9))]":"theme-border-secondary text-slate-200 bg-slate-900/90"}`,"aria-label":MJ?"Pausar reproducción":"Reproducir"},MJ?"Pause":"Play"),React.createElement("button",{type:"button",onClick:(J)=>{J.stopPropagation(),KQ()},className:"w-10 h-10 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-xl","aria-label":"Foto siguiente"},"➡️")):React.createElement("button",{type:"button",onClick:(J)=>{J.stopPropagation(),KQ()},className:"absolute right-4 bottom-4 sm:right-6 sm:bottom-6 w-12 h-12 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-2xl","aria-label":"Foto siguiente"},"➡️"))),!KJ&&React.createElement("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1 sm:px-2"},React.createElement("p",{className:"text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400"},TJ+1," de ",m.length," archivos visibles"),React.createElement("div",{className:"flex items-center justify-start sm:justify-end gap-2"},E0?React.createElement(React.Fragment,null,React.createElement("input",{type:"url",value:U0,onChange:(J)=>fQ(J.target.value),placeholder:"https://...",className:"min-w-[260px] bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold tracking-[0.04em] text-white focus:outline-none focus:border-[var(--metal-gold)]"}),React.createElement("select",{value:V0,onChange:(J)=>uQ(J.target.value),className:"bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white focus:outline-none focus:border-[var(--metal-gold)]"},React.createElement("option",{value:""},"Sin etiqueta"),$J.map((J)=>React.createElement("option",{key:J,value:J},J))),React.createElement("button",{type:"button",onClick:U2,disabled:C0,className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--metal-gold)] hover:border-[var(--metal-gold)] transition-all"},C0?"Guardando...":"Guardar"),React.createElement("button",{type:"button",onClick:()=>{uQ(S?.label||""),fQ(S?.url||""),cJ(""),QQ(!1)},className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-slate-300 hover:text-white transition-all"},"Cancelar")):React.createElement("button",{type:"button",onClick:()=>QQ(!0),className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.16em] text-slate-300 hover:border-[var(--metal-gold)] hover:text-[var(--metal-gold)] transition-all","aria-label":"Editar etiqueta de la multimedia"},React.createElement("span",{className:"text-xs leading-none"},"✏️"),React.createElement("span",null,S?.label||"Sin etiqueta")),E0&&D0&&React.createElement("p",{className:"text-[10px] font-bold tracking-[0.04em] text-rose-300"},D0))))),GZ&&React.createElement("div",{className:"fixed inset-0 z-[130] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6",style:AJ?{left:"18rem"}:void 0,onClick:()=>kZ(!1)},React.createElement("div",{className:"w-full max-w-[1200px] max-h-full theme-surface-card border theme-border-secondary rounded-[2rem] p-4 sm:p-6 overflow-hidden",onClick:(J)=>J.stopPropagation()},React.createElement("div",{className:"flex items-center justify-between gap-4 mb-5"},React.createElement("div",null,React.createElement("p",{className:"text-2xl font-black italic text-white tracking-tighter"},"Fotos rotas"),React.createElement("p",{className:"text-[10px] font-black uppercase tracking-[0.25em] text-[var(--metal-gold)] mt-2"},kJ.length," enlace",kJ.length===1?"":"s"," sin vista")),React.createElement("button",{type:"button",onClick:()=>kZ(!1),className:"btn-metal btn-metal--danger w-11 h-11 rounded-full flex items-center justify-center","aria-label":"Cerrar revisión de fotos rotas"},React.createElement("span",{className:"text-xl font-black leading-none"},"✕"))),React.createElement("div",{className:"max-h-[70vh] overflow-y-auto pr-1 space-y-6"},!r0.length?React.createElement("div",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-6 text-center"},React.createElement("p",{className:"text-sm font-semibold text-white"},"No se detectaron fotos rotas ahora mismo.")):r0.map((J)=>React.createElement("section",{key:J.id,className:"theme-surface-soft rounded-2xl border theme-border-secondary p-4 sm:p-5"},React.createElement("div",{className:"mb-4"},React.createElement("p",{className:"text-lg font-black italic text-white tracking-tight"},J.nombre),React.createElement("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 mt-1"},J.profesion,J.nacionalidad?` · ${J.nacionalidad}`:"")),React.createElement("div",{className:"space-y-3"},J.fotos.map((Q)=>{let Z=!!n1[Q.id],$=!!p1[Q.id],X=xZ[Q.id]??Q.url;return React.createElement("article",{key:Q.id,className:"grid grid-cols-1 xl:grid-cols-[76px_minmax(0,1fr)_auto] gap-3 p-3 rounded-xl border theme-border-secondary bg-slate-950/40"},React.createElement("div",{className:"w-[76px] h-[76px] rounded-lg overflow-hidden border theme-border-secondary bg-slate-900 flex items-center justify-center"},React.createElement("img",{src:OQ,alt:"Vista previa rota",className:"w-full h-full object-cover"})),React.createElement("div",{className:"space-y-2 min-w-0"},React.createElement("div",{className:"flex flex-wrap items-center gap-2"},React.createElement("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-200"},"Etiqueta: ",Q.label||"Sin etiqueta"),React.createElement("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-400"},Q.sourceTag)),React.createElement("input",{type:"url",value:X,onChange:(Y)=>D2(Q.id,Y.target.value),placeholder:"https://...",readOnly:!$,className:`w-full min-w-0 bg-slate-900 border theme-border-secondary rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--metal-gold)] ${!$?"opacity-80 cursor-default":""}`})),React.createElement("div",{className:"flex flex-wrap xl:flex-col gap-2 xl:justify-center"},React.createElement("button",{type:"button",onClick:()=>C2(Q),className:"btn-metal btn-metal--silver px-3 py-2 rounded-xl text-[10px]"},"Ir al enlace"),React.createElement("button",{type:"button",onClick:()=>Z1(Q.id,!0),disabled:Z,className:"btn-metal px-3 py-2 rounded-xl text-[10px] disabled:opacity-60"},"Editar enlace"),React.createElement("button",{type:"button",onClick:()=>R2(Q),disabled:Z,className:"btn-metal btn-metal--gold px-3 py-2 rounded-xl text-[10px] disabled:opacity-60"},"Guardar enlace"),React.createElement("button",{type:"button",onClick:()=>B2(Q),disabled:Z,className:"btn-metal btn-metal--danger px-3 py-2 rounded-xl text-[10px] disabled:opacity-60"},"Eliminar")))})))))))),V==="BATALLAS"&&!ZJ&&!G&&React.createElement("div",{className:"space-y-10 animate-in fade-in duration-500"},React.createElement("div",{className:"flex flex-col gap-4"},React.createElement("div",{className:"flex flex-wrap items-center gap-3"},React.createElement("button",{onClick:g2,className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all"},"Resetear calificaciones"),React.createElement("button",{onClick:()=>G1((J)=>!J),className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all"},"Resetear item")),w1&&React.createElement("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 flex flex-wrap items-center gap-3"},React.createElement("select",{value:Q0,onChange:(J)=>k1(J.target.value),className:"bg-slate-900 border theme-border-secondary rounded-xl px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white"},tZ.map((J)=>React.createElement("option",{key:J,value:J},J))),React.createElement("button",{onClick:()=>h2(Q0,K,c),className:"solid-metal-ui px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",disabled:!K},"Confirmar reset item")),React.createElement("div",null,React.createElement("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter"},"Arenas"),React.createElement("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1"},!K?"Paso 1: elegí un modo de enfrentamiento":FZ&&!c?`Paso 2: elegí una opción de ${jQ(K)}`:`Paso 3: elegí uno de los 15 ítems · Modo: ${jQ(K)}`))),!K&&React.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"},J0.map((J)=>React.createElement("button",{key:J.id,onClick:()=>{VJ(J.id),NJ(J.id==="GENERAL"?"all":""),P(null)},className:"solid-metal-ui battle-mode-card battle-mode-card--mode border rounded-2xl p-4 text-left transition-all"},React.createElement("p",{className:"text-[10px] font-black uppercase tracking-[0.28em] text-slate-500"},"Modo"),React.createElement("h3",{className:"font-black italic text-white mt-2"},J.label),React.createElement("p",{className:"text-xs text-slate-300 mt-2"},J.description)))),K&&React.createElement("div",{className:"space-y-4"},React.createElement("div",{className:"flex flex-wrap items-center gap-3"},React.createElement("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-slate-300"},"Modo: ",jQ(K)),React.createElement("button",{onClick:()=>{VJ(null),NJ(""),P(null)},className:"solid-metal-ui inline-flex items-center gap-2 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all"},"Cambiar modo")),FZ&&React.createElement("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 space-y-3"},React.createElement("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300"},"Elegí una opción de ",jQ(K)),React.createElement("div",{className:"flex flex-wrap gap-2"},y2.map((J)=>React.createElement("button",{key:J.key,onClick:()=>{NJ(J.key),P(null)},className:`solid-metal-ui px-3 py-2 rounded-xl border text-[10px] font-black uppercase tracking-[0.14em] transition-all ${c===J.key?"border-[var(--metal-gold)] text-white":"theme-border-secondary text-slate-200"}`},J.label," ",React.createElement("span",{className:"text-slate-400"},"(",J.ids.length,")"))))),!eJ&&React.createElement("p",{className:"text-xs text-slate-400"},"Cargando historial de batallas..."),eJ&&FZ&&!c&&React.createElement("p",{className:"text-xs text-slate-400"},"Seleccioná una opción para habilitar las batallas."),React.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"},tZ.map((J)=>{let Q=HQ(J,K,c),Z=Boolean(_J?.[Q]?.isFinished);return React.createElement("button",{key:J,disabled:!eJ||FZ&&!c,onClick:()=>{if(P(J),!_J[Q])W1(J,K,c)},className:`solid-metal-ui battle-mode-card battle-mode-card--arena border rounded-2xl p-4 text-left transition-all disabled:opacity-45 disabled:cursor-not-allowed ${Z?"battle-mode-card--completed":""}`},React.createElement("p",{className:`text-[10px] font-black uppercase tracking-[0.28em] ${Z?"text-emerald-100/90":"text-slate-500"}`},"Item"),React.createElement("h3",{className:"font-black italic text-white mt-2"},J),Z&&React.createElement("p",{className:"battle-mode-card__status mt-4"},"Completada"))}),"                    "))),V==="BATALLAS"&&G&&(()=>{let J=HQ(G,K,c),Q=_J[J],Z=F.find((O)=>O.firebaseId===Q?.championId),$=F.find((O)=>O.firebaseId===Q?.challengerId),X=Z?_1(G,Z.firebaseId):null,Y=$?_1(G,$.firebaseId):null;return React.createElement("div",{className:"space-y-8 animate-in fade-in duration-500"},React.createElement("div",{className:"bg-slate-900/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border theme-border-secondary space-y-4"},React.createElement("div",{className:"flex flex-wrap items-center gap-3"},React.createElement("button",{onClick:()=>P(null),className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all"},React.createElement("i",{"data-lucide":"arrow-left",className:"w-4 h-4"}),"Volver a arenas"),React.createElement("button",{onClick:()=>{P(null),VJ(null),NJ("")},className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all"},React.createElement("i",{"data-lucide":"refresh-ccw",className:"w-4 h-4"}),"Cambiar modo"),React.createElement("button",{onClick:()=>x1((O)=>!O),className:"solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all"},"Resetear una batalla")),S1&&React.createElement("div",{className:"theme-surface-card border border-red-400/30 rounded-2xl p-4 mt-3"},(()=>{let O=Object.keys(Q?.matchups||{}).filter((_)=>!!Q?.matchups?.[_]);if(!Q||!O.length)return React.createElement("p",{className:"text-xs text-red-200 font-bold uppercase tracking-[0.12em]"},"No hay cruces jugados para resetear.");return React.createElement("div",{className:"space-y-2"},React.createElement("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-red-200"},"Elegí el cruce a deshacer:"),O.map((_)=>{let[H,q]=_.split("__"),L=F.find((N)=>N.firebaseId===H),R=F.find((N)=>N.firebaseId===q),D=L?.nombre||H,x=R?.nombre||q;return React.createElement("button",{key:_,onClick:()=>F1(G,H,q,K,c),className:"metal-btn-3d w-full text-left px-3 py-2 rounded-xl border theme-border-secondary bg-slate-900/60 hover:border-red-300/70 transition-all"},React.createElement("span",{className:"text-xs text-white font-semibold"},D," vs ",x))}))})()),React.createElement("div",{className:"min-w-0"},React.createElement("h2",{className:"font-title text-2xl sm:text-3xl lg:text-4xl font-black italic text-white tracking-[0.08em] break-words leading-tight"},G),React.createElement("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mt-1"},"Arena activa · Modo: ",jQ(K)),Q?.activeGroupLabel&&React.createElement("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[var(--metal-gold)] mt-2"},Q.activeGroupLabel))),eJ&&!Q&&React.createElement("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center"},React.createElement("p",{className:"text-sm text-slate-300"},"Presioná para iniciar esta arena."),React.createElement("button",{onClick:()=>W1(G,K,c),className:"metal-btn-3d mt-4 bg-[var(--metal-bronze)] text-white px-5 py-3 rounded-xl font-black uppercase text-xs tracking-[0.2em]"},"Iniciar batallas")),Q&&Q.isFinished&&React.createElement("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center"},React.createElement("h3",{className:"text-2xl font-black italic text-white"},"Arena completada"),React.createElement("p",{className:"text-slate-400 mt-2"},"No quedan combates nuevos para este item.")),Q&&Z&&$&&!Q.isFinished&&React.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"},React.createElement("button",{onClick:()=>O1(G,Z.firebaseId,K,c),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":xQ(Z.profesion).baseColor}},React.createElement("img",{src:B1(Z,G),alt:Z.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:SJ}),React.createElement("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500"},"Versus"),React.createElement("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2"},Z.nombre),G==="Estatura"&&React.createElement("p",{className:"text-xs text-slate-200 mt-2"},"Altura: ",$1(Z)),React.createElement("p",{className:"text-xs text-[var(--metal-gold)] mt-3"},"Victorias: ",X?.wins||0," · Batallas: ",X?.battles||0),React.createElement("p",{className:"text-xs text-white/80 mt-1"},"Puntaje final: ",X?.score||0)),React.createElement("div",{className:"flex flex-col items-center justify-center text-center"},React.createElement("div",{className:"font-title text-4xl text-[var(--metal-gold)] font-black"},"VS"),G==="Estatura"&&React.createElement("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300 mt-3"},"Compará altura en cm")),React.createElement("button",{onClick:()=>O1(G,$.firebaseId,K,c),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":xQ($.profesion).baseColor}},React.createElement("img",{src:B1($,G),alt:$.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:SJ}),React.createElement("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500"},"Versus"),React.createElement("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2"},$.nombre),G==="Estatura"&&React.createElement("p",{className:"text-xs text-slate-200 mt-2"},"Altura: ",$1($)),React.createElement("p",{className:"text-xs text-[var(--metal-gold)] mt-3"},"Victorias: ",Y?.wins||0," · Batallas: ",Y?.battles||0),React.createElement("p",{className:"text-xs text-white/80 mt-1"},"Puntaje final: ",Y?.score||0))))})(),V==="RANKING"&&!ZJ&&React.createElement("div",{className:"theme-surface-card rounded-2xl gothic-frame gothic-frame--ornate animate-in zoom-in-95 duration-500 ranking-table-shell"},React.createElement("div",{className:"ranking-table-toolbar"},React.createElement("button",{type:"button",onClick:()=>I1((J)=>!J),className:`ranking-toggle-totality ${RZ?"is-active":"is-inactive"}`},"Ver totalidad")),React.createElement("div",{className:"ranking-table-scroll"},React.createElement("table",{className:`w-full ${pZ?"min-w-[860px] xl:min-w-[980px]":"min-w-[700px] xl:min-w-[820px]"} text-left border-collapse`},React.createElement("thead",{className:"theme-surface-soft"},React.createElement("tr",null,React.createElement("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text"},"#"),React.createElement("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest rock-carved-text"},React.createElement("button",{type:"button",onClick:()=>YQ("nombre","asc"),className:"inline-flex items-center gap-1 hover:text-[var(--metal-gold)] transition-colors"},"Perfil ",YJ==="nombre"?fJ==="asc"?"↑":"↓":"")),React.createElement("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text"},React.createElement("button",{type:"button",onClick:()=>YQ("Rostro","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors"},"Rostro ",YJ==="Rostro"?fJ==="asc"?"↑":"↓":"")),React.createElement("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text"},React.createElement("button",{type:"button",onClick:()=>YQ("Cuerpo","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors"},"Cuerpo ",YJ==="Cuerpo"?fJ==="asc"?"↑":"↓":"")),React.createElement("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text"},React.createElement("button",{type:"button",onClick:()=>YQ("Actitud","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors"},"Actitud ",YJ==="Actitud"?fJ==="asc"?"↑":"↓":"")),pZ&&React.createElement(React.Fragment,null,React.createElement("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text"},React.createElement("button",{type:"button",onClick:()=>YQ("nacionalidad","asc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors"},"Ubicación ",YJ==="nacionalidad"?fJ==="asc"?"↑":"↓":"")),React.createElement("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text"},React.createElement("button",{type:"button",onClick:()=>YQ("edad","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors"},"Edad ",YJ==="edad"?fJ==="asc"?"↑":"↓":""))),React.createElement("th",{className:"px-8 py-6 text-right"},React.createElement("div",{className:"flex flex-col items-end gap-1"},React.createElement("span",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest"},"Ordenar por"),React.createElement("select",{value:YJ,onChange:(J)=>{_0(J.target.value),CZ("desc")},className:"bg-slate-900 border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] text-[var(--metal-gold)] text-[10px] font-black uppercase py-1 px-2 rounded-lg outline-none cursor-pointer hover:border-cyan-500 transition-all"},React.createElement("option",{value:"promedio"},"G2 SCORE TOTAL (PROMEDIO)"),React.createElement("optgroup",{label:"Categorías Principales",className:"theme-surface-card text-slate-500"},React.createElement("option",{value:"Rostro"},"Rostro (Mix)"),React.createElement("option",{value:"Cuerpo"},"Cuerpo (Mix)"),React.createElement("option",{value:"Actitud"},"Actitud (Mix)")),React.createElement("optgroup",{label:"Atributos Específicos",className:"theme-surface-card text-slate-500"},oJ.map((J)=>React.createElement("option",{key:J,value:J},J)))))))),React.createElement("tbody",null,s2.map((J,Q)=>React.createElement("tr",{key:J.firebaseId||J.id,onClick:()=>QZ(J),className:`cursor-pointer border-b border-slate-700/70 last:border-0 transition-all duration-300 group ${Q===0?"podium-1":Q===1?"podium-2":Q===2?"podium-3":"hover:bg-white/5"}`},React.createElement("td",{className:"px-8 py-5"},React.createElement("span",{className:`font-black italic rock-carved-text ${Q===0?"text-gold text-4xl":Q===1?"text-silver text-3xl":Q===2?"text-bronze text-2xl":"text-slate-600 text-lg"}`},"#",Q+1)),React.createElement("td",{className:"px-8 py-5"},React.createElement("div",{className:"flex items-center gap-4"},React.createElement("div",{className:"w-14 h-14 rounded-xl border-2 p-0.5 transition-all duration-500",style:{borderColor:XJ(J.profesion).color,boxShadow:`0 0 10px ${XJ(J.profesion).sombra}`}},React.createElement("img",{src:qJ(J.fotos?.[0],"https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:SJ})),React.createElement("div",null,React.createElement("p",{className:"font-title font-black text-white text-sm tracking-[0.06em] rock-carved-text"},J.nombre),React.createElement("p",{className:"font-title text-[10px] font-medium tracking-[0.06em] rock-carved-text"},J.profesion)))),React.createElement("td",{className:"px-4 py-5 text-center"},React.createElement("button",{type:"button",onClick:(Z)=>{Z.stopPropagation(),CQ({isOpen:!0,profile:J,category:"Rostro"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Rostro de ${J.nombre}`},$Z(J).toFixed(0))),React.createElement("td",{className:"px-4 py-5 text-center"},React.createElement("button",{type:"button",onClick:(Z)=>{Z.stopPropagation(),CQ({isOpen:!0,profile:J,category:"Cuerpo"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Cuerpo de ${J.nombre}`},XZ(J).toFixed(0))),React.createElement("td",{className:"px-4 py-5 text-center"},React.createElement("button",{type:"button",onClick:(Z)=>{Z.stopPropagation(),CQ({isOpen:!0,profile:J,category:"Actitud"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Actitud de ${J.nombre}`},YZ(J).toFixed(0))),pZ&&React.createElement(React.Fragment,null,React.createElement("td",{className:"px-4 py-5 text-center"},React.createElement("p",{className:"text-[10px] font-bold text-slate-300 uppercase leading-none"},J.nacionalidad),React.createElement("p",{className:"text-[8px] font-black text-[var(--metal-gold)]/70 uppercase tracking-tighter"},J.ciudad)),React.createElement("td",{className:"px-4 py-5 text-center font-bold text-[10px] text-slate-400"},gJ(J.fechaNacimiento)," AÑOS")),React.createElement("td",{className:"px-8 py-5 text-right"},React.createElement("div",{className:`inline-block bg-slate-900 border px-4 py-2 rounded-xl transition-all duration-300 ${Q===0?"border-[#ffd700]/50 shadow-[0_0_15px_rgba(255,215,0,0.3)]":Q===1?"border-[#c0c0c0]/50 shadow-[0_0_15px_rgba(192,192,192,0.3)]":Q===2?"border-[#cd7f32]/50 shadow-[0_0_15px_rgba(205,127,50,0.3)]":"theme-border-secondary group-hover:border-[color:color-mix(in_srgb,var(--metal-gold)_50%,transparent)]"}`},React.createElement("span",{className:`font-black leading-none ${Q===0?"text-gold":Q===1?"text-silver":Q===2?"text-bronze":"text-[var(--metal-gold)] text-lg"}`},u2(J))))))))),BJ.isOpen&&BJ.profile&&BJ.category&&(()=>{let J=f2(BJ.profile.firebaseId,BJ.category),Q=pJ[BJ.category]||[];return React.createElement("div",{className:`fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 ${AJ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>{CQ({isOpen:!1,profile:null,category:null}),LQ(null)}},React.createElement("div",{className:"w-full max-w-3xl max-h-[90vh] overflow-y-auto themed-scrollbar theme-surface-card border theme-border-secondary rounded-2xl p-6",onClick:(Z)=>Z.stopPropagation()},React.createElement("div",{className:"flex items-start justify-between gap-4 mb-6"},React.createElement("div",null,React.createElement("h3",{className:"font-title text-xl font-black text-white tracking-wide"},BJ.profile.nombre," · ",BJ.category),React.createElement("p",{className:"text-xs text-slate-300 mt-1"},"Detalle de enfrentamientos ganados y perdidos.")),React.createElement("button",{type:"button",onClick:()=>{CQ({isOpen:!1,profile:null,category:null}),LQ(null)},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black"},"Cerrar")),React.createElement("div",{className:"mb-4"},React.createElement("p",{className:"text-[10px] uppercase tracking-[0.18em] text-slate-400 font-black mb-2"},"Detalle por ítem"),React.createElement("div",{className:"flex flex-wrap gap-2"},Q.map((Z)=>(()=>{let $=c2(BJ.profile.firebaseId,Z);return React.createElement("button",{key:`breakdown-item-${Z}`,type:"button",onClick:()=>{let X=dZ(BJ.profile.firebaseId,Z);LQ(X)},className:"btn-metal btn-metal--bronze px-3 py-2 rounded-lg text-[10px] font-black min-w-[10.5rem] text-left"},React.createElement("p",{className:"leading-none"},Z),React.createElement("p",{className:"mt-1 text-[9px] font-semibold text-slate-200/90 tracking-[0.01em] normal-case"},$.wins,"/",$.total," · ",$.winRate.toFixed(0),"% victorias"))})()))),!bQ?.arenaName&&React.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4"},React.createElement("div",{className:"rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-4 min-h-44"},React.createElement("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300 mb-3"},"Ganó contra"),J.wins.length?React.createElement("ul",{className:"space-y-2"},J.wins.map((Z,$)=>React.createElement("li",{key:`win-${Z}-${$}`,className:"text-sm text-emerald-200 font-semibold"},Z))):React.createElement("p",{className:"text-xs text-emerald-200/70"},"No hay batallas ganadas registradas.")),React.createElement("div",{className:"rounded-xl border border-rose-500/40 bg-rose-950/20 p-4 min-h-44"},React.createElement("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-rose-300 mb-3"},"Perdió contra"),J.losses.length?React.createElement("ul",{className:"space-y-2"},J.losses.map((Z,$)=>React.createElement("li",{key:`loss-${Z}-${$}`,className:"text-sm text-rose-200 font-semibold"},Z))):React.createElement("p",{className:"text-xs text-rose-200/70"},"No hay batallas perdidas registradas."))),bQ?.arenaName&&React.createElement("div",{className:"mt-5 rounded-2xl border border-cyan-500/40 bg-cyan-950/15 p-4 max-h-[48vh] overflow-y-auto themed-scrollbar"},React.createElement("div",{className:"flex items-center justify-between gap-3 mb-4"},React.createElement("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-200"},"Ítem: ",bQ.arenaName),React.createElement("button",{type:"button",onClick:()=>LQ(null),className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black"},"Cerrar detalle")),React.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4"},["wins","losses"].map((Z)=>{let $=Z==="wins",X=bQ[Z]||[];return React.createElement("div",{key:`item-detail-${Z}`,className:`rounded-xl border p-3 min-h-36 ${$?"border-emerald-500/40 bg-emerald-950/15":"border-rose-500/40 bg-rose-950/15"}`},React.createElement("h5",{className:`text-[10px] font-black uppercase tracking-[0.15em] mb-2 ${$?"text-emerald-300":"text-rose-300"}`},$?"Ganadas":"Perdidas"),X.length?React.createElement("ul",{className:"space-y-2"},X.map((Y,O)=>React.createElement("li",{key:`${Z}-${Y.pairKey}-${O}`,className:"flex items-center justify-between gap-2"},React.createElement("span",{className:`text-sm font-semibold ${$?"text-emerald-100":"text-rose-100"}`},Y.opponentName),React.createElement("button",{type:"button",className:"btn-metal btn-metal--red px-2 py-1 rounded text-[9px] font-black",onClick:async()=>{if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{await F1(Y.arenaName,Y.profileId,Y.opponentId);let H=dZ(BJ.profile.firebaseId,Y.arenaName);LQ(H)}catch(H){console.error("No se pudo eliminar la batalla del desglose:",H),alert("No se pudo eliminar la batalla. Verificá tu conexión con Firebase e intentá de nuevo.")}}},"Eliminar")))):React.createElement("p",{className:`text-xs ${$?"text-emerald-200/70":"text-rose-200/70"}`},$?"No hay batallas ganadas registradas.":"No hay batallas perdidas registradas."))})))))})(),BZ.isOpen&&BZ.profile&&(()=>{let J=BZ.profile,Q=bZ(J),Z=Object.entries(pJ);return React.createElement("div",{className:"fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>mQ({isOpen:!1,profile:null})},React.createElement("div",{className:"w-full max-w-3xl theme-surface-card border theme-border-secondary rounded-2xl p-6 space-y-6",onClick:($)=>$.stopPropagation()},React.createElement("div",{className:"flex items-start justify-between gap-4"},React.createElement("div",null,React.createElement("h3",{className:"font-title text-xl font-black text-white tracking-wide"},J.nombre," · Puntaje"),React.createElement("p",{className:"text-xs text-slate-300 mt-1"},"Panel de detalle por ítems, características y G2 Score.")),React.createElement("button",{type:"button",onClick:($)=>{$.stopPropagation(),mQ({isOpen:!1,profile:null})},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black"},"Cerrar")),React.createElement("section",{className:"space-y-3"},React.createElement("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300"},"Ítems"),React.createElement("div",{className:"flex flex-wrap gap-2"},oJ.map(($)=>React.createElement("button",{key:$,type:"button",onClick:(X)=>X.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-slate-600/80 bg-slate-900/80 text-slate-100"},$,": ",Number(Q[$]||0).toFixed(0))))),React.createElement("section",{className:"space-y-3"},React.createElement("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-300"},"Características"),React.createElement("div",{className:"flex flex-wrap gap-2"},Z.map(([$,X])=>React.createElement("button",{key:$,type:"button",onClick:(Y)=>Y.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-cyan-500/50 bg-cyan-950/25 text-cyan-100"},$,": ",i0(J,$).toFixed(0))))),React.createElement("section",{className:"space-y-3"},React.createElement("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-[var(--metal-gold)]"},"G2 Score"),React.createElement("button",{type:"button",onClick:($)=>$.stopPropagation(),className:"w-full px-4 py-3 rounded-xl text-sm font-black border border-[var(--metal-gold)]/50 bg-[color:color-mix(in_srgb,var(--metal-gold)_18%,rgba(15,23,42,0.82))] text-[var(--metal-gold)]"},"G2 SCORE TOTAL: ",OJ(J)))))})()),V==="CATEGORIAS"&&!ZJ&&React.createElement("div",{className:"space-y-10 animate-in fade-in duration-500"},React.createElement("div",{className:"flex justify-between items-end"},React.createElement("div",null,React.createElement("h2",{className:"text-3xl font-black italic text-white uppercase tracking-tighter"},"Carpetas")),React.createElement("button",{onClick:()=>{vZ(),IQ(!0)},className:"btn-metal btn-metal--gold px-8 py-3 rounded-xl text-xs"},"NUEVA CATEGORÍA")),t.length===0?React.createElement("div",{className:"py-20 border-2 border-dashed theme-border-secondary rounded-2xl text-center"},React.createElement("p",{className:"text-slate-600 font-black italic uppercase"},"No hay categorías personalizadas")):React.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"},t.map((J)=>React.createElement("div",{key:J.firebaseId,onClick:()=>DQ(J.firebaseId),className:"group relative bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] rounded-xl overflow-hidden border theme-border-secondary cursor-pointer hover:border-[var(--metal-gold)]/70 transition-all duration-500 shadow-[inset_0_1px_0_rgba(148,163,184,0.2),0_18px_30px_rgba(2,6,23,0.55)] aspect-[3/4]"},React.createElement("div",{className:"absolute top-5 right-5 z-50 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"},React.createElement("button",{onClick:(Q)=>{Q.stopPropagation(),jJ({...J,reglas:{...J.reglas,nacionalidades:J.reglas?.nacionalidades||[],profesiones:J.reglas?.profesiones||[],ciudades:J.reglas?.ciudades||[]}}),IQ(!0)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-[var(--metal-bronze)] text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]"},React.createElement(o,{name:"pencil",size:14})),React.createElement("button",{onClick:(Q)=>{if(Q.stopPropagation(),window.confirm("¿Seguro que querés borrar esta carpeta?"))N2(J.firebaseId)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-red-600 text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]"},React.createElement(o,{name:"x",size:14}))),React.createElement("div",{className:"absolute inset-0"},React.createElement("img",{src:qJ(J.coverImg,"https://via.placeholder.com/400x600?text=Sin+Portada"),className:"w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500",onError:SJ}),React.createElement("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"})),React.createElement("div",{className:"absolute bottom-0 left-0 right-0 p-6 text-center"},React.createElement("h3",{className:"text-xl font-black text-white uppercase italic tracking-tighter mb-2 drop-shadow-lg"},J.label),React.createElement("div",{className:"inline-flex items-center gap-2 bg-[var(--metal-bronze)]/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)]"},React.createElement("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest"},F.filter((Q)=>qZ(Q).includes(J.firebaseId)).length," Perfiles"))))))))),Z0&&React.createElement("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm"},React.createElement("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-2xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300"},React.createElement("button",{onClick:()=>uJ(!1),className:"p-2 hover:bg-slate-800 rounded-full transition-colors"},React.createElement(o,{name:"x",size:20,className:"text-slate-400"})),React.createElement("form",{onSubmit:A2,className:"flex-1 overflow-y-auto p-12 space-y-12"},React.createElement("div",{className:"grid grid-cols-1 gap-16"},React.createElement("div",{className:"space-y-8"},React.createElement("div",{className:"flex flex-col items-center gap-6"},React.createElement("div",{className:"flex items-center gap-4 self-start"},React.createElement("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-cyan-900/50"},React.createElement(o,{name:QJ?"user":"user-plus"})),React.createElement("h3",{className:"text-xl font-black italic tracking-tighter text-white"},QJ?"Editar Perfil":"Información del Perfil"),QJ&&React.createElement("button",{type:"button",onClick:()=>{j3({...v,firebaseId:QJ})},className:"btn-metal btn-metal--gold ml-4 px-4 py-2 rounded-xl text-[10px] flex items-center gap-2"},React.createElement(o,{name:"image",size:14}),"Multimedia")),React.createElement("div",{className:"w-48 h-60 rounded-2xl border-2 border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)] overflow-hidden bg-slate-900 flex items-center justify-center relative group"},v.fotos.length>0&&v.fotos[0]!==""?React.createElement("img",{src:qJ(v.fotos[0],OQ),className:"w-full h-full object-cover",alt:"Preview",onError:SJ}):React.createElement("div",{className:"text-center p-4"},React.createElement(o,{name:"image",size:32,className:"mx-auto text-slate-700 mb-2"}),React.createElement("p",{className:"text-[9px] font-bold text-slate-600 uppercase tracking-widest"},"Vista Previa")))),React.createElement("div",{className:"space-y-4"},React.createElement("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2"},React.createElement("div",{className:"rounded-2xl border border-emerald-400/30 bg-emerald-950/20 p-4"},React.createElement("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300"},"Datos actuales"),ZZ.completed.length>0?React.createElement("ul",{className:"mt-3 space-y-1"},ZZ.completed.map((J)=>React.createElement("li",{key:J.key,className:"text-xs text-emerald-100/90"},React.createElement("span",{className:"font-black"},J.label,":")," ",J.preview))):React.createElement("p",{className:"mt-3 text-xs text-emerald-100/70"},"Todavía no hay datos cargados.")),React.createElement("div",{className:"rounded-2xl border border-amber-300/30 bg-amber-950/20 p-4"},React.createElement("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-amber-200"},"Datos faltantes por completar"),ZZ.missing.length>0?React.createElement("ul",{className:"mt-3 space-y-1"},ZZ.missing.map((J)=>React.createElement("li",{key:J.key,className:"text-xs text-amber-100/90"},React.createElement("span",{className:"font-black"},J.label)))):React.createElement("p",{className:"mt-3 text-xs text-amber-100/70"},"¡Perfil completo en esta sección!"))),React.createElement("div",{className:"grid grid-cols-2 gap-4"},React.createElement("input",{required:!0,placeholder:"Nombre Artístico",className:"col-span-2 w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold",value:v.nombre,onChange:(J)=>a({...v,nombre:J.target.value})}),React.createElement("div",{className:"col-span-2 space-y-1"},React.createElement("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase"},"URL de la Foto (Avatar)"),React.createElement("input",{placeholder:"https://imagen.com/foto.jpg",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold text-xs",value:v.fotos[0]||"",onChange:(J)=>a((Q)=>p0(Q,J.target.value))}),React.createElement("input",{type:"file",accept:"image/*,.gif",onChange:e1,className:"w-full theme-surface-soft border border-dashed theme-border-secondary p-4 rounded-xl outline-none text-slate-200 font-semibold text-xs file:mr-3 file:rounded-lg file:border-0 file:bg-cyan-500/20 file:px-3 file:py-2 file:text-cyan-200 file:font-black"})),React.createElement("div",{className:"space-y-1"},React.createElement("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase"},"Nacimiento"),React.createElement("input",{type:"date",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:v.fechaNacimiento,onChange:(J)=>a({...v,fechaNacimiento:J.target.value})})),React.createElement("div",{className:"space-y-1"},React.createElement("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase"},"Estatura (cm)"),React.createElement("input",{placeholder:"170",type:"number",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:v.estaturaCm,onChange:(J)=>a({...v,estaturaCm:J.target.value})})),React.createElement("input",{placeholder:"Nacionalidad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:v.nacionalidad,onChange:(J)=>a({...v,nacionalidad:J.target.value})}),React.createElement("input",{placeholder:"Ciudad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:v.ciudad,onChange:(J)=>a({...v,ciudad:J.target.value})}),React.createElement("div",{className:"col-span-2 space-y-1 group"},React.createElement("label",{className:"text-[9px] font-black text-[var(--metal-gold)]/60 ml-4 uppercase tracking-widest transition-colors group-focus-within:text-[var(--metal-gold)]"},"Profesión"),React.createElement("select",{required:!0,className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold appearance-none cursor-pointer transition-all duration-300 focus:border-[var(--metal-gold)] focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] focus:bg-slate-900",value:v.profesion,onChange:(J)=>a({...v,profesion:J.target.value})},React.createElement("option",{value:"",className:"theme-surface-card"},"Seleccionar..."),React.createElement("option",{value:"Cantante",className:"theme-surface-card"},"\uD83C\uDFA4 Cantante"),React.createElement("option",{value:"Actriz",className:"theme-surface-card"},"\uD83C\uDFAC Actriz"),React.createElement("option",{value:"Modelo",className:"theme-surface-card"},"\uD83D\uDC60 Modelo"),React.createElement("option",{value:"NSFW",className:"theme-surface-card"},"\uD83D\uDD25 NSFW"),React.createElement("option",{value:"Influencer",className:"theme-surface-card"},"\uD83D\uDCF1 Influencer"),React.createElement("option",{value:"Bailarina y Atleta",className:"theme-surface-card"},"\uD83D\uDC83\uD83C\uDFCB️‍♀️ Bailarina y Atleta"),React.createElement("option",{value:"Otro",className:"theme-surface-card"},"\uD83D\uDCD6 Otro")),React.createElement("div",{className:"absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--metal-gold)]/50"},React.createElement(o,{name:"chevron-down",size:18}))))))),React.createElement("div",{className:"flex gap-4"},QJ&&React.createElement("button",{type:"button",onClick:M2,className:"btn-metal btn-metal--danger px-10 py-8 rounded-xl text-xs"},React.createElement(o,{name:"trash-2",size:20})),React.createElement("button",{type:"submit",className:"btn-metal btn-metal--gold flex-1 py-8 rounded-xl text-xs"},QJ?"Actualizar Registro":"Guardar Perfil"))))),v1&&React.createElement("div",{className:"fixed inset-0 z-[120] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-6",onClick:uZ},React.createElement("div",{className:"w-full max-w-xl theme-surface-card border theme-border-secondary rounded-3xl p-8 space-y-6",onClick:(J)=>J.stopPropagation()},React.createElement("div",{className:"space-y-3"},React.createElement("p",{className:"text-xs font-black uppercase tracking-[0.24em] text-red-300"},"Acción destructiva"),React.createElement("h3",{className:"text-2xl font-black italic text-white tracking-tight"},"¿Eliminar perfil?"),React.createElement("p",{className:"text-sm text-slate-300"},"Esta acción eliminará de forma permanente a ",React.createElement("span",{className:"font-black text-white"},RJ?.nombre||"este perfil")," y sus datos en Firebase. No se puede deshacer."),Y0&&React.createElement("div",{className:"rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-xs font-semibold text-red-200"},Y0)),React.createElement("div",{className:"flex justify-end gap-3"},React.createElement("button",{type:"button",onClick:uZ,className:"btn-metal btn-metal--silver px-6 py-3 rounded-xl text-[10px]"},"Cancelar"),React.createElement("button",{type:"button",onClick:w2,className:"btn-metal btn-metal--danger px-6 py-3 rounded-xl text-[10px]"},"Eliminar")))),$0&&React.createElement("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm"},React.createElement("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-5xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300"},React.createElement("button",{type:"button",onClick:()=>{vZ(),IQ(!1)},className:"p-4 hover:bg-slate-800 rounded-full transition-all"},React.createElement(o,{name:"x",size:24,className:"text-slate-400"})),React.createElement("form",{onSubmit:z2,className:"flex-1 overflow-y-auto p-12 space-y-12"},React.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12"},React.createElement("div",{className:"space-y-8"},React.createElement("div",{className:"flex items-center gap-4"},React.createElement("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white"},React.createElement(o,{name:"scroll"})),React.createElement("h3",{className:"text-xl font-black italic text-white"},"Nuevo Archivo del Reino")),React.createElement("div",{className:"space-y-4"},React.createElement("input",{required:!0,placeholder:"Nombre de la Carpeta",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none font-bold text-lg text-white",value:k.label,onChange:(J)=>jJ({...k,label:J.target.value})}),React.createElement("div",{className:"w-full"},React.createElement("div",{className:"space-y-1 w-full"},React.createElement("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase"},"URL de Portada"),React.createElement("input",{placeholder:"https://...",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold text-xs",value:k.coverImg,onChange:(J)=>jJ({...k,coverImg:J.target.value})}))))),React.createElement("div",{className:"space-y-6"},React.createElement("h4",{className:"text-[10px] font-black uppercase text-slate-500 tracking-widest flex items-center gap-2"},React.createElement(o,{name:"shield",size:12})," Mandatos de Clasificación del Consejo"),React.createElement("div",{className:"p-8 bg-slate-950/50 border theme-border-secondary rounded-2xl space-y-6"},React.createElement("div",{className:"grid grid-cols-2 gap-4"},React.createElement("div",{className:"space-y-1"},React.createElement("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase"},"NACIONALIDADES"),React.createElement("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]"},k.reglas.nacionalidades.map((J)=>React.createElement("span",{key:J,className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1"},J," ",React.createElement("button",{type:"button",onClick:()=>jJ({...k,reglas:{...k.reglas,nacionalidades:k.reglas.nacionalidades.filter((Q)=>Q!==J)}})},"×")))),React.createElement("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!k.reglas.nacionalidades.includes(J.target.value))jJ({...k,reglas:{...k.reglas,nacionalidades:[...k.reglas.nacionalidades,J.target.value]}})}},React.createElement("option",{value:""},"Añadir país..."),X2.filter((J)=>J!=="Todas").map((J)=>React.createElement("option",{key:J,value:J},J)))),React.createElement("div",{className:"space-y-1"},React.createElement("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase"},"CIUDADES"),React.createElement("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]"},k.reglas.ciudades.map((J)=>React.createElement("span",{key:J,className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1"},J," ",React.createElement("button",{type:"button",onClick:()=>jJ({...k,reglas:{...k.reglas,ciudades:k.reglas.ciudades.filter((Q)=>Q!==J)}})},"×")))),React.createElement("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!k.reglas.ciudades.includes(J.target.value))jJ({...k,reglas:{...k.reglas,ciudades:[...k.reglas.ciudades,J.target.value]}})}},React.createElement("option",{value:""},"Añadir ciudad..."),Y2.filter((J)=>J!=="Todas").map((J)=>React.createElement("option",{key:J,value:J},J)))),React.createElement("div",{className:"space-y-1"},React.createElement("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase"},"PROFESIONES"),React.createElement("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]"},k.reglas.profesiones.map((J)=>React.createElement("span",{key:J,className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1"},J," ",React.createElement("button",{type:"button",onClick:()=>jJ({...k,reglas:{...k.reglas,profesiones:k.reglas.profesiones.filter((Q)=>Q!==J)}})},"×")))),React.createElement("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!k.reglas.profesiones.includes(J.target.value))jJ({...k,reglas:{...k.reglas,profesiones:[...k.reglas.profesiones,J.target.value]}})}},React.createElement("option",{value:""},"Añadir profesión..."),Object.keys(rZ).map((J)=>React.createElement("option",{key:J,value:J},J)))),React.createElement("div",{className:"grid grid-cols-2 gap-2"},React.createElement("div",{className:"space-y-1"},React.createElement("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase"},"EDAD MIN"),React.createElement("input",{type:"number",placeholder:"18",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:k.reglas.edadMin,onChange:(J)=>jJ({...k,reglas:{...k.reglas,edadMin:J.target.value}})})),React.createElement("div",{className:"space-y-1"},React.createElement("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase"},"EDAD MAX"),React.createElement("input",{type:"number",placeholder:"30",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:k.reglas.edadMax,onChange:(J)=>jJ({...k,reglas:{...k.reglas,edadMax:J.target.value}})})))),React.createElement("div",{className:"space-y-1 pt-4 border-t theme-border-secondary"},React.createElement("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase"},"Condición de Score"),React.createElement("div",{className:"grid grid-cols-2 gap-2 mb-2"},React.createElement("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:k.reglas.caracteristica,onChange:(J)=>jJ({...k,reglas:{...k.reglas,caracteristica:J.target.value}})},oJ.map((J)=>React.createElement("option",{key:J},J))),React.createElement("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:k.reglas.operador,onChange:(J)=>jJ({...k,reglas:{...k.reglas,operador:J.target.value}})},React.createElement("option",null,"Superior a"),React.createElement("option",null,"Inferior a"))),React.createElement("input",{type:"number",placeholder:"Umbral (0-10)",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-[var(--metal-gold)]",value:k.reglas.umbral,onChange:(J)=>jJ({...k,reglas:{...k.reglas,umbral:J.target.value}})}))))),React.createElement("button",{type:"submit",className:"btn-metal btn-metal--gold w-full py-8 rounded-xl text-xs"},"CREAR CARPETA INTELIGENTE")))))},U3=ReactDOM.createRoot(document.getElementById("root"));U3.render(React.createElement(V3,null));
