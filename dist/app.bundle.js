import{jsxDEV as Q,Fragment as bJ}from"react/jsx-dev-runtime";const i2={apiKey:"AIzaSyAcrVq7ryWv5EJbRhZ1TmhFia-LAV10cN4",authDomain:"eliteg3-1650f.firebaseapp.com",databaseURL:"https://eliteg3-1650f-default-rtdb.firebaseio.com/",projectId:"eliteg3-1650f",storageBucket:"eliteg3-1650f.firebasestorage.app",messagingSenderId:"351711372153",appId:"1:351711372153:web:60ce4742396e37974f85a8",measurementId:"G-HGYPLEY6DJ"};if(!firebase.apps.length)firebase.initializeApp(i2);const G=firebase.database(),l2=firebase.storage(),{useState:V,useEffect:e,useMemo:c,useRef:NJ}=React,t2=(q,_="")=>{const D=String(q||"uploads").replace(/^\/+|\/+$/g,""),B=String(_||"archivo").trim().replace(/[^a-zA-Z0-9._-]/g,"_"),F=Date.now(),g=Math.random().toString(36).slice(2,10);return`${D}/${F}-${g}-${B||"archivo"}`},VZ=async(q,_="uploads")=>{if(!q)throw new Error("Archivo inválido.");const D=t2(_,q.name||"archivo"),B=l2.ref(D);await B.put(q);return B.getDownloadURL()},XJ=["C","P","B","N","S","E","X","R"],o2=["R"],WQ="anonimo/galeria",xJ="__anonimo_gallery__",a2=["PERSONAJE","ETIQUETA","GENERAL"],D1={PERSONAJE:"Personaje",ETIQUETA:"Etiqueta",GENERAL:"General"},oJ=[{id:"perfil",label:"Perfil",labels:[]},{id:"colaPiernas",label:"Cola/Piernas",labels:["C"]},{id:"pechos",label:"Pechos",labels:["P"]},{id:"cuerpoCintura",label:"Cintura/Cuerpo",labels:["N","B"]},{id:"sensualidad",label:"Sensualidad",labels:["E","S"]}],r2={perfil:"perfil",pecho:"pechos",pechos:"pechos",cola:"colaPiernas",piernas:"colaPiernas",cuerpo:"cuerpoCintura",cintura:"cuerpoCintura",sensualidad:"sensualidad"},tZ=()=>oJ.reduce((q,_)=>{q[_.id]="";return q},{}),OJ=(q={})=>{const _=tZ(),D=q&&typeof q==="object"?q:{};return Object.keys(_).reduce((B,F)=>{B[F]=typeof D[F]==="string"?D[F].trim():"";return B},{..._})},UZ=(q="")=>oJ.find((_)=>_.id===q),e2=(q="")=>r2[(q||"").trim().toLowerCase()]||"",DZ={C:{bg:"linear-gradient(135deg, rgba(34,211,238,0.92), rgba(14,116,144,0.95))",border:"rgba(103,232,249,0.95)",glow:"rgba(34,211,238,0.8)",text:"#ecfeff"},P:{bg:"linear-gradient(135deg, rgba(244,114,182,0.92), rgba(157,23,77,0.95))",border:"rgba(251,207,232,0.95)",glow:"rgba(244,114,182,0.78)",text:"#fff1f2"},B:{bg:"linear-gradient(135deg, rgba(251,191,36,0.94), rgba(180,83,9,0.95))",border:"rgba(253,224,71,0.98)",glow:"rgba(251,191,36,0.82)",text:"#fffbea"},N:{bg:"linear-gradient(135deg, rgba(163,230,53,0.92), rgba(63,98,18,0.95))",border:"rgba(217,249,157,0.95)",glow:"rgba(163,230,53,0.78)",text:"#f7fee7"},S:{bg:"linear-gradient(135deg, rgba(192,132,252,0.92), rgba(107,33,168,0.95))",border:"rgba(233,213,255,0.95)",glow:"rgba(192,132,252,0.8)",text:"#faf5ff"},E:{bg:"linear-gradient(135deg, rgba(248,113,113,0.92), rgba(153,27,27,0.95))",border:"rgba(254,202,202,0.95)",glow:"rgba(248,113,113,0.8)",text:"#fef2f2"},X:{bg:"linear-gradient(135deg, rgba(239,68,68,0.98), rgba(127,29,29,0.98))",border:"rgba(254,226,226,1)",glow:"rgba(239,68,68,0.95)",text:"#fff7f7"},R:{bg:"linear-gradient(135deg, rgba(148,163,184,0.95), rgba(71,85,105,0.98))",border:"rgba(226,232,240,0.95)",glow:"rgba(148,163,184,0.82)",text:"#f8fafc"},DEFAULT:{bg:"linear-gradient(135deg, rgba(51,65,85,0.92), rgba(15,23,42,0.95))",border:"rgba(148,163,184,0.85)",glow:"rgba(148,163,184,0.45)",text:"#f8fafc"}},_Q=(q,_)=>{if(!_)return 0;return(q+_)%_},C1=(q,_,D=!1)=>{const B=Array.isArray(_)?_.length:0;if(!B)return null;if(B===1)return 0;if(D){const F=_.map((g,i)=>({item:g,idx:i})).filter(({item:g,idx:i})=>i!==q&&g&&g.url).map(({idx:g})=>g);if(!F.length)return _Q((q??0)+1,B);return F[Math.floor(Math.random()*F.length)]}return _Q((q??0)+1,B)},aJ=(q)=>DZ[q]||DZ.DEFAULT,CZ=(q,_=!1)=>{const D=q==="INICIAL"?DZ.DEFAULT:q==="100"?DZ.B:aJ(q);return{"--btn-neon-color":D.glow,borderColor:D.border,color:D.text,boxShadow:_?`inset 0 1px 0 rgba(186,230,253,0.35), 0 0 0 1px ${D.border}, 0 0 20px ${D.glow}`:`inset 0 1px 0 rgba(186,230,253,0.2), 0 0 0 1px color-mix(in srgb, ${D.border} 65%, rgba(15,23,42,0.65) 35%), 0 0 12px color-mix(in srgb, ${D.glow} 60%, transparent)`,textShadow:`0 0 8px color-mix(in srgb, ${D.glow} 70%, transparent)`,filter:_?"brightness(1.14)":"brightness(1)"}},R1=/\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i,J3=/\.(mp3|wav|ogg|m4a|aac|flac)(\?.*)?$/i,Q3=/\.gif(\?.*)?$/i,Z3=/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i,$3=/vimeo\.com\/(?:video\/)?(\d+)/i,OQ=(q)=>{const _=(q||"").trim();if(!_)return null;const D=_.match(Z3);if(D)return{provider:"youtube",src:`https://www.youtube.com/embed/${D[1]}`,title:"Video de YouTube"};const B=_.match($3);if(B)return{provider:"vimeo",src:`https://player.vimeo.com/video/${B[1]}`,title:"Video de Vimeo"};return null},B1="eliteg3_cache_perfiles_v1",T1="eliteg3_cache_anon_gallery_v1",X3=["eporner.com"],A1=(q="")=>{const _=String(q||"").trim();if(!_||_.startsWith("data:")||_.startsWith("blob:"))return!1;try{const B=new URL(_).hostname.toLowerCase();return X3.some((F)=>B===F||B.endsWith(`.${F}`))}catch{return!1}},HJ=(q="",_="")=>{const D=String(q||"").trim();if(!D||A1(D))return _;return D},rJ=(q="",_="")=>{if(_==="video"||_==="image")return _;const D=(q||"").trim();if(R1.test(D)||OQ(D))return"video";return"image"},oZ=(q="")=>{return typeof q==="string"?q.trim():""},JJ=(q,_="")=>{if(typeof q==="string")return{url:HJ(q.trim(),""),label:"",type:rJ(q,_),autor:""};if(q&&typeof q==="object"){const D=HJ((q.url||"").trim(),"");return{url:D,label:XJ.includes(q.label)?q.label:"",type:rJ(D,q.type||_),autor:oZ(q.autor)}}return{url:"",label:"",type:rJ("",_),autor:""}},Y3=(q)=>JJ(q).url,z1=(q)=>JJ(q).label,eJ=(q)=>JJ(q).type,aZ=(q,_,D="image")=>Array.isArray(q?.[_])?q[_].map((B)=>JJ(B,D)).filter((B)=>B.url):[],j3=(q={})=>({firebaseId:xJ,nombre:"Anónimo",nacionalidad:"",ciudad:"",profesion:"Galería",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:aZ(q,"fotos","image"),gifs:aZ(q,"gifs","image"),videos:aZ(q,"videos","video")},batallaFotosPreferidas:tZ(),puntuaciones:bQ(),isAnonymousGallery:!0}),H3=(q={})=>{if(q?.isAnonymousGallery||q?.firebaseId===xJ)return"anonimo";return q?.firebaseId||""},q3=(q={})=>{const _=HJ(String(q?.fotos?.[0]||"").trim(),""),D=OJ(q?.batallaFotosPreferidas||q?.galeria?.battlePhotoPreferences||{});if(!_)return!1;return oJ.filter((B)=>B.id!=="perfil").every((B)=>Boolean(String(D?.[B.id]||"").trim()))},W3=(q={})=>{const _=[],D=HJ(String(q?.fotos?.[0]||"").trim(),""),B=OJ(q?.batallaFotosPreferidas||q?.galeria?.battlePhotoPreferences||{});if(!D)_.push("Perfil");oJ.filter((F)=>F.id!=="perfil").forEach((F)=>{if(!String(B?.[F.id]||"").trim())_.push(F.label)});return _},_3=(q=null)=>{if(!q)return;const _=window.open("","_blank");if(!_)return;const D=q?.firebaseId||q?.id||"",B=Array.isArray(q?.galeria?.fotos)?q.galeria.fotos.map((N)=>JJ(N,"image")).filter((N)=>N.url).map((N,k)=>({...N,sourceTag:"fotos",sourceIndex:k})):[],F=B.filter((N)=>N.type==="image"&&N.sourceTag==="fotos"),g=OJ(q?.batallaFotosPreferidas||q?.galeria?.battlePhotoPreferences||{}),i=HJ(String(q?.fotos?.[0]||q?.foto||"").trim(),""),YJ=B.filter((N)=>N.type==="image"&&N.url).reduce((N,k)=>{N[k.url]=k;return N},{}),o=B.length?B.map((N,k)=>`
                    <button
                        type="button"
                        class="surface-panel rounded-xl overflow-hidden border border-cyan-200/20 text-left multimedia-thumb-btn"
                        data-url="${N.url}"
                        data-label="${N.label||""}"
                        data-index="${N.sourceIndex}"
                        data-tag="${N.sourceTag}"
                        data-media-type="${N.type||"image"}"
                        draggable="true"
                        title="Editar URL o etiqueta"
                    >
                        <div class="multimedia-thumb-wrap">
                            <img src="${N.url}" alt="Multimedia ${k+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${N.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin contenido en galería.</p>',I=F.length?F.map((N,k)=>`
                    <button
                        type="button"
                        class="surface-panel rounded-xl overflow-hidden border border-rose-300/35 text-left multimedia-thumb-btn multimedia-thumb-btn--broken"
                        data-url="${N.url}"
                        data-label="${N.label||""}"
                        data-index="${N.sourceIndex}"
                        data-tag="${N.sourceTag}"
                        data-media-type="${N.type||"image"}"
                        draggable="true"
                        data-broken-card="true"
                        style="display:none;"
                        title="Imagen rota: tocar para editar URL o etiqueta"
                    >
                        <div class="multimedia-thumb-wrap multimedia-thumb-wrap--broken">
                            <img src="${N.url}" alt="Imagen rota ${k+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${N.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin imágenes en galería.</p>',U=oJ.map((N)=>{const k=N.id==="perfil",b=k?i:g[N.id]||"",w=b?k?{url:b}:YJ[b]||{url:b,label:"",sourceIndex:-1}:null,UJ=Boolean(b);return`
                    <div class="multimedia-slot-card ${UJ?"is-assigned":"is-missing"}" data-slot-id="${N.id}">
                        <div class="multimedia-slot-top">
                            <span class="multimedia-slot-title">${N.label}</span>
                            <span class="multimedia-slot-state">${UJ?"VERDE":"ROJO"}</span>
                        </div>
                        <div class="multimedia-slot-preview">
                            ${UJ?`<img src="${w.url}" alt="${N.label}" loading="lazy" />`:'<span class="multimedia-slot-empty">Sin foto designada</span>'}
                        </div>
                        <div class="multimedia-slot-actions">
                            ${!k?`<button type="button" class="multimedia-slot-assign-btn" data-slot-assign="${N.id}">DESIGNAR FOTO</button>`:""}
                            <button type="button" class="multimedia-slot-add-btn" data-slot-add="${N.id}">Agregar URL/Archivo</button>
                        </div>
                    </div>
                `}).join("");_.document.write(`
                <!DOCTYPE html>
                <html lang="es">
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Multimedia - ${q?.nombre||"Personaje"}</title>
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
                                <p class="text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2">${q?.nombre||"Personaje"}</p>
                                <article class="surface-panel rounded-2xl border border-cyan-200/20 mt-6 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-3">Galería</h2>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${o}</div>
                                </article>
                                <article class="surface-panel rounded-2xl border border-cyan-200/20 mt-4 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-3">5 principales</h2>
                                    <div class="multimedia-slots-grid">${U}</div>
                                </article>
                                <article class="surface-panel rounded-2xl border border-rose-300/25 mt-4 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-2">Imágenes rotas</h2>
                                    <p class="text-xs text-rose-100/80 uppercase tracking-[0.12em] mb-3">Solo fotos que ya no cargan. Tocá una para corregir URL y etiqueta.</p>
                                    <div id="brokenGalleryGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${I}</div>
                                    <p id="brokenGalleryEmpty" class="text-sm text-slate-300">No hay imágenes rotas detectadas.</p>
                                </article>
                            </section>
                        </main>
                        <script>
                            const profileId = ${JSON.stringify(D)};
                            const validLabels = ${JSON.stringify(XJ)};
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
                                window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: '${D}', slotId, index: sourceIndex, mediaType: 'image' }, '*');
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
                            const slotConfigById = ${JSON.stringify(oJ.reduce((N,k)=>{N[k.id]=k;return N},{}))};
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
            `);_.document.close()},O3=({isOpen:q=!1,profile:_=null,onClose:D=()=>{}})=>{const[B,F]=V(!0),[g,i]=V(!0);e(()=>{if(!q)return;F(!0);i(!0)},[q,_?.firebaseId]);if(!q||!_)return null;const YJ=Array.isArray(_?.galeria?.fotos)?_.galeria.fotos.map((I)=>JJ(I,"image")).filter((I)=>I.url):[],o=Object.entries(_?.puntuaciones||{}).map(([I,U])=>({label:I,value:Number(U)||0})).sort((I,U)=>U.value-I.value).slice(0,5);return Q("div",{className:"fixed inset-0 z-[180] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm px-4 py-8",onClick:D,role:"presentation",children:Q("section",{className:"gothic-frame surface-panel surface-panel--neon rounded-[2rem] p-6 md:p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto relative",onClick:(I)=>I.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Multimedia del personaje",children:[Q("button",{type:"button",onClick:D,className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100",children:"✕"},void 0,!1,void 0,this),Q("h2",{className:"font-title text-center text-3xl md:text-4xl text-white uppercase tracking-wide",children:"Multimedia"},void 0,!1,void 0,this),Q("p",{className:"text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2",children:_?.nombre||"Personaje"},void 0,!1,void 0,this),Q("div",{className:"mt-6 space-y-4",children:[Q("article",{className:"surface-panel rounded-2xl border border-cyan-200/20",children:[Q("button",{type:"button",onClick:()=>F((I)=>!I),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between",children:[Q("span",{children:"Galería"},void 0,!1,void 0,this),Q("span",{children:B?"−":"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),B&&Q("div",{className:"px-4 pb-4 grid grid-cols-2 md:grid-cols-4 gap-3",children:YJ.length?YJ.map((I,U)=>Q("div",{className:"rounded-xl overflow-hidden border border-slate-600/40 bg-slate-900/40",children:Q("img",{src:I.url,alt:`Multimedia ${U+1}`,className:"w-full h-36 object-cover",loading:"lazy"},void 0,!1,void 0,this)},`${I.url}-${U}`,!1,void 0,this)):Q("p",{className:"text-sm text-slate-300 col-span-full",children:"Sin contenido en galería."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"surface-panel rounded-2xl border border-cyan-200/20",children:[Q("button",{type:"button",onClick:()=>i((I)=>!I),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between",children:[Q("span",{children:"5 Principales"},void 0,!1,void 0,this),Q("span",{children:g?"−":"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),g&&Q("div",{className:"px-4 pb-4 space-y-2",children:o.length?o.map((I)=>Q("div",{className:"surface-panel rounded-xl px-3 py-2 flex items-center justify-between",children:[Q("span",{className:"text-sm text-slate-200 uppercase",children:I.label},void 0,!1,void 0,this),Q("strong",{className:"text-cyan-200",children:I.value},void 0,!1,void 0,this)]},I.label,!0,void 0,this)):Q("p",{className:"text-sm text-slate-300",children:"Sin puntajes cargados."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},N1=async(q="",{timeoutMs:_=12000,retries:D=1}={})=>{const B=String(q||"").trim();if(!B)return!0;const F=()=>new Promise((g)=>{const i=new Image;let YJ=!1;const o=(U)=>{if(YJ)return;YJ=!0;i.onload=null;i.onerror=null;g(Boolean(U))},I=window.setTimeout(()=>o(!0),_);i.onload=()=>{clearTimeout(I);const U=Number(i.naturalWidth)>0&&Number(i.naturalHeight)>0;o(!U)};i.onerror=()=>{clearTimeout(I);o(!0)};i.src=B});for(let g=0;g<=D;g+=1)if(!await F())return!1;return!0},M1=(q,_)=>{const D=(_||"").trim().toLowerCase(),B=Array.isArray(q?.galeria?.fotos)?q.galeria.fotos.map((b)=>JJ(b,"image")).filter((b)=>b.type==="image"&&b.url):[],g=HJ(q?.fotos?.[0],"")||"https://via.placeholder.com/400x500";if(new Set(["rostro","ojos","boca","cabello","carisma","elegancia","dulzura","talento","estatura"]).has(D))return g;const YJ=(b=[])=>{const w=B.filter((s)=>b.includes(z1(s)));if(!w.length)return"";const UJ=Math.floor(Math.random()*w.length);return w[UJ]?.url||""},o=e2(D),I=UZ(o);if(!I)return g;const N=OJ(q?.batallaFotosPreferidas)[o];if(N){if(B.some((w)=>w.url===N))return N}return YJ(I.labels)||g},L3=(q="")=>Q3.test((q||"").trim()),LQ="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20256%20256%27%3E%3Crect%20width%3D%27256%27%20height%3D%27256%27%20rx%3D%2740%27%20fill%3D%27%23020617%27/%3E%3Ctext%20x%3D%27128%27%20y%3D%27152%27%20text-anchor%3D%27middle%27%20font-size%3D%27120%27%3E%F0%9F%98%A2%3C/text%3E%3C/svg%3E",rZ=`if(this.dataset.fallbackApplied==='true')return;this.dataset.fallbackApplied='true';this.src='${LQ}';this.style.objectFit='contain';this.style.padding='12px';this.style.background='#020617';this.alt='Imagen no disponible';`,PJ=(q)=>{const _=q?.currentTarget||q?.target;if(!_||_.dataset.fallbackApplied==="true")return;_.dataset.fallbackApplied="true";_.src=LQ;_.style.objectFit="contain";_.style.padding="12px";_.style.background="#020617";_.alt="Imagen no disponible"},M3="g2_elite_database_v4",K3="g2_elite_categories_v4",JQ=["Rostro","Ojos","Boca","Cabello","Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura","Sensualidad","Carisma","Elegancia","Dulzura","Talento"],eZ=[...JQ],J0=[{id:"PROFESIONES",label:"Profesiones",description:"Compará perfiles por profesión."},{id:"NACIONALIDADES",label:"Nacionalidades",description:"Compará perfiles por nacionalidad."},{id:"EDADES",label:"Edades",description:"Compará perfiles por rango etario."},{id:"GENERAL",label:"General",description:"Modo libre sin segmentación extra."}],F3=J0.map((q)=>q.id),FQ=(q="")=>{return J0.find((D)=>D.id===q)?.label||"General"},E3=(q="")=>{const _=String(q||"").trim();if(!_)return"";return encodeURIComponent(_.toLowerCase())},V3=(q="")=>{const _=String(q||"").trim();if(!_)return"";try{return decodeURIComponent(_).toLowerCase()}catch{return _.toLowerCase()}},EQ=(q,_="GENERAL",D="")=>{const B=String(q||"").trim(),F=String(_||"GENERAL").trim().toUpperCase(),g=E3(D);if(!B)return"";return`${F}::${g||"all"}::${B}`},CJ=(q="")=>String(q||"").trim(),K1=(q="")=>{const _=String(q||"").split("::");if(_.length<3)return{scopeId:"GENERAL",groupKey:"all",arenaName:""};const D=_.slice(2).join("::");return{scopeId:String(_[0]||"GENERAL").trim().toUpperCase()||"GENERAL",groupKey:V3(_[1]||"all")||"all",arenaName:String(D||"").trim()}},bQ=()=>JQ.reduce((q,_)=>{q[_]=0;return q},{}),w1=[],Q0={Cantante:{glyph:"crown",color:"rgba(34, 211, 238, 0.8)",tailwind:"cyan-400"},Actriz:{glyph:"theater",color:"rgba(34, 197, 94, 0.8)",tailwind:"green-500"},Modelo:{glyph:"floron",color:"rgba(168, 85, 247, 0.8)",tailwind:"purple-500"},NSFW:{glyph:"torch",color:"rgba(239, 68, 68, 0.8)",tailwind:"red-500"},Influencer:{glyph:"sigil",color:"rgba(236, 72, 153, 0.8)",tailwind:"pink-500"},"Bailarina y Atleta":{glyph:"floron",color:"rgba(249, 115, 22, 0.8)",tailwind:"orange-500"},Otro:{glyph:"sigil",color:"rgba(148, 163, 184, 0.8)",tailwind:"slate-400"}},w3=(q="")=>{const _=String(q||"").toLowerCase();if(_.includes("cantante"))return"crown";if(_.includes("nsfw"))return"torch";if(_.includes("actriz")||_.includes("actor"))return"theater";if(_.includes("modelo"))return"floron";if(_.includes("influencer"))return"sigil";if(_.includes("periodista"))return"quill";if(_.includes("bailarina"))return"floron";if(_.includes("atleta"))return"shield";return"shield"},U3=(q="")=>{const _=String(q||"").toLowerCase();if(_.includes("cantante"))return"\uD83C\uDFA4";if(_.includes("nsfw"))return"\uD83D\uDD25";if(_.includes("actriz")||_.includes("actor"))return"\uD83C\uDFAC";if(_.includes("modelo"))return"\uD83D\uDC60";if(_.includes("influencer"))return"\uD83D\uDCF1";if(_.includes("periodista"))return"\uD83D\uDC53";if(_.includes("bailarina"))return"\uD83D\uDC83";if(_.includes("atleta"))return"\uD83C\uDFCB️‍♀️";return"\uD83D\uDCD6"},vQ=(q="")=>{const _=String(q||"").trim(),D=Q0[_]||Q0.Otro,B=String(D?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 1)"),F=String(D?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 0.75)");return{baseColor:B,glowColor:F}},G3=({variant:q="sigil",size:_=18,className:D="",tint:B="currentColor"})=>{const F={width:_,height:_,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:D};if(q==="crown")return Q("svg",{...F,stroke:B,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M3 17h18v3H3z"},void 0,!1,void 0,this),Q("path",{d:"M4 17l3-8 5 5 5-7 3 10"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(q==="shield")return Q("svg",{...F,stroke:B,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M12 3l7 3v6c0 4.3-2.4 7-7 9-4.6-2-7-4.7-7-9V6l7-3z"},void 0,!1,void 0,this),Q("path",{d:"M9.5 11h5M12 8.5v5"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(q==="floron")return Q("svg",{...F,stroke:B,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M12 4v16"},void 0,!1,void 0,this),Q("path",{d:"M6 9c1.4 0 2.8.9 3.4 2.2C8.2 11.5 7 12.8 7 14.3 5.4 13.5 4.3 11.9 4.3 10 4.3 9.5 5 9 6 9z"},void 0,!1,void 0,this),Q("path",{d:"M18 9c-1.4 0-2.8.9-3.4 2.2 1.2.3 2.4 1.6 2.4 3.1 1.6-.8 2.7-2.4 2.7-4.3 0-.5-.7-1-1.7-1z"},void 0,!1,void 0,this),Q("circle",{cx:"12",cy:"12",r:"2.2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(q==="quill")return Q("svg",{...F,stroke:B,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M20 4c-7 1-11.5 5.2-13 12l4-1 1 4c6.8-2.4 8.4-8.4 8-15z"},void 0,!1,void 0,this),Q("path",{d:"M8 16l-4 4"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(q==="torch")return Q("svg",{...F,stroke:B,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M9 13l6-6"},void 0,!1,void 0,this),Q("path",{d:"M8 14l2 2 2-2-2-2z"},void 0,!1,void 0,this),Q("path",{d:"M11 16l-4 5h10l-4-5"},void 0,!1,void 0,this),Q("path",{d:"M15.5 4.5c.9 1.3.5 3.2-1 4.3-1.5-1.4-1.8-3.3-.8-4.9.6.1 1.2.3 1.8.6z"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(q==="theater")return Q("svg",{...F,stroke:B,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M5 6h14v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"},void 0,!1,void 0,this),Q("path",{d:"M9 11h.01M15 11h.01"},void 0,!1,void 0,this),Q("path",{d:"M8.5 15c1 .8 2.2 1.2 3.5 1.2s2.5-.4 3.5-1.2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);return Q("svg",{...F,stroke:B,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("circle",{cx:"12",cy:"12",r:"8.5"},void 0,!1,void 0,this),Q("path",{d:"M12 6v12M6 12h12"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},a=({name:q,size:_=20,className:D=""})=>{return Q("i",{"data-lucide":q.toLowerCase().replace(/([a-z])([A-Z])/g,"$1-$2"),style:{width:_,height:_},className:`inline-block ${D}`},void 0,!1,void 0,this)},Z0=({targetWindow:q,profileName:_,profession:D,photos:B,editingId:F,battlePhotoPrefs:g={},profilePhotoUrl:i=""})=>{if(!q||q.closed)return;const YJ=OJ(g),o=HJ(String(i||"").trim(),""),I=(B||[]).map((U,N)=>{const k=JJ(U);return{...k,sourceTag:U?.sourceTag||(k.type==="video"?"videos":"fotos"),sourceIndex:typeof U?.sourceIndex==="number"?U.sourceIndex:N}}).filter((U)=>U.url);q.document.open();q.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Galería de ${_}</title>
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
                <h1>Galería de ${_}</h1>
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
                        ${XJ.map((U)=>`<option value="${U}">Etiqueta ${U}</option>`).join("")}
                    </select>
                    <input type="text" id="nuevaFotoAutor" placeholder="Autor (opcional)" style="width: 100%; padding: 12px; margin-top: 15px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color: #e2e8f0; border-radius: 8px; outline: none; box-shadow: inset 0 1px 0 rgba(148,163,184,0.18);">
                    <input type="hidden" id="slotSelectionId" value="">
                    <p id="slotGalleryHint" style="display:none; margin:10px 0 0; font-size:11px; color:#93c5fd;">Tip: para “Elegir desde galería” tocá cualquier imagen para asignarla.</p>
                    <button onclick="addMediaFromModal()"
                        style="margin-top: 15px; width: 100%; padding: 10px; background: linear-gradient(180deg, rgba(14,116,144,0.95), rgba(8,47,73,0.95)); color: #ecfeff; border: 1px solid rgba(103,232,249,0.9); border-radius: 8px; font-weight: 800; cursor: pointer; text-transform: uppercase; letter-spacing: 0.08em; box-shadow: 0 0 14px rgba(34,211,238,0.4);">
                        Guardar
                    </button>
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
                    ${oJ.map((U)=>{const N=U.id==="perfil",k=N?o:YJ[U.id]||"",b=Boolean(k),w=!N;return`
                            <div class="gallery-slot-card" data-slot-id="${U.id}" style="border:1px solid ${b?"rgba(74,222,128,0.95)":"rgba(248,113,113,0.95)"}; border-radius:10px; padding:10px; background:${b?"linear-gradient(155deg, rgba(20,83,45,0.95) 0%, rgba(21,128,61,0.82) 45%, rgba(5,46,22,0.96) 100%)":"linear-gradient(155deg, rgba(127,29,29,0.96) 0%, rgba(185,28,28,0.84) 45%, rgba(69,10,10,0.96) 100%)"}; box-shadow: inset 0 2px 0 rgba(255,255,255,0.24), inset 0 -2px 0 rgba(2,6,23,0.45), inset 0 0 0 1px ${b?"rgba(187,247,208,0.25)":"rgba(254,202,202,0.22)"}, 0 8px 16px rgba(2,6,23,0.45), 0 0 18px ${b?"rgba(74,222,128,0.35)":"rgba(248,113,113,0.3)"}; position: relative;">
                                <div style="position:absolute; inset:1px; border-radius:9px; pointer-events:none; background: linear-gradient(145deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.05) 22%, rgba(255,255,255,0) 42%, rgba(2,6,23,0.22) 78%, rgba(2,6,23,0.42) 100%);"></div>
                                <div style="font-size:10px; color:#f8fafc; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; position:relative;">${U.label}</div>
                                <div style="font-size:11px; color:${b?"#dcfce7":"#fee2e2"}; margin-top:6px; font-weight:800; position:relative; text-shadow: 0 1px 0 rgba(15,23,42,0.65);">
                                    Estado: ${b?"Asignada":"No asignada"}
                                </div>
                                <div style="margin-top:8px; border-radius:8px; overflow:hidden; aspect-ratio:4/3; border:1px dashed rgba(148,163,184,0.45); background: rgba(2,6,23,0.86); display:flex; align-items:center; justify-content:center;">
                                    ${b?`<img src="${k}" alt="Vista previa ${U.label}" onerror="${rZ}" style="width:100%; height:100%; object-fit:cover; display:block;" />`:'<span style="font-size:10px; color:#fca5a5; text-transform:uppercase; letter-spacing:0.08em; font-weight:700; text-align:center; padding:0 8px;">Sin foto designada</span>'}
                                </div>
                                <div style="display:grid; gap:6px; margin-top:8px;">
                                    <button
                                        type="button"
                                        onclick="event.stopPropagation(); openSlotActionModal('${U.id}', 'url');"
                                        style="width:100%; border:1px solid rgba(125,211,252,0.6); background: rgba(2,6,23,0.82); color:#e2e8f0; border-radius:8px; padding:6px 8px; font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; box-shadow: 0 0 12px rgba(34,211,238,0.22);"
                                    >
                                        Agregar URL/Archivo
                                    </button>
                                    ${w?`<button
                                        type="button"
                                        class="slot-gallery-select-btn"
                                        data-slot-id="${U.id}"
                                        onclick="event.stopPropagation(); selectSlotFromGallery('${U.id}');"
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
                    ${I.length?I.map((U,N)=>{const k=Y3(U),b=z1(U),w=aJ(b),UJ={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},s=UJ[D?.toUpperCase()]||UJ.DEFAULT;return`
                        <div
                            class="gallery-card"
                            data-gallery-index="${N}"
                            data-source-index="${U.sourceIndex}"
                            data-media-type="${eJ(U)}"
                            data-url="${k}"
                            data-compatible-slots="${b}"
                            draggable="${eJ(U)==="image"?"true":"false"}"
                            title="Abrir visor de pantalla completa"
                            style="
                                aspect-ratio: 1/1;
                                border-radius: 15px;
                                overflow: hidden;
                                border: 2px solid ${s.color};
                                box-shadow: 0 0 15px ${s.sombra};
                                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                                cursor: ${eJ(U)==="image"?"grab":"pointer"};
                                position: relative;
                                background: #0f172a;
                            "
                            onmouseover="this.style.transform='scale(1.08)'; this.style.boxShadow='0 0 35px ${s.color}, inset 0 0 15px ${s.sombra}'; this.style.zIndex='10';"
                            onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 0 15px ${s.sombra}'; this.style.zIndex='1';"
                        >
                           <button
                            onclick="event.stopPropagation(); window.opener.postMessage({type: 'DELETE_IMAGE', index: ${U.sourceIndex}, mediaType: '${eJ(U)}', id: '${F}'}, '*');"
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
                        ${eJ(U)==="video"?(()=>{const MJ=OQ(k);if(MJ)return`<div style="width: 100%; height: 100%; background: radial-gradient(circle at top, rgba(34,211,238,0.35), rgba(15,23,42,0.96)); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; padding: 18px; box-sizing:border-box; text-align:center;"><div style="width:64px; height:64px; border-radius:999px; border:1px solid rgba(34,211,238,0.5); background:rgba(15,23,42,0.75); display:flex; align-items:center; justify-content:center; color:#22d3ee; font-size:28px;">▶</div><div style="font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#e2e8f0;">Video embebido</div><div style="font-size:11px; color:#94a3b8; max-width:100%; word-break:break-word;">${MJ.provider.toUpperCase()}</div></div>`;return`<video src="${k}" style="width: 100%; height: 100%; object-fit: cover;" muted playsinline preload="metadata"></video>`})():`<img src="${k}" alt="Imagen de la galería" onerror="${rZ}" style="width: 100%; height: 100%; object-fit: cover;" />`}
                        <div style="position:absolute; left: 12px; top: 12px; z-index: 15; padding: 6px 10px; border-radius: 999px; background: rgba(2,6,23,0.72); border: 1px solid rgba(148,163,184,0.24); color: #e2e8f0; display:flex; align-items:center; justify-content:center; font-size: 10px; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase; backdrop-filter: blur(8px);">${eJ(U)==="video"?"VIDEO":"IMG"}</div>
                        ${b?`<div style="position:absolute; left: 50%; bottom: 10px; transform: translateX(-50%); z-index: 15; min-width: 52px; height: 30px; padding: 0 14px; border-radius: 999px; background: ${w.bg}; border: 1px solid ${w.border}; color: ${w.text}; display:flex; align-items:center; justify-content:center; font-size: 12px; font-weight: 900; letter-spacing: 0.24em; box-shadow: 0 0 14px ${w.glow}, 0 0 24px ${w.glow}; text-shadow: 0 0 10px ${w.glow}; backdrop-filter: blur(8px);">${b}</div>`:""}
                        ${U.autor?`<div style="position:absolute; left:10px; right:10px; bottom:${b?"48px":"10px"}; z-index:15; padding:6px 8px; border-radius:10px; background:rgba(2,6,23,0.74); border:1px solid rgba(148,163,184,0.3); color:#e2e8f0; font-size:10px; line-height:1.2; font-weight:700; letter-spacing:0.04em; text-align:left; backdrop-filter:blur(6px);">Autor: ${U.autor}</div>`:""}
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
                        ${I.map((U,N)=>{const k=eJ(U),b=OQ(U.url);return`
                            <div class="viewer-slide" id="viewer-slide-${N}">
                                ${k==="video"?b?`<iframe src="${b.src}" title="${b.title} ${N+1}" style="width:min(92vw, 1400px); height:min(75vh, 820px); border:0; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`:`<video src="${U.url}" controls playsinline preload="metadata" style="max-width:min(92vw, 1400px); max-height:calc(100vh - 64px); width:auto; height:auto; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;"></video>`:`<img src="${U.url}" alt="Vista completa ${N+1}" onerror="${rZ}" />`}
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
                        if (labelInput) labelInput.value = '${XJ[0]}';
                        if (authorInput) authorInput.value = '';
                        if (mediaTypeInput) mediaTypeInput.value = 'image';
                        if (slotInput) slotInput.value = '';
                        const galleryHint = document.getElementById('slotGalleryHint');
                        if (galleryHint) galleryHint.style.display = 'none';
                        activeSlotSelectionId = '';
                        updateSlotGalleryButtons();
                    }

                    function addMediaFromModal() {
                        const urlInput = document.getElementById('nuevaFotoUrl');
                        const localInput = document.getElementById('nuevoArchivoLocal');
                        const labelInput = document.getElementById('nuevaFotoEtiqueta');
                        const authorInput = document.getElementById('nuevaFotoAutor');
                        const mediaTypeInput = document.getElementById('nuevoArchivoTipo');
                        const normalizedUrl = (urlInput?.value || '').trim();
                        const selectedFiles = Array.from(localInput?.files || []);
                        const mediaType = mediaTypeInput?.value || 'image';
                        const label = labelInput?.value || '${XJ[0]}';
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
                                return;
                            }

                            Promise.all(selectedFiles.map(async (file) => {
                                const uploadTarget = file.type && file.type.startsWith('video/') ? 'perfiles/videos' : 'perfiles/fotos';
                                const uploadedUrl = await uploadLocalFileToStorage(file, uploadTarget);
                                return {
                                    url: uploadedUrl,
                                    type: file.type && file.type.startsWith('video/') ? 'video' : 'image'
                                };
                            }))
                                .then((filesData) => {
                                    filesData.forEach((fileData, index) => {
                                        postMedia(fileData.url, fileData.type, index === 0);
                                    });
                                    document.getElementById('miModal').style.display = 'none';
                                    resetAddMediaModalFields();
                                })
                                .catch((error) => {
                                    alert(error.message || 'No se pudo subir el archivo seleccionado.');
                                });
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
        `);q.document.close()},D3=()=>{const[q,_]=React.useState(null),D=NJ(null),B=NJ(null),[F,g]=V([]),i={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},YJ=(J="")=>{const Z=String(J||"").normalize("NFD").replace(/[̀-ͯ]/g,"").trim().toUpperCase();return i[Z]||i.DEFAULT},[o,I]=V(w1),[U,N]=V("EXPLORAR"),[k,b]=V(null),[w,UJ]=V(null),[s,MJ]=V(""),[qJ,vJ]=V({}),[RJ,fJ]=V({}),[QQ,G1]=V(!1),[k1,S1]=V(!1),[$0,x1]=V(eZ[0]||""),[IQ,VQ]=V(null),[P1,b1]=V(!1),[X0,cJ]=V(!1),[Y0,gQ]=V(!1),[ZJ,UQ]=V(null),[v1,DQ]=V(null),[BJ,CQ]=V(null),[I1,j0]=V(!1),[H0,hQ]=V(""),[$J,RQ]=React.useState(null),[RZ,yQ]=V(!1),[q0,g1]=V({x:0,y:0}),[jJ,W0]=V("promedio"),[sJ,BZ]=V("desc"),[TZ,h1]=V(!1),[TJ,BQ]=V({isOpen:!1,profile:null,category:null}),[AZ,mQ]=V({isOpen:!1,profile:null}),[IJ,zZ]=V("INICIAL"),[h,y1]=V("GENERAL"),[AJ,QJ]=V(null),[uQ,TQ]=V(null),[AQ,NZ]=V([]),[ZQ,_0]=V([]),[KJ,zQ]=V(!1),[gJ,MZ]=V(!1),[wJ,O0]=V(!1),[KZ,m1]=V(5),[L0,F0]=V(20),[E0,V0]=V(!1),[zJ,u1]=V(!0),[U0,$Q]=V(!1),[D0,fQ]=V(""),[C0,cQ]=V(""),[R0,dJ]=V(""),[B0,T0]=V(!1),[wZ,A0]=V(""),[GZ,z0]=V("url"),[N0,M0]=V(""),[K0,w0]=V(null),[G0,f1]=V(XJ[0]),[k0,S0]=V(""),[x0,sQ]=V(""),[nJ,c1]=V(""),[hJ,s1]=V([]),[P0,b0]=V(""),[dQ,v0]=V("url"),[I0,g0]=V(""),[h0,y0]=V(null),[m0,GJ]=V(""),[kZ,d1]=V(!1),[nQ,u0]=V(""),[pQ,f0]=V(""),[iQ,pJ]=V(""),[n1,p1]=V(!1),[SZ,xZ]=V(!1),[c0,PZ]=V({}),[bZ,s0]=V({}),[i1,lQ]=V({}),[l1,d0]=V({}),[XQ,t1]=V(!1),[tQ,o1]=V(!1),[a1,NQ]=V(""),iJ=NJ(null),oQ=NJ(null),vZ=NJ(null),MQ=NJ(null),KQ=NJ(null),aQ=NJ(!1),rQ=NJ(null),eQ=NJ(!1),n0=()=>({label:"",emoji:"\uD83D\uDCC1",coverImg:"",reglas:{nacionalidades:[],profesiones:[],ciudades:[],edadMin:"",edadMax:"",caracteristica:"Rostro",operador:"Superior a",umbral:""}}),JZ=()=>({nombre:"",nacionalidad:"",ciudad:"",profesion:"",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:[],gifs:[],videos:[]},batallaFotosPreferidas:tZ(),puntuaciones:bQ()}),[v,r]=V(JZ);e(()=>{if(!w){if(s)MJ("");return}if(w==="GENERAL"&&s!=="all")MJ("all")},[w,s]);const QZ=(J={})=>{const Z=JZ(),$=J&&typeof J==="object"?J:{},X=$?.puntuaciones&&typeof $.puntuaciones==="object"?{...Z.puntuaciones,...$.puntuaciones}:Z.puntuaciones;return{...$,...Z,nombre:typeof $.nombre==="string"?$.nombre:"",nacionalidad:typeof $.nacionalidad==="string"?$.nacionalidad:"",ciudad:typeof $.ciudad==="string"?$.ciudad:"",profesion:typeof $.profesion==="string"?$.profesion:"",fechaNacimiento:typeof $.fechaNacimiento==="string"?$.fechaNacimiento:"",estaturaCm:$.estaturaCm===void 0||$.estaturaCm===null?"":$.estaturaCm,fotos:Array.isArray($.fotos)?$.fotos:[],galeria:{fotos:Array.isArray($?.galeria?.fotos)?$.galeria.fotos:[],gifs:Array.isArray($?.galeria?.gifs)?$.galeria.gifs:[],videos:Array.isArray($?.galeria?.videos)?$.galeria.videos:[]},batallaFotosPreferidas:OJ($?.batallaFotosPreferidas),puntuaciones:X}},ZZ=(J={})=>{if(J?.isAnonymousGallery||J?.firebaseId===xJ)return;r(QZ(J));UQ(J.firebaseId||J.id||null);cJ(!0)},r1=(J={})=>{if(!(J?.firebaseId||J?.nombre))return;const $=D.current,X=$&&!$.closed?$:window.open("","_blank");D.current=X;Z0({targetWindow:X,profileName:J?.nombre||"",profession:J?.profesion||"",photos:[...(J?.galeria?.fotos||[]).map((Y,j)=>({...JJ(Y,"image"),sourceTag:"fotos",sourceIndex:j})),...(J?.galeria?.videos||[]).map((Y,j)=>({...JJ(Y,"video"),sourceTag:"videos",sourceIndex:j}))],editingId:J?.firebaseId||J?.id||"",battlePhotoPrefs:J?.batallaFotosPreferidas||J?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:J?.fotos?.[0]||""});X?.focus();pJ("");NQ("")},p0=(J="")=>{if(U==="anonimo")return;const Z=String(J||"").trim();UQ(null);r({...JZ(),profesion:Z});cJ(!0)},$Z=c(()=>{const Z=[{key:"nombre",label:"Nombre",value:v?.nombre},{key:"fotos.0",label:"Foto principal",value:v?.fotos?.[0]},{key:"profesion",label:"Profesión",value:v?.profesion},{key:"nacionalidad",label:"Nacionalidad",value:v?.nacionalidad},{key:"ciudad",label:"Ciudad",value:v?.ciudad},{key:"fechaNacimiento",label:"Fecha de nacimiento",value:v?.fechaNacimiento},{key:"estaturaCm",label:"Estatura",value:v?.estaturaCm}].map(($)=>{const X=typeof $.value==="string"?$.value.trim():$.value,Y=!(X===""||X===void 0||X===null),j=$.key==="fotos.0"?Y?"SI":"NO":Y?String(X):"Sin completar";return{...$,isComplete:Y,preview:j}});return{completed:Z.filter(($)=>$.isComplete),missing:Z.filter(($)=>!$.isComplete)}},[v]),R3=async({profileId:J,url:Z,tag:$="fotos",label:X="",type:Y="image",autor:j=""})=>{const L=(Z||"").trim(),W=XJ.includes(X)?X:"",O=rJ(L,Y);if(!J||!L)return[];const H=G.ref(`perfiles/${J}/galeria/${$}`),C=[...(await H.once("value")).val()||[],{url:L,label:W,type:O,autor:oZ(j)}];await H.set(C);if(J===ZJ)r((P)=>({...P,galeria:{...P.galeria||{fotos:[],gifs:[],videos:[]},[$]:C}}));return C},e1=async({profileId:J,sourceTag:Z,sourceIndex:$,label:X})=>{if(!J||!Z||!Number.isInteger($))return;const Y=XJ.includes(X)?X:"",j=G.ref(`perfiles/${J}/galeria/${Z}`),L=await j.once("value"),W=Array.isArray(L.val())?L.val():[];if(!W[$])return;const O=[...W],H=JJ(O[$],Z==="videos"?"video":"image");O[$]={...H,label:Y};await j.set(O);if(J===ZJ)r((E)=>({...E,galeria:{...E.galeria||{fotos:[],gifs:[],videos:[]},[Z]:O}}))},i0=async({profileId:J,sourceTag:Z,sourceIndex:$,url:X})=>{if(!J||!Z||!Number.isInteger($))return;const Y=(X||"").trim();if(!Y)return;const j=G.ref(`perfiles/${J}/galeria/${Z}`),L=await j.once("value"),W=Array.isArray(L.val())?L.val():[];if(!W[$])return;const O=[...W],H=Z==="videos"?"video":"image",E=JJ(O[$],H);O[$]={...E,url:Y,type:rJ(Y,H)};await j.set(O);if(J===ZJ)r((T)=>({...T,galeria:{...T.galeria||{fotos:[],gifs:[],videos:[]},[Z]:O}}))},J2=async({profileId:J,sourceTag:Z,sourceIndex:$})=>{if(!J||!Z||!Number.isInteger($))return;const X=G.ref(`perfiles/${J}/galeria/${Z}`),Y=await X.once("value"),j=Array.isArray(Y.val())?Y.val():[],L=j[$];if(!L)return;const W=j.filter((H,E)=>E!==$);await X.set(W);const O=JJ(L,Z==="videos"?"video":"image").url;if(O){const H=G.ref(`perfiles/${J}/batallaFotosPreferidas`),E=await H.once("value"),C={...OJ(E.val())};let P=!1;Object.keys(C).forEach((M)=>{if(C[M]===O){C[M]="";P=!0}});if(P)await H.set(C)}if(J===ZJ)r((H)=>({...H,galeria:{...H.galeria||{fotos:[],gifs:[],videos:[]},[Z]:W},batallaFotosPreferidas:(()=>{const E=OJ(H.batallaFotosPreferidas);if(!O)return E;const T={...E};Object.keys(T).forEach((C)=>{if(T[C]===O)T[C]=""});return T})()}))},B3=(J)=>new Promise((Z,$)=>{const X=new FileReader;X.onload=()=>Z(String(X.result||""));X.onerror=()=>$(new Error("No se pudo leer el archivo."));X.readAsDataURL(J)}),l0=(J,Z)=>{const $=String(Z||"").trim(),X=Array.isArray(J?.galeria?.fotos)?J.galeria.fotos:[];if(!$)return{...J,fotos:[""]};const j=X.some((L)=>JJ(L,"image").url===$)?X:[...X,{url:$,label:"C",type:"image"}];return{...J,fotos:[$],galeria:{...J.galeria||{},fotos:j}}},Q2=async(J)=>{const Z=J.target.files?.[0];if(!Z)return;try{const $=await VZ(Z,"perfiles/fotos");r((X)=>l0(X,$))}catch($){console.error("Error al cargar foto de perfil local:",$)}finally{J.target.value=""}},Z2=async({url:J,label:Z,autor:$="",forcedTag:X=""})=>{const Y=String(J||"").trim();if(!Y)throw new Error("Ingresá una URL o seleccioná un archivo.");const j=XJ.includes(Z)?Z:"",L=rJ(Y);if(!(L==="image"||R1.test(Y)||Boolean(OQ(Y))))throw new Error("Formato no válido. Usá imagen, video archivo o URL de YouTube/Vimeo.");const O=X||(L==="video"?"videos":"fotos"),H=G.ref(`${WQ}/${O}`),E=await H.once("value"),C=[...Array.isArray(E.val())?E.val():[],{url:Y,label:j,type:L,autor:String($||"").trim()}];await H.set(C)},$2=async(J="")=>{sQ("");try{let Z=String(N0||"").trim();if(GZ==="file"){if(!K0)throw new Error("Seleccioná un archivo local.");Z=await VZ(K0,"anonimo/galeria")}await Z2({url:Z,label:G0,autor:k0,forcedTag:J});M0("");w0(null);S0("");z0("url")}catch(Z){sQ(Z?.message||"No se pudo guardar en galería anónima.")}},X2=async()=>{const J=String(P0||"").trim();GJ("");if(!J){GJ("Completá el nombre del audio.");return}try{let Z=String(I0||"").trim();if(dQ==="file"){if(!h0){GJ("Seleccioná un archivo de audio.");return}Z=await VZ(h0,"anonimo/audios")}else if(!Z){GJ("Completá la URL del audio.");return}if(dQ==="url"&&!J3.test(Z)){GJ("La URL debe apuntar a un archivo de audio válido.");return}const $=G.ref(`${WQ}/audios`),X=await $.once("value"),j=[...Array.isArray(X.val())?X.val():[],{nombre:J,url:Z}];await $.set(j);b0("");g0("");y0(null);v0("url")}catch(Z){GJ("No se pudo guardar el audio en Firebase.")}},Y2=async(J)=>{GJ("");if(!Number.isInteger(J)||J<0)return;try{const Z=G.ref(`${WQ}/audios`),$=await Z.once("value"),X=Array.isArray($.val())?$.val():[];if(J>=X.length)return;const Y=X[J],j=X.filter((W,O)=>O!==J);await Z.set(j);const L=String(Y?.url||"").trim();if(L){if(nQ===L)u0("");if(pQ===L)f0("")}}catch(Z){GJ("No se pudo borrar el audio de Firebase.")}},T3=async(J,Z)=>{Z.stopPropagation();if(confirm("¿Estás seguro de que querés eliminar esto, corazón?"))try{await G.collection("galeria").doc(J).delete()}catch($){console.error("Error al borrar de Firebase:",$)}},[S,WJ]=V(n0()),IZ=()=>WJ(n0());e(()=>{if(window.lucide)window.lucide.createIcons()},[U,X0,Y0,F,$J,o]);e(()=>{if(D.current&&!D.current.closed&&ZJ)Z0({targetWindow:D.current,profileName:v.nombre,profession:v.profesion,photos:[...(v.galeria?.fotos||[]).map((J,Z)=>({...JJ(J,"image"),sourceTag:"fotos",sourceIndex:Z})),...(v.galeria?.videos||[]).map((J,Z)=>({...JJ(J,"video"),sourceTag:"videos",sourceIndex:Z}))],editingId:ZJ,battlePhotoPrefs:v.batallaFotosPreferidas,profilePhotoUrl:v.fotos?.[0]||""})},[ZJ,v.nombre,v.profesion,v.galeria?.fotos,v.galeria?.videos,v.batallaFotosPreferidas]);e(()=>{const J=async(R)=>{if(R.data.type==="ADD_IMAGE"){const{url:z,id:A,label:K,mediaType:n,autor:u}=R.data,l=n==="video"?"videos":"fotos";if(!A)return;const y=A===xJ?G.ref(`${WQ}/${l}`):G.ref(`perfiles/${A}/galeria/${l}`),_J=(await y.once("value")).val()||[];let p=(z||"").trim();if(!p)return;if(p.startsWith("data:"))try{const EJ=await(await fetch(p)).blob(),qQ=`media.${(EJ.type||"").split("/")[1]||"bin"}`,EZ=n==="video"?"perfiles/videos":"perfiles/fotos",p2=new File([EJ],qQ,{type:EJ.type||"application/octet-stream"});p=await VZ(p2,EZ)}catch(f){console.error("No se pudo subir el archivo local a Firebase Storage:",f);return}const t=[..._J,{url:p,label:XJ.includes(K)?K:"",type:rJ(p,n),autor:oZ(u)}];await y.set(t);r((f)=>({...f,galeria:{...f.galeria,[l]:t}}))}if(R.data.type==="DELETE_IMAGE"){const{index:z,id:A,mediaType:K}=R.data,n=K==="video"?"videos":"fotos";if(!A)return;const u=A===xJ?G.ref(`${WQ}/${n}`):G.ref(`perfiles/${A}/galeria/${n}`),y=(await u.once("value")).val()||[],DJ=y[z],_J=y.filter((t,f)=>f!==z);await u.set(_J);const p=JJ(DJ,K).url;if(p&&A!==xJ){const t=G.ref(`perfiles/${A}/batallaFotosPreferidas`),f=await t.once("value"),VJ={...OJ(f.val())};let qQ=!1;Object.keys(VJ).forEach((EZ)=>{if(VJ[EZ]===p){VJ[EZ]="";qQ=!0}});if(qQ)await t.set(VJ)}r((t)=>({...t,galeria:{...t.galeria,[n]:_J},batallaFotosPreferidas:(()=>{const f=OJ(t.batallaFotosPreferidas);if(!p)return f;const EJ={...f};Object.keys(EJ).forEach((VJ)=>{if(EJ[VJ]===p)EJ[VJ]=""});return EJ})()}))}if(R.data.type==="SET_BATTLE_PHOTO_PREF"){const{id:z,slotId:A,index:K,mediaType:n}=R.data,u=UZ(A);if(!z||z===xJ||!u||!Number.isInteger(K))return;const l=n==="video"?"videos":"fotos",_J=(await G.ref(`perfiles/${z}/galeria/${l}`).once("value")).val()||[],p=JJ(_J[K],n);if(!p.url||p.type!=="image")return;await G.ref(`perfiles/${z}/batallaFotosPreferidas/${A}`).set(p.url);r((f)=>({...f,batallaFotosPreferidas:{...OJ(f.batallaFotosPreferidas),[A]:p.url}}))}if(R.data.type==="SET_BATTLE_PHOTO_PREF_BY_URL"){const{id:z,slotId:A,url:K,mediaType:n,label:u}=R.data,l=UZ(A),y=String(K||"").trim();if(!z||z===xJ||!l||!y)return;if(n==="video")return;await G.ref(`perfiles/${z}/batallaFotosPreferidas/${A}`).set(y);r((_J)=>({..._J,batallaFotosPreferidas:{...OJ(_J.batallaFotosPreferidas),[A]:y}}))}if(R.data.type==="CLEAR_BATTLE_PHOTO_PREF"){const{id:z,slotId:A}=R.data,K=UZ(A);if(!z||z===xJ||!K)return;await G.ref(`perfiles/${z}/batallaFotosPreferidas/${A}`).set("");r((u)=>({...u,batallaFotosPreferidas:{...OJ(u.batallaFotosPreferidas),[A]:""}}))}};window.addEventListener("message",J);const Z=G.ref("perfiles"),$=G.ref(WQ);let X={},Y={};const j=4194304,L=(R)=>{if(!R||typeof R!=="object")return{};if(Array.isArray(R))return R.slice(0,100);return Object.fromEntries(Object.entries(R).slice(0,400).map(([z,A])=>{const K=QZ(A||{});return[z,{nombre:K.nombre,nacionalidad:K.nacionalidad,ciudad:K.ciudad,profesion:K.profesion,fechaNacimiento:K.fechaNacimiento,estaturaCm:K.estaturaCm,fotos:(K.fotos||[]).slice(0,1),galeria:{fotos:(K?.galeria?.fotos||[]).slice(0,8),gifs:(K?.galeria?.gifs||[]).slice(0,8),videos:(K?.galeria?.videos||[]).slice(0,8)},batallaFotosPreferidas:OJ(K.batallaFotosPreferidas),puntuaciones:K.puntuaciones}]}))},W=(R,z)=>{try{const A=JSON.stringify(z||{});if(A.length<=j){localStorage.setItem(R,A);return}const K=L(z),n=JSON.stringify(K);if(n.length<=j){localStorage.setItem(R,n);return}localStorage.removeItem(R);console.warn("Caché local omitida por tamaño excesivo.")}catch(A){console.warn("No se pudo persistir caché local:",A)}},O=(R)=>{try{const z=localStorage.getItem(R);if(!z)return{};const A=JSON.parse(z);return A&&typeof A==="object"?A:{}}catch(z){console.warn("No se pudo leer caché local:",z);return{}}},H=()=>{const R=Object.keys(X||{}).map((K)=>({...QZ(X[K]),firebaseId:K})),z=j3(Y||{}),A=Object.values(z.galeria||{}).some((K)=>Array.isArray(K)&&K.length>0);g(A?[...R,z]:R)};X=O(B1);Y=O(T1);H();Z.on("value",(R)=>{X=R.val()||{};W(B1,X);H()});$.on("value",(R)=>{Y=R.val()||{};W(T1,Y);const z=Array.isArray(Y?.audios)?Y.audios.map((A)=>({nombre:String(A?.nombre||"").trim(),url:String(A?.url||"").trim()})).filter((A)=>A.nombre&&A.url):[];s1(z);H()});I(w1);const E=G.ref("arenaBattleState");let T=!1,C=!1;const P=()=>{if(T&&C)G1(!0)};E.on("value",(R)=>{T=!0;vJ(R.val()||{});P()});const M=G.ref("arenaGlobalState");M.on("value",(R)=>{C=!0;fJ(R.val()||{});P()});return()=>{window.removeEventListener("message",J);Z.off();$.off();E.off();M.off()}},[]);e(()=>{const J=hJ.find(($)=>$.url===nQ),Z=hJ.find(($)=>$.url===pQ);[MQ.current,KQ.current].forEach(($)=>{if(!$)return;$.pause();$.currentTime=0});if(!kZ)return;if(J&&MQ.current){MQ.current.src=J.url;MQ.current.play().catch(()=>{})}if(Z&&KQ.current&&Z.url!==J?.url){KQ.current.src=Z.url;KQ.current.play().catch(()=>{})}},[kZ,nQ,pQ,hJ]);const yJ=(J)=>{if(!J)return"?";const Z=new Date,$=new Date(J);let X=Z.getFullYear()-$.getFullYear();if(Z.getMonth()<$.getMonth()||Z.getMonth()===$.getMonth()&&Z.getDate()<$.getDate())X--;return X},gZ=(J={})=>{return{...bQ(),...J?.puntuaciones||{}}},lJ={Rostro:["Rostro","Ojos","Boca","Cabello"],Cuerpo:["Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura"],Actitud:["Sensualidad","Carisma","Elegancia","Dulzura","Talento"]},hZ=(J={},Z=[])=>{if(!Array.isArray(Z)||!Z.length)return 0;const $=gZ(J);return Z.reduce((X,Y)=>X+(Number($[Y])||0),0)/Z.length},XZ=(J={})=>{return hZ(J,lJ.Rostro)},YZ=(J={})=>{return hZ(J,lJ.Cuerpo)},jZ=(J={})=>{return hZ(J,lJ.Actitud)},t0=(J={},Z="")=>{if(Z==="Rostro")return XZ(J);if(Z==="Cuerpo")return YZ(J);if(Z==="Actitud")return jZ(J);return 0},LJ=(J={})=>{const Z=Object.keys(lJ).map((X)=>t0(J,X));return(Z.reduce((X,Y)=>X+Y,0)/Z.length).toFixed(0)},HZ=(J)=>{const Z=[],$=(J.nacionalidad||"").toLowerCase(),X=(J.profesion||"").toLowerCase(),Y=(J.ciudad||"").toLowerCase(),j=yJ(J.fechaNacimiento);o.forEach((L)=>{const W=L.reglas;let O=!0;if(W.nacionalidades?.length>0&&!W.nacionalidades.some((H)=>$===H.toLowerCase()))O=!1;if(W.profesiones?.length>0&&!W.profesiones.some((H)=>X===H.toLowerCase()))O=!1;if(W.ciudades?.length>0&&!W.ciudades.some((H)=>Y===H.toLowerCase()))O=!1;if(W.edadMin&&(j==="?"||j<parseInt(W.edadMin)))O=!1;if(W.edadMax&&(j==="?"||j>parseInt(W.edadMax)))O=!1;if(W.caracteristica&&W.umbral){const H=gZ(J)[W.caracteristica]||0,E=parseInt(W.umbral);if(W.operador==="Superior a"&&H<=E)O=!1;if(W.operador==="Inferior a"&&H>=E)O=!1}if(O)Z.push(L.firebaseId)});return Z},j2=c(()=>["Todas",...new Set(F.map((J)=>J.nacionalidad).filter(Boolean))],[F]),A3=c(()=>["Todas",...new Set(F.map((J)=>J.profesion).filter(Boolean))],[F]),H2=c(()=>["Todas",...new Set(F.map((J)=>J.ciudad).filter(Boolean))],[F]),o0=c(()=>{return(F||[]).reduce((J,Z)=>{if(!Z?.firebaseId)return J;J[Z.firebaseId]=HZ(Z);return J},{})},[F,o]),YQ=c(()=>{return(F||[]).flatMap((J)=>{const Z=H3(J);return[...Array.isArray(J?.galeria?.fotos)?J.galeria.fotos.map((X,Y)=>({item:X,sourceTag:"fotos",sourceIndex:Y,fallbackType:"image"})):[],...Array.isArray(J?.galeria?.gifs)?J.galeria.gifs.map((X,Y)=>({item:X,sourceTag:"gifs",sourceIndex:Y,fallbackType:"image"})):[],...Array.isArray(J?.galeria?.videos)?J.galeria.videos.map((X,Y)=>({item:X,sourceTag:"videos",sourceIndex:Y,fallbackType:"video"})):[]].map(({item:X,sourceTag:Y,sourceIndex:j,fallbackType:L})=>{const W=JJ(X,L);return{id:`${J.firebaseId||J.nombre||"perfil"}-${Y}-${j}`,url:W.url,label:W.label,type:W.type,isGif:W.type==="image"&&L3(W.url),nombre:J.nombre||"Sin nombre",profesion:J.profesion||"Perfil",nacionalidad:J.nacionalidad||"",fotoPerfil:J.fotos?.[0]||W.url,profileId:J.firebaseId,sourceCharacterId:Z,sourceTag:Y,sourceIndex:j}})})},[F]),FJ=c(()=>{return YQ.filter((J)=>Boolean(J.url))},[YQ]),yZ=c(()=>{return FJ.reduce((J,Z)=>{const $=Z.label||"";if(!J[$])J[$]=[];J[$].push(Z);return J},{})},[FJ]),a0=c(()=>{return FJ.reduce((J,Z)=>{const $=Z.profileId||Z.nombre;if(!$)return J;if(!J[$])J[$]=[];J[$].push(Z);return J},{})},[FJ]),q2=c(()=>{return new Set(FJ.map((J)=>J.profileId).filter(Boolean)).size},[FJ]),r0=c(()=>{return Object.entries(o0||{}).reduce((J,[Z,$])=>{J[Z]=new Set(Array.isArray($)?$:[]);return J},{})},[o0]),mJ=c(()=>{if(h==="GENERAL")return[{id:"GENERAL",nombre:"General",profesion:"Archivo global",nacionalidad:"",fotoPerfil:FJ[0]?.url||"",photos:FJ.filter((J)=>!o2.includes(J.label||""))}];if(h==="PERSONAJE")return Object.entries(a0).map(([J,Z])=>{const $=Z[0]||{};return{id:`PERSONAJE-${J}`,profileId:$.profileId||null,nombre:$.nombre||"Sin nombre",profesion:$.profesion||"Perfil",nacionalidad:$.nacionalidad||"",fotoPerfil:$.fotoPerfil||$.url||"",photos:Z}}).filter((J)=>J.photos.length>0).sort((J,Z)=>J.nombre.localeCompare(Z.nombre,"es",{sensitivity:"base"}));if(h==="ETIQUETA")return XJ.map((J)=>{const Z=yZ[J]||[];return{id:`ETIQUETA-${J}`,nombre:`Etiqueta ${J}`,profesion:"Archivo por etiqueta",nacionalidad:"",fotoPerfil:Z[0]?.url||"",photos:Z}}).filter((J)=>J.photos.length>0);return(o||[]).map((J)=>{const Z=FJ.filter(($)=>{if(!$.profileId)return!1;const X=r0[$.profileId];return X?X.has(J.firebaseId):!1});return{id:`CARPETA-${J.firebaseId}`,nombre:J.label||"Carpeta sin nombre",profesion:"Categoría",nacionalidad:"",fotoPerfil:J.coverImg||Z[0]?.fotoPerfil||Z[0]?.url||"",photos:Z}}).filter((J)=>J.photos.length>0).sort((J,Z)=>J.nombre.localeCompare(Z.nombre,"es",{sensitivity:"base"}))},[FJ,yZ,a0,o,h,r0]),tJ=c(()=>{if(h==="GENERAL")return mJ[0]||null;if(!uQ)return null;return mJ.find((J)=>J.id===uQ.id)||null},[mJ,uQ,h]),kJ=c(()=>{if(h!=="PERSONAJE")return[];return mJ.filter((J)=>AQ.includes(J.id))},[mJ,h,AQ]),wQ=c(()=>{if(h==="PERSONAJE")return kJ.flatMap((J)=>J.photos||[]);if(h==="ETIQUETA"){if(!ZQ.length)return[];return FJ.filter((J)=>ZQ.includes(J.label))}return tJ?.photos||FJ},[h,kJ,tJ,FJ,ZQ]),W2=c(()=>{const J=wQ.reduce((Z,$)=>{const X=$.label||"";if(!X)return Z;Z[X]=(Z[X]||0)+1;return Z},{});return XJ.reduce((Z,$)=>{Z[$]=J[$]||0;return Z},{})},[wQ]),m=c(()=>{return wQ.filter((J)=>h==="ETIQUETA"?!0:IJ==="INICIAL"?J.label!=="X":IJ==="100"?!0:J.label===IJ)},[wQ,IJ,h]),mZ=c(()=>{return m.slice(0,L0)},[m,L0]),_2=mZ.length<m.length,qZ=D1[h]||h,WZ=h!=="GENERAL"&&h!=="ETIQUETA",e0=c(()=>{if(h!=="PERSONAJE")return[];return mJ.filter((J)=>!AQ.includes(J.id))},[mJ,h,AQ]),x=AJ===null?null:m[_Q(AJ,m.length)]||null,SJ=c(()=>{return YQ.filter((J)=>{if(J.type!=="image")return!1;if(!J.url)return!0;return Boolean(c0[J.id])})},[YQ,c0]),J1=c(()=>{const J=SJ.reduce((Z,$)=>{const X=$.profileId||$.nombre||"sin-perfil";if(!Z[X])Z[X]={id:X,nombre:$.nombre||"Sin nombre",profesion:$.profesion||"Perfil",nacionalidad:$.nacionalidad||"",fotos:[]};Z[X].fotos.push($);return Z},{});return Object.values(J).map((Z)=>({...Z,fotos:Z.fotos.sort(($,X)=>($.label||"").localeCompare(X.label||"","es",{sensitivity:"base"}))})).sort((Z,$)=>Z.nombre.localeCompare($.nombre,"es",{sensitivity:"base"}))},[SJ]);e(()=>{if(!x){$Q(!1);fQ("");cQ("");dJ("");return}$Q(!1);fQ(x.label||"");cQ(x.url||"");dJ("")},[x]);e(()=>{if(U!=="GALERIA"){TQ(null);QJ(null)}},[U]);e(()=>{F0(40);QJ(null)},[h,IJ,ZQ,AQ,uQ,F.length]);e(()=>{TQ(null);QJ(null);NZ([]);_0([])},[h]);e(()=>{if(AJ===null)return;if(!m.length){QJ(null);return}if(AJ>=m.length)QJ(0)},[m,AJ]);e(()=>{if(AJ===null)return;const J=(Z)=>{if(Z.key==="Escape"){QJ(null);return}if(!m.length)return;if(Z.key==="ArrowRight")QJ(($)=>_Q(($??0)+1,m.length));if(Z.key==="ArrowLeft")QJ(($)=>_Q(($??0)-1,m.length))};window.addEventListener("keydown",J);return()=>window.removeEventListener("keydown",J)},[m.length,AJ]);e(()=>{if(AJ===null){zQ(!1);MZ(!1);O0(!1)}},[AJ]);e(()=>{if(!RZ)return;const J=($)=>{if(B.current&&!B.current.contains($.target))yQ(!1)},Z=($)=>{if($.key==="Escape")yQ(!1)};document.addEventListener("mousedown",J);window.addEventListener("keydown",Z);return()=>{document.removeEventListener("mousedown",J);window.removeEventListener("keydown",Z)}},[RZ]);e(()=>{let J=!1;const Z=YQ.filter((X)=>X.type==="image"&&X.url);if(!Z.length){PZ({});return}(async()=>{const X=8,Y=[];for(let L=0;L<Z.length;L+=X){const W=Z.slice(L,L+X),O=await Promise.all(W.map(async(H)=>({id:H.id,isBroken:await N1(H.url)})));Y.push(...O);if(J)return}if(J)return;const j=Y.reduce((L,W)=>{L[W.id]=W.isBroken;return L},{});PZ(j)})();return()=>{J=!0}},[YQ]);e(()=>{if(!SZ)return;const J=SJ.reduce((Z,$)=>{Z[$.id]=$.url;return Z},{});s0(J);d0({})},[SZ,SJ]);e(()=>{if(iJ.current){clearTimeout(iJ.current);iJ.current=null}if(!KJ||!x)return;if(x.type==="video")return;const J=KZ*1000;iJ.current=setTimeout(()=>{QJ((Z)=>C1(Z,m,gJ))},J);return()=>{if(iJ.current){clearTimeout(iJ.current);iJ.current=null}}},[KJ,x,m,gJ,KZ]);e(()=>{if(!x||!aQ.current)return;aQ.current=!1;requestAnimationFrame(()=>{L2()})},[x]);const uZ=typeof window!=="undefined"?window.matchMedia("(max-width: 1023px), (pointer: coarse)").matches:!1,Q1=()=>{const J=oQ.current;if(!J)return;J.classList.add("mobile-gallery-fallback-fullscreen");document.body.classList.add("mobile-gallery-fallback-active")},O2=()=>{const J=oQ.current;if(J)J.classList.remove("mobile-gallery-fallback-fullscreen");document.body.classList.remove("mobile-gallery-fallback-active")},L2=()=>{const J=oQ.current;if(!J)return;if(document.fullscreenElement)return;const Z=J.requestFullscreen||J.webkitRequestFullscreen||J.msRequestFullscreen;if(typeof Z==="function")Promise.resolve(Z.call(J)).catch(()=>{if(uZ)Q1()});else if(uZ)Q1()},F2=()=>{if(!document.fullscreenElement)return;const J=document.exitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen;if(typeof J==="function")Promise.resolve(J.call(document)).catch(()=>{})},Z1=(J,{autoplay:Z=!1,fromGeneralPlay:$=!1}={})=>{aQ.current=!!Z;QJ(J);zQ(Z);O0($);$Q(!$)},E2=(J)=>{if(!J)return;NZ((Z)=>Z.includes(J)?Z:[...Z,J]);QJ(null)},V2=(J)=>{if(!J)return;NZ((Z)=>Z.filter(($)=>$!==J));QJ(null)},U2=(J)=>{if(!J)return;_0((Z)=>Z.includes(J)?Z.filter(($)=>$!==J):[...Z,J]);QJ(null)},D2=async()=>{if(!(typeof window!=="undefined"&&typeof window.JSZip!=="undefined")){window.alert("No se pudo iniciar la descarga: falta la librería ZIP.");return}if(!m.length){window.alert("No hay archivos visibles para descargar.");return}const Z=(X="")=>String(X||"").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[\/:*?"<>|]/g,"-").replace(/\s+/g," ").trim(),$=(X="")=>{return((String(X||"").split("?")[0].split("#")[0].match(/\.([a-zA-Z0-9]{2,5})$/)||[])[1]||"jpg").toLowerCase()};V0(!0);try{const X=new window.JSZip,Y=m.filter((z)=>z?.url);let j=0,L=0,W=0;const H=String(window.GALLERY_DOWNLOAD_PROXY||"").trim()||"https://corsproxy.io/?",E=(z)=>{if(!H)return"";if(H.includes("{url}"))return H.replace("{url}",encodeURIComponent(z));const A=H.endsWith("?")||H.endsWith("=")?"":H.includes("?")?"&":"?";return`${H}${A}${encodeURIComponent(z)}`},T=async(z)=>{const A=await fetch(z,{mode:"cors"});if(!A.ok)throw new Error(`HTTP ${A.status}`);return{blob:await A.blob(),viaProxy:!1}};for(let z=0;z<Y.length;z+=1){const A=Y[z],K=Z(A.nombre||"Sin nombre")||"Sin nombre",n=$(A.url),u=Z(A.label||"sin-etiqueta")||"sin-etiqueta",l=`${String(z+1).padStart(4,"0")}_${u}.${n}`;try{let y;try{y=await T(A.url)}catch(DJ){const _J=E(A.url);if(!_J)throw DJ;const p=await fetch(_J,{mode:"cors"});if(!p.ok)throw new Error(`Proxy HTTP ${p.status}`);y={blob:await p.blob(),viaProxy:!0}}X.folder(K).file(l,y.blob);j+=1;if(y.viaProxy)W+=1}catch(y){L+=1;console.warn("No se pudo descargar un archivo de la galería:",A.url,y)}}if(!j){window.alert("No se pudo descargar ningún archivo. Revisá permisos CORS/URLs.");return}const C=await X.generateAsync({type:"blob"}),P=URL.createObjectURL(C),M=document.createElement("a"),R=new Date().toISOString().slice(0,10);M.href=P;M.download=`galeria-completa-${R}.zip`;document.body.appendChild(M);M.click();M.remove();URL.revokeObjectURL(P);if(L>0)window.alert(`Descarga completada con avisos: ${j} archivos incluidos, ${L} omitidos y ${W} recuperados por proxy.`)}catch(X){console.error("Error al generar ZIP de galería:",X);window.alert("No se pudo crear el ZIP de la galería.")}finally{V0(!1)}},$1=()=>{aQ.current=!1;zQ(!1);QJ(null);O2();F2()},GQ=()=>QJ((J)=>C1(J,m,gJ)),z3=()=>QJ((J)=>_Q((J??0)-1,m.length)),C2=async()=>{if(!x?.profileId||!x?.sourceTag||!Number.isInteger(x?.sourceIndex))return;const J=(C0||"").trim();if(!J){dJ("La URL no puede estar vacía.");return}if(A1(J)||!HJ(J,"")){dJ("La URL está bloqueada o no es válida.");return}try{T0(!0);dJ("");if(J!==x.url)await i0({profileId:x.profileId,sourceTag:x.sourceTag,sourceIndex:x.sourceIndex,url:J});await e1({profileId:x.profileId,sourceTag:x.sourceTag,sourceIndex:x.sourceIndex,label:D0});$Q(!1)}catch(Z){dJ("No se pudo guardar la edición del ítem.");console.error("Error al actualizar etiqueta de la multimedia:",Z)}finally{T0(!1)}},R2=(J,Z)=>{s0(($)=>({...$,[J]:Z}))},X1=(J,Z)=>{if(!J)return;d0(($)=>({...$,[J]:Boolean(Z)}))},B2=(J)=>{const Z=(bZ[J?.id]||J?.url||"").trim();if(!Z)return;window.open(Z,"_blank","noopener,noreferrer")},T2=async(J)=>{if(!J)return;const Z=(bZ[J.id]||"").trim();if(!Z)return;lQ(($)=>({...$,[J.id]:!0}));try{if(Z!==J.url)await i0({profileId:J.profileId,sourceTag:J.sourceTag,sourceIndex:J.sourceIndex,url:Z});const $=await N1(Z);PZ((X)=>({...X,[J.id]:$}));if(!$)X1(J.id,!1)}catch($){console.error("Error al actualizar URL rota:",$)}finally{lQ(($)=>({...$,[J.id]:!1}))}},A2=async(J)=>{if(!J)return;if(!window.confirm("¿Eliminar esta foto rota de la galería?"))return;lQ(($)=>({...$,[J.id]:!0}));try{await J2({profileId:J.profileId,sourceTag:J.sourceTag,sourceIndex:J.sourceIndex})}catch($){console.error("Error al eliminar foto rota:",$)}finally{lQ(($)=>({...$,[J.id]:!1}))}},z2=c(()=>{if(h==="PERSONAJE")return kJ.length?`${kJ.length} personaje${kJ.length>1?"s":""} seleccionado${kJ.length>1?"s":""}`:"Sin personajes seleccionados";if(tJ&&WZ)return tJ.nombre;return qZ},[h,kJ,tJ,WZ,qZ]),N2=(J)=>{J.preventDefault();const Z={...v};if(ZJ)G.ref(`perfiles/${ZJ}`).set(Z).then(()=>{cJ(!1);UQ(null)}).catch(($)=>console.error("Error al excitar la base de datos:",$));else G.ref("perfiles").push(Z).then(()=>{cJ(!1);r(JZ())}).catch(($)=>console.error("No pudo entrar el perfil:",$))},M2=async(J)=>{J.preventDefault();const{firebaseId:Z,...$}=S,X={...$,type:"custom"};try{if(Z)await G.ref(`categorias/${Z}`).update(X);else await G.ref("categorias").push(X);gQ(!1);IZ()}catch(Y){console.error("La categoría no quiso guardarse:",Y)}},K2=async(J)=>{if(!J)return;try{await G.ref(`categorias/${J}`).remove();I((Z)=>Z.filter(($)=>$.firebaseId!==J));RQ((Z)=>Z===J?null:Z)}catch(Z){console.error("No se pudo borrar la categoría:",Z);alert("No se pudo borrar la carpeta. Probá de nuevo.")}},fZ=(J)=>{if(!J?.firebaseId)return;hQ("");CQ(J);j0(!0)},w2=()=>{if(!ZJ)return;const J=F.find((Z)=>Z.firebaseId===ZJ);if(!J)return;fZ(J)},cZ=()=>{j0(!1);DQ(null);CQ(null)},G2=async(J)=>{if(!J)return;await G.ref(`perfiles/${J}`).remove();g((Z)=>Z.filter(($)=>$.firebaseId!==J))},k2=async()=>{if(!BJ?.firebaseId)return;try{await G2(BJ.firebaseId);hQ("");cJ(!1);if(ZJ===BJ.firebaseId)UQ(null);cZ()}catch(J){console.error("No se pudo borrar el perfil:",J);hQ("No se pudo borrar el perfil en Firebase. Probá de nuevo.")}},_Z=()=>{yQ(!1);CQ(null)},S2=(J,Z)=>{J.preventDefault();yQ(!0);g1({x:J.clientX,y:J.clientY});CQ(Z)},x2=()=>{if(!BJ)return;r(QZ(BJ));UQ(BJ.firebaseId);cJ(!0);_Z()},P2=async()=>{if(!BJ?.firebaseId)return;if(!confirm("¿Borrar perfil? Esta acción también lo elimina de Firebase.")){_Z();return}try{await G.ref(`perfiles/${BJ.firebaseId}`).remove();g((Z)=>Z.filter(($)=>$.firebaseId!==BJ.firebaseId));_Z()}catch(Z){console.error("No se pudo borrar el perfil:",Z);alert("No se pudo borrar el perfil. Probá de nuevo.");_Z()}},Y1=(J)=>{const Z=J?.estaturaCm;if(Z===void 0||Z===null||Z==="")return"Sin dato";const $=Number(Z);if(Number.isNaN($)||$<=0)return"Sin dato";return`${Math.round($)} cm`},sZ=(J="")=>String(J||"").trim().toLowerCase(),b2=(J="")=>String(J||"").trim(),kQ=(J=[])=>[...J||[]].filter((Z)=>Z?.firebaseId&&(Z?.nombre||"").trim()).sort((Z,$)=>(Z.nombre||"").localeCompare($.nombre||"","es",{sensitivity:"base"})).map((Z)=>Z.firebaseId),j1=(J=[],Z="GENERAL")=>{const $=String(Z||"GENERAL").trim().toUpperCase(),X=[...J||[]].filter((W)=>W?.firebaseId&&(W?.nombre||"").trim()).sort((W,O)=>(W.nombre||"").localeCompare(O.nombre||"","es",{sensitivity:"base"}));if($==="GENERAL")return[{key:"all",label:"Todas",typeLabel:"General",ids:X.map((W)=>W.firebaseId)}];if($==="EDADES"){const W={"18-28":{key:"18-28",label:"18–28",typeLabel:"Edad",ids:[]},"29-39":{key:"29-39",label:"29–39",typeLabel:"Edad",ids:[]},"40+":{key:"40+",label:"40–50+",typeLabel:"Edad",ids:[]}};X.forEach((O)=>{const H=yJ(O.fechaNacimiento);if(!Number.isFinite(H)||H<18)return;if(H<=28)W["18-28"].ids.push(O.firebaseId);else if(H<=39)W["29-39"].ids.push(O.firebaseId);else W["40+"].ids.push(O.firebaseId)});return Object.values(W)}const Y=$==="NACIONALIDADES"?"nacionalidad":"profesion",j=$==="NACIONALIDADES"?"Nacionalidad":"Profesión",L=X.reduce((W,O)=>{const H=sZ(O?.[Y]);if(!H)return W;if(!W[H])W[H]={key:H,label:b2(O?.[Y])||H,typeLabel:j,ids:[]};W[H].ids.push(O.firebaseId);return W},{});return Object.values(L).sort((W,O)=>W.label.localeCompare(O.label,"es",{sensitivity:"base"}))},dZ=(J=[],Z="GENERAL",$="")=>{const X=[...J||[]].filter((W)=>W?.firebaseId&&(W?.nombre||"").trim()).sort((W,O)=>(W.nombre||"").localeCompare(O.nombre||"","es",{sensitivity:"base"}));if(Z==="GENERAL"){const W=X.map((O)=>O.firebaseId);return{groupedIds:W.length>1?[{key:"general",label:"General",typeLabel:"General",ids:W}]:[],orderedIds:W}}const Y=j1(X,Z),j=sZ($),L=Y.filter((W)=>{if(!j||j==="all")return!0;return sZ(W.key)===j}).filter((W)=>W.ids.length>=2);return{groupedIds:L,orderedIds:L.flatMap((W)=>W.ids)}},uJ=(J,Z)=>[J,Z].sort().join("__"),jQ=(J)=>{if(!J||typeof J!=="object")return null;const Z=String(J.winnerId||"").trim(),$=String(J.loserId||"").trim();if(!Z||!$||Z===$)return null;return{winnerId:Z,loserId:$,reason:J.reason==="transitive"?"transitive":"direct",playedAt:Number.isFinite(J.playedAt)?J.playedAt:null}},OZ=(J={},Z="")=>!!jQ(J?.[Z]),SQ=(J={},Z=[])=>{const $=new Set((Z||[]).filter(Boolean)),X={},Y={},j={};Object.entries(J||{}).forEach(([H,E])=>{const T=jQ(E);if(!T)return;const{winnerId:C,loserId:P}=T;if($.size&&(!$.has(C)||!$.has(P)))return;const M=uJ(C,P),R={winnerId:C,loserId:P,reason:"direct",playedAt:T.playedAt??Date.now()};X[M]=R;Y[M]=R;if(!j[C])j[C]=new Set;j[C].add(P)});new Set([...Object.keys(j),...Object.values(j).flatMap((H)=>[...H])]).forEach((H)=>{const E=[...j[H]||[]],T=new Set;while(E.length){const C=E.shift();if(!C||T.has(C)||C===H)continue;T.add(C);const P=uJ(H,C);if(!Y[P])Y[P]={winnerId:H,loserId:C,reason:"transitive",playedAt:null};(j[C]||[]).forEach((M)=>{if(!T.has(M))E.push(M)})}});const W=Object.fromEntries(Object.entries(j).map(([H,E])=>[H,[...E]])),O=I2(Y);return{directMatchups:X,matchups:Y,victoryGraph:W,stats:O}},xQ=(J,Z={})=>{const $=CJ(J);if(!$)return null;const X=kQ(F),Y=SQ(Z?.directMatchups||Z?.matchups||{},X);return{arenaName:$,orderedIds:X,...Y}},v2=(J=[],Z={})=>{for(let $=0;$<J.length-1;$++)for(let X=$+1;X<J.length;X++){const Y=uJ(J[$],J[X]);if(!OZ(Z,Y))return[J[$],J[X]]}return null},nZ=(J=[],Z={},$={})=>{const X={...Z||{},...$||{}};for(const Y of J){const j=v2(Y?.ids||[],X);if(j)return j}return null},PQ=(J=[],Z,$="")=>{if(!Z)return null;return J.find((X)=>{const Y=X?.ids||[];if(!Y.includes(Z))return!1;return!$||Y.includes($)})||null},I2=(J={})=>{return Object.keys(J||{}).reduce((Z,$)=>{const X=jQ(J[$]);if(!X)return Z;const{winnerId:Y,loserId:j}=X,L=Z[Y]||{wins:0,battles:0},W=Z[j]||{wins:0,battles:0};return{...Z,[Y]:{wins:L.wins+1,battles:L.battles+1},[j]:{wins:W.wins,battles:W.battles+1}}},{})},H1=(J="",Z="")=>{const $=String(Z||"").trim();if(!J||!$)return!1;return J.endsWith(`::${$}`)},g2=(J,Z)=>{const $=jQ(Z);if(!$||$.reason!=="direct")return J||null;const X=jQ(J);if(!X||X.reason!=="direct")return $;const Y=X.playedAt??0;return($.playedAt??0)>=Y?$:X},q1=(J,Z=qJ)=>{const $=String(J||"").trim();if(!$)return SQ({},[]);const X={};Object.entries(Z||{}).forEach(([j,L])=>{if(!H1(j,$))return;const W=L?.directMatchups||{};Object.entries(W).forEach(([O,H])=>{X[O]=g2(X[O],H)})});const Y=[...F||[]].map((j)=>j?.firebaseId).filter(Boolean).sort((j,L)=>String(j).localeCompare(String(L),"es",{sensitivity:"base"}));return SQ(X,Y)},W1=(J,Z)=>{const X=(q1(J).stats||{})[Z]||{wins:0,battles:0},Y=X.battles?Math.round(X.wins/X.battles*100):0;return{...X,score:Y}},_1=(J,Z=qJ)=>{const $=q1(J,Z).stats||{};return[...F||[]].filter((X)=>X?.firebaseId).reduce((X,Y)=>{const j=$[Y.firebaseId]||{wins:0,battles:0};X[Y.firebaseId]=j.battles?Math.round(j.wins/j.battles*100):0;return X},{})},N3=(J=[],Z={})=>{for(let $=0;$<J.length-1;$++)for(let X=$+1;X<J.length;X++){const Y=uJ(J[$],J[X]);if(!OZ(Z,Y))return[J[$],J[X]]}return null},O1=(J,Z,$=null)=>{if(!Z)return null;const X=F3.includes(Z.mode)?Z.mode:"GENERAL",Y=String(Z.groupKey||"all").trim().toLowerCase()||"all",j=dZ(F,X,Y),L=j.groupedIds||[],W=j.orderedIds||[],O=xQ(J,$||RJ?.[CJ(J)]||{}),H=O?.directMatchups||{},E=O?.matchups||{},T=O?.victoryGraph||{},C=O?.stats||{},P=Z.championId,M=Z.challengerId,R=PQ(L,P,M),z=!!P&&!!M&&P!==M&&!!R&&!OZ(E,uJ(P,M)),A=L.length?nZ(L,Z.matchups||{},E):null,K=z?[P,M]:A,n=!A,u=PQ(L,K?.[0],K?.[1]);return{...Z,mode:X,groupKey:Y,groupedIds:L,orderedIds:W,stats:C,directMatchups:H,matchups:E,victoryGraph:T,championId:K?K[0]:null,challengerId:K?K[1]:null,activeGroupKey:u?.key||null,activeGroupLabel:u?`${u.typeLabel}: ${u.label}`:"",isFinished:n}};e(()=>{if(!F.length)return;const J={},Z=[];Object.entries(qJ||{}).forEach(([$,X])=>{const{arenaName:Y}=K1($),j=O1(Y,X,RJ?.[CJ(Y)]);if(!j)return;if(JSON.stringify(X)===JSON.stringify(j))return;J[$]=j;Z.push(G.ref(`arenaBattleState/${$}`).set(j).catch((W)=>console.error("No se pudo normalizar el estado del arena:",W)))});if(!Object.keys(J).length)return;vJ(($)=>({...$,...J}));Promise.all(Z).catch(()=>{})},[qJ,RJ,F,QQ]);e(()=>{if(!F.length)return;const J={};Object.entries(qJ||{}).forEach(([X,Y])=>{const{arenaName:j}=K1(X),L=CJ(j);if(!L)return;if(!J[L])J[L]={};Object.entries(Y?.directMatchups||{}).forEach(([W,O])=>{const H=jQ(O);if(!H)return;J[L][W]={winnerId:H.winnerId,loserId:H.loserId,reason:"direct",playedAt:H.playedAt??Date.now()}})});const Z=[],$={};Object.entries(J).forEach(([X,Y])=>{const j=CJ(X);if(!j||RJ?.[j])return;const L=xQ(X,{directMatchups:Y});if(!L)return;$[j]=L;Z.push(G.ref(`arenaGlobalState/${j}`).set(L).catch((W)=>console.error("No se pudo migrar arenaGlobalState:",W)))});if(!Object.keys($).length)return;fJ((X)=>({...X,...$}));Promise.all(Z).catch(()=>{})},[qJ,RJ,F]);const L1=(J,Z=w,$=s)=>{const X=[...F].filter((R)=>R?.firebaseId&&(R?.nombre||"").trim()).sort((R,z)=>(R.nombre||"").localeCompare(z.nombre||"","es",{sensitivity:"base"}));if(!QQ||X.length<2)return;const Y=String(Z||"GENERAL").trim().toUpperCase(),j=dZ(X,Y,$),L=j.groupedIds||[],W=j.orderedIds||[],O=CJ(J),H=xQ(J,RJ?.[O]||{}),E=H?.matchups||{},T=nZ(L,{},E);if(!T)return;const C=PQ(L,T[0],T[1]),P={mode:Y,groupKey:String($||"").trim().toLowerCase()||"all",groupedIds:L,orderedIds:W,stats:H?.stats||{},directMatchups:H?.directMatchups||{},matchups:E,victoryGraph:H?.victoryGraph||{},championId:T[0],challengerId:T[1],activeGroupKey:C?.key||null,activeGroupLabel:C?`${C.typeLabel}: ${C.label}`:"",isFinished:!1},M=EQ(J,Z,$);if(!M)return;vJ((R)=>({...R,[M]:P}));if(!RJ?.[O]){fJ((R)=>({...R,[O]:H}));G.ref(`arenaGlobalState/${O}`).set(H).catch((R)=>console.error("No se pudo guardar arenaGlobalState inicial:",R))}G.ref(`arenaBattleState/${M}`).set(P).catch((R)=>console.error("No se pudo guardar el estado del arena:",R))},h2=async(J,Z,$)=>{if(!J)return;try{await G.ref(`perfiles/${J}/puntuaciones/${Z}`).set($)}catch(X){console.error("No se pudo actualizar score del arena:",X)}},F1=(J,Z,$=w,X=s)=>{const Y=EQ(J,$,X),j=qJ[Y];if(!j||j.isFinished)return;const L=CJ(J),W=xQ(J,RJ?.[L]||{}),O=Array.isArray(j.groupedIds)&&j.groupedIds.length?j.groupedIds:dZ(F,j.mode||"GENERAL",j.groupKey||"all").groupedIds,{championId:H,challengerId:E}=j;if(Z!==H&&Z!==E)return;const T=Z===H?E:H;if(!Z||!T)return;const C=uJ(Z,T),P={...W?.directMatchups||{},[C]:{winnerId:Z,loserId:T,reason:"direct",playedAt:Date.now()}},M=SQ(P,kQ(F)),R=M.matchups,z=M.stats||{},A=PQ(O,Z,T),n=((t,f,EJ)=>{if(!f)return null;for(const VJ of t){if(!VJ||VJ===f)continue;const qQ=uJ(f,VJ);if(!OZ(EJ,qQ))return VJ}return null})(A?.ids||[],Z,R),u=n?[Z,n]:nZ(O,j.matchups||{},R),l=PQ(O,u?.[0],u?.[1]),y={arenaName:L,orderedIds:kQ(F),directMatchups:M.directMatchups,matchups:R,victoryGraph:M.victoryGraph,stats:z},DJ={...j,groupedIds:O,directMatchups:y.directMatchups,stats:z,matchups:R,victoryGraph:M.victoryGraph,championId:u?u[0]:null,challengerId:u?u[1]:null,activeGroupKey:l?.key||null,activeGroupLabel:l?`${l.typeLabel}: ${l.label}`:"",isFinished:!u},_J={...qJ||{},[Y]:DJ},p=_1(J,_J);g((t)=>t.map((f)=>{if(!f?.firebaseId||!Object.prototype.hasOwnProperty.call(p,f.firebaseId))return f;const EJ=p[f.firebaseId];return{...f,puntuaciones:{...f.puntuaciones||{},[J]:EJ}}}));Object.entries(p).forEach(([t,f])=>{h2(t,J,f)});vJ((t)=>({...t,[Y]:DJ}));fJ((t)=>({...t,[L]:y}));Promise.all([G.ref(`arenaGlobalState/${L}`).set(y),G.ref(`arenaBattleState/${Y}`).set(DJ)]).catch((t)=>console.error("No se pudo guardar avance de batallas:",t))},y2=async()=>{if(!window.confirm("Esto va a poner TODAS las calificaciones en 0. ¿Continuar?"))return;try{await Promise.all((F||[]).map((Z)=>{if(!Z?.firebaseId)return Promise.resolve();return G.ref(`perfiles/${Z.firebaseId}/puntuaciones`).set(bQ())}));g((Z)=>Z.map(($)=>({...$,puntuaciones:bQ()})));vJ({});fJ({});await G.ref("arenaBattleState").remove();await G.ref("arenaGlobalState").remove();alert("Calificaciones reiniciadas en 0 para todos los items.")}catch(Z){console.error("No se pudieron resetear las calificaciones:",Z);alert("No se pudo completar el reseteo.")}},m2=async(J,Z=w,$=s)=>{if(!J){alert("Seleccioná un item para resetear.");return}if(!window.confirm(`Esto va a poner en 0 el item "${J}" para todos los perfiles. ¿Continuar?`))return;try{const Y={...qJ||{}},j=Object.keys(Y).filter((W)=>H1(W,J));j.forEach((W)=>delete Y[W]);await Promise.all(j.map((W)=>G.ref(`arenaBattleState/${W}`).remove()));vJ(Y);await Promise.all((F||[]).map((W)=>{if(!W?.firebaseId)return Promise.resolve();return G.ref(`perfiles/${W.firebaseId}/puntuaciones/${J}`).set(0)}));g((W)=>W.map((O)=>({...O,puntuaciones:{...O.puntuaciones||{},[J]:0}})));const L=EQ(J,Z,$);vJ((W)=>{if(!W?.[L])return W;const O={...W};delete O[L];return O});fJ((W)=>{const O=CJ(J);if(!W?.[O])return W;const H={...W};delete H[O];return H});await G.ref(`arenaBattleState/${L}`).remove();await G.ref(`arenaGlobalState/${CJ(J)}`).remove();alert(`Se reseteó "${J}" (${FQ(Z)}) y se limpió su estado de batallas.`)}catch(Y){console.error("No se pudo resetear el item:",Y);alert("No se pudo resetear ese item.")}},E1=async(J,Z,$,X=w,Y=s)=>{const j=EQ(J,X,Y),L=qJ?.[j],W=CJ(J),O=xQ(J,RJ?.[W]||{});if(!L){alert("Esa arena no tiene estado cargado.");return}const H=O?.matchups||{},E=O?.directMatchups||{};if(!Object.keys(H).filter((M)=>!!H[M]).length){alert("No hay cruces jugados para resetear en esta arena.");return}const C=uJ(Z,$);if(!H[C]){alert("Ese cruce no existe o no fue jugado todavía.");return}if(!E[C]){alert("Ese cruce se resolvió por transitividad. Deshacé primero la batalla directa correspondiente.");return}if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{const M={...E};delete M[C];const R=SQ(M,kQ(F)),z={arenaName:W,orderedIds:kQ(F),directMatchups:R.directMatchups,matchups:R.matchups,victoryGraph:R.victoryGraph,stats:R.stats},A={...L,directMatchups:z.directMatchups,matchups:z.matchups,victoryGraph:z.victoryGraph,stats:z.stats},K=O1(J,A,z);if(!K){alert("No se pudo recomponer el estado del arena.");return}vJ((l)=>({...l,[j]:K}));fJ((l)=>({...l,[W]:z}));await Promise.all([G.ref(`arenaGlobalState/${W}`).set(z),G.ref(`arenaBattleState/${j}`).set(K)]);const n={...qJ||{},[j]:K},u=_1(J,n);await Promise.all(Object.entries(u).map(async([l,y])=>{await G.ref(`perfiles/${l}/puntuaciones/${J}`).set(y)}));g((l)=>l.map((y)=>{if(!y?.firebaseId||!Object.prototype.hasOwnProperty.call(u,y.firebaseId))return y;const DJ=u[y.firebaseId];return{...y,puntuaciones:{...y.puntuaciones||{},[J]:DJ}}}));alert("Batalla reseteada correctamente.")}catch(M){console.error("No se pudo resetear la batalla:",M);alert("No se pudo resetear esa batalla.")}},u2=c(()=>{const J=F;if(U==="RANKING")return[...J].sort((Z,$)=>parseFloat(LJ($))-parseFloat(LJ(Z)));if(U==="CATEGORIAS"&&$J)return J.filter((Z)=>HZ(Z).includes($J));return J},[F,U,$J]),V1=c(()=>{return new Set(SJ.map((J)=>String(J?.profileId||"").trim()).filter(Boolean))},[SJ]),LZ=c(()=>{const J=String(wZ||"").trim().toLowerCase(),Z=(X)=>{return[X?.profesion,X?.profesiones].flatMap((j)=>{if(Array.isArray(j))return j;if(typeof j==="string")return j.split(",");return[]}).map((j)=>String(j||"").trim()).filter(Boolean).join(" ")},$=(X)=>{if(!X||typeof X!=="object")return!1;return[String(X.nombre||"").trim(),String(X.nacionalidad||"").trim(),String(X.ciudad||"").trim(),Z(X),String(X.fechaNacimiento||"").trim(),String(X.estaturaCm||"").trim()].some(Boolean)||Array.isArray(X.fotos)&&X.fotos.some(Boolean)};return[...F||[]].filter((X)=>{if(!$(X))return!1;if(XQ&&q3(X))return!1;if(tQ){const j=String(X?.firebaseId||X?.id||"").trim();if(!j||!V1.has(j))return!1}if(!J)return!0;return[String(X.nombre||"").trim(),String(X.nacionalidad||"").trim(),Z(X)].join(" ").toLowerCase().includes(J)}).sort((X,Y)=>String(X?.nombre||"").localeCompare(String(Y?.nombre||""),"es",{sensitivity:"base"}))},[F,wZ,XQ,tQ,V1]),d=c(()=>LZ.find((J)=>J?.firebaseId===iQ)||null,[LZ,iQ]);e(()=>{const J=()=>NQ("");document.addEventListener("click",J);return()=>document.removeEventListener("click",J)},[]);const f2=c(()=>{if(!w)return[];return j1(F,w)},[F,w]),FZ=w&&w!=="GENERAL",U1=(J,Z)=>{if(Z==="promedio")return Number(LJ(J))||0;if(Z==="nombre")return(J.nombre||"").toLowerCase();if(Z==="nacionalidad")return(J.nacionalidad||"").toLowerCase();if(Z==="edad"){const $=yJ(J.fechaNacimiento);return typeof $==="number"?$:-1}if(Z==="Rostro")return XZ(J)||0;if(Z==="Cuerpo")return YZ(J)||0;if(Z==="Actitud")return jZ(J)||0;return Number(J.puntuaciones?.[Z]||0)},c2=(J)=>{if(jJ==="promedio")return LJ(J);if(jJ==="Rostro")return XZ(J).toFixed(0);if(jJ==="Cuerpo")return YZ(J).toFixed(0);if(jJ==="Actitud")return jZ(J).toFixed(0);if(JQ.includes(jJ))return Number(J.puntuaciones?.[jJ]||0).toFixed(0);return LJ(J)},HQ=(J,Z="asc")=>{if(jJ===J){BZ(($)=>$==="asc"?"desc":"asc");return}W0(J);BZ(Z)},s2=(J,Z)=>{const $=lJ[Z]||[],X=new Set,Y=new Set,j=Object.entries(qJ||{});$.forEach((O)=>{const H=RJ?.[CJ(O)]?.matchups||{};Object.values(H).forEach((E)=>{if(!E||typeof E!=="object")return;if(E.winnerId===J&&E.loserId)X.add(E.loserId);if(E.loserId===J&&E.winnerId)Y.add(E.winnerId)})});const L=new Map((F||[]).filter((O)=>O?.firebaseId).map((O)=>[O.firebaseId,O.nombre||"Sin nombre"])),W=(O)=>[...O].map((H)=>L.get(H)).filter(Boolean).sort((H,E)=>H.localeCompare(E,"es",{sensitivity:"base"}));return{wins:W(X),losses:W(Y)}},pZ=(J,Z)=>{const $=String(Z||"").trim(),X=String(J||"").trim();if(!$||!X)return{arenaName:$,wins:[],losses:[]};const Y=RJ?.[CJ($)]?.matchups||{},j=new Map((F||[]).filter((O)=>O?.firebaseId).map((O)=>[O.firebaseId,O.nombre||"Sin nombre"])),L=([O,H])=>{if(!H||typeof H!=="object")return null;const E=String(H.winnerId||"").trim(),T=String(H.loserId||"").trim();if(!E||!T)return null;const C=E===X;if(!C&&T!==X)return null;const M=C?T:E;return{pairKey:O,arenaName:$,profileId:X,opponentId:M,opponentName:j.get(M)||"Sin nombre",winnerId:E,loserId:T}},W=Object.entries(Y).map(L).filter(Boolean).sort((O,H)=>O.opponentName.localeCompare(H.opponentName,"es",{sensitivity:"base"}));return{arenaName:$,wins:W.filter((O)=>O.winnerId===X),losses:W.filter((O)=>O.loserId===X)}},d2=(J,Z)=>{const $=pZ(J,Z),X=$.wins.length,Y=$.losses.length,j=X+Y,L=j?X/j*100:0;return{wins:X,losses:Y,total:j,winRate:L}},iZ=[...u2].sort((J,Z)=>{const $=U1(J,jJ),X=U1(Z,jJ);let Y=0;if(typeof $==="string"||typeof X==="string")Y=String($).localeCompare(String(X),"es",{sensitivity:"base"});else Y=$-X;if(Y===0)return(J.nombre||"").localeCompare(Z.nombre||"","es",{sensitivity:"base"});return sJ==="asc"?Y:-Y}),lZ=!zJ,n2=c(()=>TZ?iZ:iZ.slice(0,10),[iZ,TZ]);return Q("div",{className:"app-space-theme flex h-screen w-screen overflow-hidden bg-[#020617] stone-wall-surface relative",children:[zJ&&Q("aside",{className:"hud-frame hud-frame--panel w-64 shrink-0 theme-surface-card stone-wall-surface border-r theme-border-secondary flex flex-col p-6 z-20 shadow-xl overflow-y-auto relative",children:[Q("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),Q("div",{className:"mb-12 text-center flex-shrink-0",children:[Q("h1",{className:"neon-sign neon-sign--cyan text-5xl font-black text-[var(--metal-gold)] italic tracking-tighter leading-none",children:"G2"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-2",children:"Elite Database"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("nav",{className:"flex-1 space-y-2 mb-8",children:[{id:"EXPLORAR",icon:"layout-grid",label:"Explorar"},{id:"RANKING",icon:"trending-up",label:"Ranking"},{id:"BATALLAS",icon:"swords",label:"Batallas"},{id:"GALERIA",icon:"images",label:"Galería"},{id:"CAMPEONAS",icon:"crown",label:"Campeonas"},{id:"anonimo",icon:"user-round-x",label:"ánonimo"},{id:"TALLER",icon:"hammer",label:"Taller"}].map((J)=>Q("button",{onClick:()=>{N(J.id);RQ(null);TQ(null);QJ(null);pJ("")},className:`btn-metal sidebar-nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-[1.6rem] text-xs transition-all ${U===J.id?"is-active text-[#ecfeff]":"text-slate-900"}`,children:[Q(a,{name:J.icon,size:18},void 0,!1,void 0,this),J.label]},J.id,!0,void 0,this))},void 0,!1,void 0,this),Q("button",{onClick:()=>p0(),className:"btn-metal btn-metal--gold py-5 rounded-[2.2rem] text-[11px] flex items-center justify-center gap-2 flex-shrink-0",children:[Q(a,{name:"plus",size:16},void 0,!1,void 0,this)," Nuevo Perfil"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("main",{className:"flex-1 min-w-0 w-full flex flex-col overflow-hidden bg-[#020617] stone-wall-surface relative",children:[Q("button",{onClick:()=>u1((J)=>!J),className:"sidebar-screen-toggle btn-metal btn-metal--silver rounded-full text-slate-900","aria-label":zJ?"Replegar menú lateral":"Desplegar menú lateral",title:zJ?"Replegar menú lateral":"Desplegar menú lateral",children:Q(a,{name:zJ?"panel-left-close":"panel-left-open",size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:`hud-section flex-1 overflow-y-auto relative z-10 stone-wall-surface ${zJ?"p-6 md:p-10 lg:p-12":"p-4 md:p-8 lg:p-10"}`,children:[Q("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),Q("div",{className:"corner-ember-glow corner-ember-glow--right corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),d&&Q("div",{className:`fixed inset-0 z-[140] flex items-center justify-center bg-slate-950/75 backdrop-blur-sm px-4 py-8 ${zJ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>pJ(""),role:"presentation",children:Q("section",{className:"taller-detail-panel rounded-[2rem] p-8 md:p-10 relative overflow-hidden w-full max-w-5xl max-h-[90vh] overflow-y-auto",onClick:(J)=>J.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Ficha del personaje",children:[Q("button",{type:"button",onClick:()=>pJ(""),className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100 flex items-center justify-center hover:bg-slate-800/90 transition","aria-label":"Cerrar ficha",children:Q(a,{name:"x",size:18},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-1 lg:grid-cols-[minmax(260px,320px),1fr] gap-8 items-start",children:[Q("div",{className:"taller-detail-avatar rounded-[1.8rem] overflow-hidden border border-cyan-200/35",children:Q("img",{src:d.fotos?.[0]||"https://via.placeholder.com/500x700",alt:d.nombre||"Perfil seleccionado",className:"w-full h-full object-cover"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"space-y-6",children:[Q("div",{children:[Q("p",{className:"text-[10px] uppercase tracking-[0.35em] text-cyan-200/90 font-black",children:"Ficha del personaje"},void 0,!1,void 0,this),Q("h3",{className:"taller-detail-title text-3xl md:text-4xl font-black uppercase mt-2",children:d.nombre||"Sin nombre"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!d?.isAnonymousGallery&&Q("div",{className:"grid grid-cols-1 gap-4",children:[Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Profesión"},void 0,!1,void 0,this),Q("strong",{children:d.profesion||"No definida"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Nacionalidad - Ciudad"},void 0,!1,void 0,this),Q("strong",{children:`${d.nacionalidad||"No definida"} - ${d.ciudad||"No definida"}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Fecha de nacimiento - Edad"},void 0,!1,void 0,this),Q("strong",{children:`${d.fechaNacimiento||"No informado"} - ${yJ(d.fechaNacimiento)} años`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Estatura"},void 0,!1,void 0,this),Q("strong",{children:d.estaturaCm?`${d.estaturaCm} cm`:"No informada"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"pt-2",children:Q("div",{className:"grid grid-cols-2 sm:grid-cols-[1fr,1fr,auto,auto] gap-3 items-center",children:[!d?.isAnonymousGallery&&Q("button",{type:"button",onClick:()=>{mQ({isOpen:!0,profile:d})},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Puntajes"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>{const J=D.current,Z=J&&!J.closed?J:window.open("","_blank");D.current=Z;Z0({targetWindow:Z,profileName:d?.nombre||"",profession:d?.profesion||"",photos:[...(d?.galeria?.fotos||[]).map(($,X)=>({...JJ($,"image"),sourceTag:"fotos",sourceIndex:X})),...(d?.galeria?.videos||[]).map(($,X)=>({...JJ($,"video"),sourceTag:"videos",sourceIndex:X}))],editingId:d?.firebaseId||d?.id||"",battlePhotoPrefs:d?.batallaFotosPreferidas||d?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:d?.fotos?.[0]||""});Z?.focus()},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Ver Galería"},void 0,!1,void 0,this),!d?.isAnonymousGallery&&Q(bJ,{children:[Q("button",{type:"button",onClick:()=>{pJ("");ZZ(d)},className:"w-10 h-10 rounded-md bg-yellow-400 text-slate-950 text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Editar ficha completa",title:"Editar ficha completa",children:"✏️"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>fZ(d),className:"w-10 h-10 rounded-md bg-red-500 text-white text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Eliminar ficha",title:"Eliminar ficha",children:"\uD83D\uDDD1️"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U==="TALLER"&&Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:[Q("div",{className:"space-y-2",children:Q("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Taller"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"max-w-2xl",children:Q("input",{id:"tallerSearchInput",type:"text",value:wZ,onChange:(J)=>A0(J.target.value),placeholder:"Ej: Argentina, Modelo, Lucía...","aria-label":"Buscar perfiles del taller",className:"w-full rounded-2xl border border-cyan-200/30 bg-slate-950/70 px-5 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-300/70 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-3",children:[Q("button",{type:"button",onClick:()=>t1((J)=>!J),className:`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${XQ?"btn-metal--danger":""}`,children:["Fotos incompletas ",XQ?"(Activo)":""]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>o1((J)=>!J),className:`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${tQ?"btn-metal--danger":""}`,children:["Fotos Rotas ",tQ?"(Activo)":""]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",children:LZ.map((J)=>{const Z=YJ(J.profesion),$=iQ&&iQ===J.firebaseId,X=W3(J),Y=a1===(J.firebaseId||J.nombre);return Q("button",{type:"button",onClick:()=>{if(eQ.current){eQ.current=!1;return}NQ("");pJ("");ZZ(J)},onContextMenu:(j)=>{if(!XQ||!X.length)return;j.preventDefault();j.stopPropagation();NQ((L)=>L===(J.firebaseId||J.nombre)?"":J.firebaseId||J.nombre)},onTouchStart:()=>{if(!XQ||!X.length)return;eQ.current=!1;clearTimeout(rQ.current);rQ.current=setTimeout(()=>{eQ.current=!0;NQ(J.firebaseId||J.nombre)},550)},onTouchEnd:()=>{clearTimeout(rQ.current)},onTouchMove:()=>{clearTimeout(rQ.current)},className:`profile-card rounded-2xl p-4 relative text-left transition-all ${$?"taller-card--selected":""}`,children:[Q("div",{className:"w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-slate-900/70",children:Q("img",{src:J.fotos?.[0]||"https://via.placeholder.com/400x500",alt:J.nombre||"Personaje",className:"w-full h-full object-cover",loading:"lazy"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-lg font-black text-white uppercase tracking-wide truncate",children:J.nombre||"Sin nombre"},void 0,!1,void 0,this),Q("p",{className:"text-xs text-slate-300 truncate",children:J.nacionalidad||"Nacionalidad no definida"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] uppercase font-bold tracking-widest mt-2 truncate",style:{color:Z.color,textShadow:`0 0 12px ${Z.sombra}`},children:J.profesion||"Profesión no definida"},void 0,!1,void 0,this),Y&&Q("button",{type:"button",className:"absolute left-4 right-4 bottom-4 z-20 rounded-xl border border-red-300/55 bg-slate-950/95 px-3 py-3 text-[11px] text-slate-100 text-left shadow-[0_0_24px_rgba(248,113,113,0.45)] transition hover:border-cyan-300/75 hover:text-cyan-100",onClick:(j)=>{j.preventDefault();j.stopPropagation();r1(J)},role:"tooltip",title:"Ir a la galería de este personaje",children:[Q("p",{className:"font-black uppercase tracking-wider text-red-200 mb-2",children:"Faltan fotos:"},void 0,!1,void 0,this),Q("ul",{className:"space-y-1 mb-2",children:X.map((j)=>Q("li",{className:"leading-tight",children:["• ",j]},j,!0,void 0,this))},void 0,!1,void 0,this),Q("span",{className:"inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200",children:"Ir a galería ↗"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.firebaseId||J.nombre,!0,void 0,this)})},void 0,!1,void 0,this),!LZ.length&&Q("div",{className:"rounded-2xl border border-slate-500/30 bg-slate-900/50 px-6 py-8 text-center text-sm text-slate-300",children:"No hay personajes que coincidan con la búsqueda."},void 0,!1,void 0,this),Q(O3,{isOpen:n1,profile:d,onClose:()=>p1(!1)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),U==="CAMPEONAS"&&!$J&&(()=>{const J=[{id:"18-23",min:18,max:23},{id:"24-29",min:24,max:29},{id:"30-35",min:30,max:35},{id:"36-41",min:36,max:41},{id:"42-60",min:42,max:60}],Z=(F||[]).filter(Boolean),$=(H=[])=>[...H].sort((E,T)=>(Number(LJ(T))||0)-(Number(LJ(E))||0)).slice(0,3),X={nacionalidades:[],profesiones:[],edades:[],items:[],caracteristicas:[]},Y=$(Z);[...new Set(Z.map((H)=>String(H.nacionalidad||"").trim()).filter(Boolean))].forEach((H)=>X.nacionalidades.push({id:`nac-${H}`,title:`Nacionalidad · ${H}`,top:$(Z.filter((E)=>String(E.nacionalidad||"").trim()===H))}));J.forEach((H)=>X.edades.push({id:`edad-${H.id}`,title:`Edad · ${H.id}`,top:$(Z.filter((E)=>{const T=yJ(E.fechaNacimiento);return typeof T==="number"&&T>=H.min&&T<=H.max}))}));[...new Set(Z.map((H)=>String(H.profesion||"").trim()).filter(Boolean))].forEach((H)=>X.profesiones.push({id:`prof-${H}`,title:`Profesión · ${H}`,top:$(Z.filter((E)=>String(E.profesion||"").trim()===H))}));JQ.forEach((H)=>{const E=[...Z].sort((T,C)=>(Number(C?.puntuaciones?.[H])||0)-(Number(T?.puntuaciones?.[H])||0)).slice(0,3);X.items.push({id:`item-${H}`,title:`Ítem · ${H}`,top:E,scoreType:"item",scoreKey:H})});[["Cuerpo",["Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura"]],["Rostro",["Rostro","Ojos","Boca","Cabello"]],["Actitud",["Sensualidad","Carisma","Elegancia","Dulzura","Talento"]]].forEach(([H,E])=>{const T=[...Z].map((C)=>({...C,__metaScore:E.reduce((P,M)=>P+(Number(C?.puntuaciones?.[M])||0),0)/E.length})).sort((C,P)=>(P.__metaScore||0)-(C.__metaScore||0)).slice(0,3);X.caracteristicas.push({id:`meta-${H}`,title:H,top:T,scoreType:"meta"})});const W=[{id:"general",title:"Podio de puntuación general",cards:[{id:"general-score",title:"General · Ranking total",top:Y}]},{id:"nacionalidades",title:"Podios por nacionalidades",cards:X.nacionalidades},{id:"profesiones",title:"Podios por profesión",cards:X.profesiones},{id:"edades",title:"Podios por edades",cards:X.edades},{id:"items",title:"Podios por ítem",cards:X.items},{id:"caracteristicas",title:"Podios por características",cards:X.caracteristicas}],O=(H,E=!1)=>Q("article",{className:`champion-podium-card champion-podium-card--${E?"general":"section"} rounded-2xl p-5`,children:[Q("h3",{className:`champion-podium-title text-xs font-black uppercase tracking-[0.18em] mb-3 ${E?"text-[var(--metal-gold)]":"text-cyan-100"}`,children:H.title},void 0,!1,void 0,this),Q("ol",{className:"space-y-2",children:H.top.length?H.top.map((T,C)=>{const P=HJ(String(T?.fotos?.[0]||"").trim(),""),M=C===0;return Q("li",{className:`champion-rank-row champion-rank-row--${C+1} flex items-center justify-between gap-3 text-xs`,children:[Q("div",{className:"flex items-center gap-2 min-w-0",children:[M&&P&&Q("div",{className:"flex flex-col items-center shrink-0 -mt-1",title:`Campeona de ${H.title}`,children:[Q("span",{className:"text-[12px] leading-none -mb-0.5","aria-hidden":"true",children:"\uD83D\uDC51"},void 0,!1,void 0,this),Q("img",{src:P,alt:`Miniatura de ${T.nombre||"Campeona"}`,className:`champion-avatar w-8 h-8 rounded-full object-cover border ${E?"champion-avatar--general":"champion-avatar--section"}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("span",{className:`champion-rank-name font-black truncate ${M?"champion-rank-name--winner":"text-slate-100"}`,children:[C+1,". ",T.nombre||"Sin nombre"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("span",{className:`champion-score font-black shrink-0 ${C===0?"champion-score--winner":""}`,children:LJ(T)},void 0,!1,void 0,this)]},`${H.id}-${T.firebaseId||T.nombre||C}`,!0,void 0,this)}):Q("li",{className:"text-xs text-slate-400",children:"Sin datos suficientes."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},H.id,!0,void 0,this);return Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:[Q("div",{children:[Q("h2",{className:"neon-sign neon-sign--magenta text-4xl font-black italic text-white uppercase tracking-tighter",children:"Campeonas"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:"Podios organizados por secciones"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-7",children:W.map((H)=>Q("section",{className:"space-y-3",children:[Q("h3",{className:"text-[11px] font-black uppercase tracking-[0.2em] text-cyan-100/85",children:H.title},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",children:H.cards.map((E)=>O(E,H.id==="general"))},void 0,!1,void 0,this)]},H.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)})(),U==="anonimo"&&!$J&&Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:Q("section",{className:"hud-frame hud-frame--panel profession-banner p-8 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",children:[Q("p",{className:"text-[11px] uppercase tracking-[0.35em] text-cyan-200/80 font-black",children:"Modo"},void 0,!1,void 0,this),Q("h2",{className:"neon-sign neon-sign--magenta font-title text-5xl md:text-6xl font-black italic text-white tracking-[0.08em] leading-none mt-3",children:"ánonimo"},void 0,!1,void 0,this),Q("p",{className:"text-sm md:text-base text-slate-200/85 mt-4 max-w-3xl",children:"Este panel reutiliza el estilo visual del sistema y no abre la ficha de personaje para mantener una navegación discreta."},void 0,!1,void 0,this),Q("div",{className:"mt-8 space-y-5",children:[Q("div",{className:"grid gap-3 sm:grid-cols-3",children:[{key:"imagen",label:"Imagen"},{key:"escena",label:"Escena"},{key:"audio",label:"Audio"}].map((J)=>Q("button",{type:"button",onClick:()=>{c1(J.key);sQ("");GJ("")},className:`px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] transition-all border ${nJ===J.key?"text-cyan-100 border-cyan-300/50 bg-cyan-500/35":"text-slate-200 border-slate-500/50 bg-slate-700/30 hover:bg-slate-600/35"}`,children:J.label},J.key,!1,void 0,this))},void 0,!1,void 0,this),(nJ==="imagen"||nJ==="escena")&&Q("div",{className:"grid gap-4 md:grid-cols-2",children:[Q("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:GZ,onChange:(J)=>{z0(J.target.value);sQ("")},children:[Q("option",{value:"url",children:"URL"},void 0,!1,void 0,this),Q("option",{value:"file",children:"Archivo de dispositivo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:G0,onChange:(J)=>f1(J.target.value),children:XJ.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this),GZ==="url"?Q("input",{placeholder:"URL",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:N0,onChange:(J)=>M0(J.target.value)},void 0,!1,void 0,this):Q("input",{type:"file",accept:nJ==="imagen"?"image/*,.gif":"image/*,video/*,.gif",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",onChange:(J)=>w0(J.target.files?.[0]||null)},void 0,!1,void 0,this),Q("input",{placeholder:"Autor (opcional)",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:k0,onChange:(J)=>S0(J.target.value)},void 0,!1,void 0,this),Q("button",{type:"button",onClick:async()=>{await $2(nJ==="escena"?"videos":"fotos")},className:"md:col-span-2 px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all",children:["Guardar ",nJ]},void 0,!0,void 0,this),x0&&Q("p",{className:"md:col-span-2 text-xs font-black uppercase tracking-[0.12em] text-rose-300",children:x0},void 0,!1,void 0,this)]},void 0,!0,void 0,this),nJ==="audio"&&Q("div",{className:"border-t border-cyan-300/25 pt-4 mt-2 space-y-3",children:[Q("p",{className:"text-[11px] uppercase tracking-[0.25em] text-cyan-200/80 font-black",children:"Audio para botón \uD83C\uDFB5"},void 0,!1,void 0,this),Q("input",{placeholder:"Nombre",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:P0,onChange:(J)=>b0(J.target.value)},void 0,!1,void 0,this),Q("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:dQ,onChange:(J)=>v0(J.target.value),children:[Q("option",{value:"url",children:"URL"},void 0,!1,void 0,this),Q("option",{value:"file",children:"Archivo de dispositivo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),dQ==="url"?Q("input",{placeholder:"URL",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:I0,onChange:(J)=>g0(J.target.value)},void 0,!1,void 0,this):Q("input",{type:"file",accept:"audio/*",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",onChange:(J)=>y0(J.target.files?.[0]||null)},void 0,!1,void 0,this),Q("button",{type:"button",onClick:X2,className:"px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all",children:"Guardar audio en Firebase"},void 0,!1,void 0,this),hJ.length>0&&Q("div",{className:"space-y-2 pt-1",children:hJ.map((J,Z)=>Q("div",{className:"theme-surface-soft border theme-border-secondary rounded-xl px-3 py-2 flex items-center justify-between gap-3",children:[Q("div",{className:"min-w-0",children:[Q("p",{className:"text-sm font-bold text-cyan-100 truncate",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[11px] text-cyan-200/70 truncate",children:J.url},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>Y2(Z),className:"w-8 h-8 rounded-full border border-rose-400/70 text-rose-200 bg-rose-500/20 hover:bg-rose-500/35 hover:text-white transition-all font-black text-lg leading-none shrink-0","aria-label":`Eliminar audio ${J.nombre}`,title:"Eliminar audio",children:"×"},void 0,!1,void 0,this)]},`${J.url}-${Z}`,!0,void 0,this))},void 0,!1,void 0,this),m0?Q("p",{className:"text-xs font-black uppercase tracking-[0.12em] text-rose-300",children:m0},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U==="EXPLORAR"&&!$J&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{children:[Q("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Explorar"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:"Organización automática por profesión"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:[...new Set((F||[]).map((J)=>String(J?.profesion||"").trim()).filter(Boolean))].map((J)=>{const Z=(F||[]).filter((X)=>String(X?.profesion||"").trim()===J).length,$=vQ(J);return Q("div",{onClick:()=>RQ(J),className:"profession-folder-card rounded-2xl p-8 text-center cursor-pointer transition-all group relative overflow-hidden active:scale-95",style:{"--folder-color":$.baseColor,"--folder-glow":$.glowColor},children:[Q("div",{className:"profession-folder-card__icon w-24 h-24 rounded-[2rem] flex items-center justify-center text-5xl mx-auto mb-6",children:U3(J)},void 0,!1,void 0,this),Q("h3",{className:"text-2xl font-black text-white mb-2 truncate uppercase tracking-tighter italic",children:J},void 0,!1,void 0,this),Q("div",{className:"inline-flex items-center gap-2 px-5 py-2 rounded-full border",style:{borderColor:"color-mix(in srgb, var(--folder-color) 65%, rgba(2,6,23,0.8) 35%)",background:"color-mix(in srgb, var(--folder-color) 14%, rgba(2,6,23,0.68) 86%)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.16), 0 0 14px color-mix(in srgb, var(--folder-glow) 35%, transparent)"},children:Q("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest",children:[Z," ",Z===1?"Perfil":"Perfiles"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},J,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),$J&&Q("div",{className:"space-y-8 animate-in slide-in-from-bottom-4 duration-500",children:[Q("div",{className:"hud-frame hud-frame--panel profession-banner flex items-center justify-between p-6 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",style:{"--banner-color":U==="CATEGORIAS"?"rgba(148, 163, 184, 0.8)":vQ($J).baseColor},children:[Q("div",{className:"flex items-center gap-3",children:[Q("button",{onClick:()=>RQ(null),className:"group flex items-center","aria-label":"Volver",title:"Volver",children:Q("div",{className:"back-btn-silver p-2 rounded-xl text-slate-400 group-hover:text-slate-200 transition-all",children:Q("i",{"data-lucide":"arrow-left",className:"w-4 h-4"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:()=>p0(U==="CATEGORIAS"?"":$J),className:"w-9 h-9 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xl leading-none flex items-center justify-center shadow-[0_0_14px_rgba(16,185,129,0.45)] transition-all","aria-label":"Agregar nuevo perfil",title:"Agregar nuevo perfil",children:"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("h2",{className:"neon-sign neon-sign--magenta font-title text-6xl font-black italic text-white tracking-[0.08em] leading-none",children:U==="CATEGORIAS"?o.find((J)=>J.firebaseId===$J)?.label||"Archivo del Reino":$J},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",children:(F||[]).filter((J)=>{if(!J)return!1;if(U==="CATEGORIAS")return HZ(J).includes($J);return String(J.profesion||"").trim().toLowerCase()===String($J).trim().toLowerCase()}).map((J)=>{const Z=Number(typeof LJ==="function"?LJ(J):0)||0,$=Z>=95?"card-score-badge--gold":Z>=86?"card-score-badge--diamond":Z>=75?"card-score-badge--fire":"",X=YJ(J.profesion);return Q("div",{onClick:()=>{DQ(null);A0("");pJ(J.firebaseId||"")},onContextMenu:(Y)=>S2(Y,J),className:"profile-card group relative rounded-2xl overflow-hidden cursor-pointer",style:{"--card-neon-color":X.color,"--card-neon-glow":X.sombra},children:Q("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden",children:[Q("img",{src:HJ(J.fotos&&J.fotos.length>0?J.fotos[0]:"","https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:PJ},void 0,!1,void 0,this),Q("div",{className:"absolute top-3 left-3 z-20",children:[Q("button",{type:"button",onClick:(Y)=>{Y.stopPropagation();hQ("");CQ(J);DQ((j)=>j===J.firebaseId?null:J.firebaseId)},className:"card-menu-btn rounded-full bg-slate-900/88 backdrop-blur-md border border-white/10 text-slate-200 hover:text-white hover:border-[var(--metal-gold)] transition-all flex items-center justify-center","aria-label":"Abrir menú contextual del perfil",children:Q(a,{name:"more-vertical",size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),v1===J.firebaseId&&Q("div",{className:"absolute top-12 left-0 min-w-[170px] rounded-xl border theme-border-secondary bg-slate-950/95 shadow-2xl p-2 space-y-1",onClick:(Y)=>Y.stopPropagation(),children:[Q("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-slate-200 hover:bg-slate-800 transition-all",onClick:()=>{DQ(null);ZZ(J)},children:"Editar"},void 0,!1,void 0,this),Q("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-red-300 hover:bg-red-500/20 transition-all",onClick:()=>{fZ(J);DQ(null)},children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:(Y)=>{Y.stopPropagation();mQ({isOpen:!0,profile:J})},className:`card-score-badge ${$} absolute top-2 right-2 w-14 h-14 backdrop-blur-md rounded-full flex flex-col items-center justify-center border`,title:`Puntaje de ${J.nombre}`,children:[Z>=75&&Z<=85&&Q("span",{className:"card-score-badge__fire-emoji","aria-hidden":"true",children:"\uD83D\uDD25"},void 0,!1,void 0,this),Q("span",{className:"text-[9px] font-black text-[var(--metal-gold)] leading-none",children:"G2"},void 0,!1,void 0,this),Q("span",{className:"card-score-badge__value text-lg font-black",children:typeof LJ==="function"?LJ(J):"8.5"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute bottom-4 left-4 right-4",children:Q("div",{className:"text-bubble card-footer-profession w-full backdrop-blur-md p-4 rounded-2xl border",children:[Q("h3",{className:"text-lg font-black text-white italic tracking-tighter leading-none flex items-center gap-2",children:[J.nombre,Q("span",{className:"text-[var(--metal-gold)] text-sm not-italic",children:["(",typeof yJ==="function"?yJ(J.fechaNacimiento):"??",")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex justify-between items-center mt-1",children:[Q("span",{className:"text-[var(--metal-gold)] text-[7px] font-black uppercase tracking-widest",children:J.profesion},void 0,!1,void 0,this),Q("p",{className:"text-[7px] font-bold text-slate-400 uppercase",children:J.nacionalidad},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},J.firebaseId||Math.random(),!1,void 0,this)})},void 0,!1,void 0,this),RZ&&BJ&&Q("div",{ref:B,className:"fixed z-[120] min-w-[11rem] rounded-xl border border-cyan-400/40 bg-slate-950/95 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.55)] p-2",style:{top:`${q0.y}px`,left:`${q0.x}px`},children:[Q("button",{type:"button",onClick:x2,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-cyan-200 hover:bg-cyan-500/20 transition-colors",children:"Editar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:P2,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-rose-300 hover:bg-rose-500/20 transition-colors",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),U==="GALERIA"&&!$J&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6",children:[Q("div",{children:[Q("h2",{className:"neon-sign neon-sign--magenta text-4xl font-black italic text-white uppercase tracking-tighter",children:"Galería"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:`Vista por ${qZ} · ${z2}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:[a2.map((J)=>Q("button",{type:"button",onClick:()=>y1(J),className:`btn-metal px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all ${h===J?"btn-metal--gold text-[#fffaf0]":"btn-metal--silver text-slate-900"}`,children:D1[J]},J,!1,void 0,this)),Q("button",{type:"button",onClick:()=>xZ(!0),className:"btn-metal btn-metal--danger px-4 py-2 rounded-full text-[10px] tracking-[0.08em] inline-flex items-center gap-2",title:"Ver y corregir fotos rotas",children:[Q("span",{className:"text-sm leading-none",children:"\uD83D\uDC94"},void 0,!1,void 0,this),"Rotas (",SJ.length,")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3",children:[Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Total"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:wQ.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Visibles"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-[var(--metal-gold)] mt-1",children:m.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Etiquetas"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:XJ.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Perfiles"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:q2},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),h!=="PERSONAJE"&&WZ&&!tJ?Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:mJ.map((J)=>Q("button",{type:"button",onClick:()=>{TQ(J);QJ(null)},className:"group text-left theme-surface-card border theme-border-secondary rounded-[1.4rem] overflow-hidden hover:border-[color:color-mix(in_srgb,var(--metal-gold)_40%,transparent)] hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition-all duration-500",children:Q("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden",children:[J.fotoPerfil?Q("img",{src:HJ(J.fotoPerfil,"https://via.placeholder.com/400x500"),alt:`Portada ${J.nombre}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100",onError:PJ},void 0,!1,void 0,this):Q("div",{className:"w-full h-full flex items-center justify-center text-slate-500",children:Q(a,{name:"image-off",size:34},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-x-0 bottom-0 p-5",children:[Q("p",{className:"text-xl font-black italic text-white tracking-tighter leading-none",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-widest text-[var(--metal-gold)] mt-2",children:J.profesion||"Perfil"},void 0,!1,void 0,this),Q("div",{className:"mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border theme-border-secondary bg-slate-950/85 text-[9px] font-black uppercase tracking-[0.2em] text-slate-200",children:[J.photos.length," archivos"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},J.id,!1,void 0,this))},void 0,!1,void 0,this):Q(bJ,{children:[h!=="PERSONAJE"&&WZ&&Q("div",{className:"flex items-center gap-3",children:Q("button",{type:"button",onClick:()=>{TQ(null);QJ(null)},className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] text-slate-900",children:[Q(a,{name:"arrow-left",size:14},void 0,!1,void 0,this),"Volver al índice"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),h==="PERSONAJE"&&Q("div",{className:"space-y-4",children:[Q("div",{className:"flex flex-col lg:flex-row lg:items-center gap-3",children:[Q("label",{htmlFor:"galleryCharacterSelector",className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300",children:"Selector de personajes"},void 0,!1,void 0,this),Q("select",{id:"galleryCharacterSelector",className:"filter-select max-w-lg",value:"",onChange:(J)=>E2(J.target.value),children:[Q("option",{value:"",disabled:!0,children:e0.length?"Seleccionar personaje…":"No hay más personajes disponibles"},void 0,!1,void 0,this),e0.map((J)=>Q("option",{value:J.id,children:[J.nombre," · ",J.photos.length," archivos"]},J.id,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),kJ.length>0?Q("div",{className:"flex flex-wrap gap-2",children:kJ.map((J)=>Q("button",{type:"button",onClick:()=>V2(J.id),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] text-slate-900",title:"Quitar personaje de la galería visible",children:[J.nombre,Q(a,{name:"x",size:12},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-slate-400",children:"Seleccioná uno o más personajes para mostrar su multimedia en la galería."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),h==="ETIQUETA"&&Q("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4",children:XJ.map((J)=>Q("button",{onClick:()=>U2(J),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:CZ(J,ZQ.includes(J)),children:[J," · ",(yZ[J]||[]).length]},J,!0,void 0,this))},void 0,!1,void 0,this),h==="PERSONAJE"&&Q("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4",children:[Q("button",{onClick:()=>zZ("INICIAL"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:CZ("INICIAL",IJ==="INICIAL"),children:"Inicial"},void 0,!1,void 0,this),XJ.map((J)=>{return Q("button",{onClick:()=>zZ(J),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:CZ(J,IJ===J),children:[J," · ",W2[J]||0]},J,!0,void 0,this)}),Q("button",{onClick:()=>zZ("100"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:CZ("100",IJ==="100"),children:"100%"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{type:"button",onClick:()=>Z1(0,{autoplay:!0,fromGeneralPlay:!0}),disabled:!m.length,className:"btn-metal btn-metal--gold inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] disabled:opacity-40 disabled:cursor-not-allowed",children:[Q(a,{name:"play",size:14},void 0,!1,void 0,this),"Play ",tJ?.nombre||qZ]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:D2,disabled:E0||!m.length,className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed",title:"Descargar toda la multimedia visible en un ZIP",children:[Q(a,{name:"download",size:14},void 0,!1,void 0,this),E0?"Generando ZIP...":"DESCARGAR TODO"]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>d1((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${kZ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,title:"Música de galería",children:"\uD83C\uDFB5"},void 0,!1,void 0,this),hJ.length>0&&Q(bJ,{children:[Q("select",{className:"filter-select min-w-[180px]",value:nQ,onChange:(J)=>u0(J.target.value),children:[Q("option",{value:"",children:"Audio principal"},void 0,!1,void 0,this),hJ.map((J,Z)=>Q("option",{value:J.url,children:J.nombre},`${J.url}-${Z}`,!1,void 0,this))]},void 0,!0,void 0,this),Q("select",{className:"filter-select min-w-[180px]",value:pQ,onChange:(J)=>f0(J.target.value),children:[Q("option",{value:"",children:"Audio secundario (opcional)"},void 0,!1,void 0,this),hJ.map((J,Z)=>Q("option",{value:J.url,children:J.nombre},`${J.url}-b-${Z}`,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"inline-flex items-center gap-2 rounded-full border theme-border-secondary bg-slate-950/80 px-3 py-2",children:[Q("label",{htmlFor:"galleryPlaybackSeconds",className:"text-[10px] font-black uppercase tracking-[0.15em] text-slate-300",children:"Duración"},void 0,!1,void 0,this),Q("select",{id:"galleryPlaybackSeconds",className:"filter-select",value:KZ,onChange:(J)=>m1(Number(J.target.value)),children:[3,5,7,10].map((J)=>Q("option",{value:J,children:[J," segundos"]},J,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),m.length===0?Q("div",{className:"py-24 border border-dashed theme-border-secondary rounded-2xl text-center bg-slate-950/30",children:[Q("div",{className:"w-20 h-20 rounded-full bg-slate-900 border theme-border-secondary flex items-center justify-center mx-auto mb-6",children:Q(a,{name:"image-off",size:28,className:"text-slate-600"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"font-title text-xl font-black italic text-white tracking-[0.06em]",children:"No hay archivos para mostrar"},void 0,!1,void 0,this),Q("p",{className:"font-title text-xs font-medium text-slate-500 tracking-[0.06em] mt-3",children:h==="ETIQUETA"&&ZQ.length===0?"Seleccioná una o más etiquetas para ver multimedia.":"Probá con otra etiqueta o quitá el filtro por etiqueta."},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Q(bJ,{children:[Q("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:mZ.map((J,Z)=>{const $=aJ(J.label),X=vQ(J.profesion);return Q("button",{type:"button",onClick:()=>Z1(Z),className:"group text-left theme-surface-card border rounded-[1.4rem] overflow-hidden transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[var(--glow-gold)] focus:ring-offset-2 focus:ring-offset-[#020617]",style:{borderColor:`color-mix(in srgb, ${X.glowColor} 72%, rgba(148,163,184,0.48) 28%)`,boxShadow:`inset 0 -30px 70px color-mix(in srgb, ${X.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${X.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${X.glowColor} 35%, transparent)`},onMouseEnter:(Y)=>{Y.currentTarget.style.transform="translateY(-2px) scale(1.01)";Y.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${X.baseColor} 20%, transparent), 0 0 26px color-mix(in srgb, ${X.glowColor} 76%, transparent), 0 0 58px color-mix(in srgb, ${X.glowColor} 52%, transparent)`},onMouseLeave:(Y)=>{Y.currentTarget.style.transform="translateY(0) scale(1)";Y.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${X.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${X.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${X.glowColor} 35%, transparent)`},children:Q("div",{className:"aspect-[3/4] relative overflow-hidden bg-slate-950",children:[J.type==="video"?(()=>{const Y=OQ(J.url);if(Y)return Q("div",{className:"w-full h-full bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.3),_rgba(15,23,42,0.95))] flex flex-col items-center justify-center gap-4 p-6 text-center",children:[Q("div",{className:"w-16 h-16 rounded-full border border-[var(--metal-gold)]/40 bg-slate-950/70 flex items-center justify-center text-[color:color-mix(in_srgb,var(--metal-gold)_72%,white)] text-2xl",children:"▶"},void 0,!1,void 0,this),Q("div",{children:[Q("p",{className:"font-title text-sm font-semibold tracking-[0.1em] text-white",children:"Video"},void 0,!1,void 0,this),Q("p",{className:"font-title text-[10px] font-medium tracking-[0.08em] text-slate-400 mt-2",children:Y.provider},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);return Q("video",{src:J.url,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",muted:!0,playsInline:!0,preload:"none"},void 0,!1,void 0,this)})():Q("img",{src:HJ(J.url,LQ),alt:`${J.nombre} - ${J.label||"galería"}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",onError:PJ,loading:"lazy",decoding:"async"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-cyan-950/40 via-transparent to-transparent"},void 0,!1,void 0,this),Q("div",{className:"absolute top-3 right-3 min-w-[32px] h-[32px] px-2 rounded-xl border flex items-center justify-center text-[10px] font-black uppercase shadow-xl z-20",style:{background:$.bg,borderColor:$.border,color:$.text,boxShadow:`0 0 10px ${$.glow}, 0 0 24px color-mix(in srgb, ${$.glow} 48%, transparent)`},title:`Etiqueta ${J.label||"sin etiqueta"}`,children:J.label||"—"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent",children:Q("div",{className:"flex items-end justify-between gap-3",children:[Q("div",{className:"min-w-0 flex-1",children:[Q("p",{className:"text-xs sm:text-sm font-black italic text-white tracking-tight leading-none truncate",title:J.nombre,children:J.nombre},void 0,!1,void 0,this),J.autor?Q("p",{className:"text-[10px] font-semibold text-slate-300 mt-1 truncate",title:J.autor,children:["Autor: ",J.autor]},void 0,!0,void 0,this):null]},void 0,!0,void 0,this),Q("div",{className:"px-2 py-[2px] rounded-full border theme-border-secondary bg-slate-950/85 text-[7px] font-black uppercase tracking-[0.18em] text-slate-200 shrink-0",children:J.type==="video"?"VIDEO":J.isGif?"GIF":"IMG"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},J.id,!1,void 0,this)})},void 0,!1,void 0,this),_2&&Q("div",{className:"flex justify-center mt-8",children:Q("button",{type:"button",onClick:()=>F0((J)=>J+20),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-6 py-3 rounded-full text-[10px] text-slate-900",children:["Cargar más (",mZ.length,"/",m.length,")"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("audio",{ref:MQ,loop:!0,preload:"none"},void 0,!1,void 0,this),Q("audio",{ref:KQ,loop:!0,preload:"none"},void 0,!1,void 0,this),x&&Q("div",{ref:oQ,className:"gallery-viewer-overlay fixed top-0 bottom-0 z-[260] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-0",style:zJ?{left:"18rem",width:"calc(100vw - 18rem)"}:{left:0,width:"100vw"},onClick:$1,children:[Q("button",{type:"button",onClick:$1,className:`btn-metal btn-metal--danger absolute ${wJ?"top-2 right-2 sm:top-3 sm:right-3 w-10 h-10":"top-4 right-4 sm:top-6 sm:right-6 w-12 h-12"} rounded-full flex items-center justify-center`,"aria-label":"Cerrar visor",children:Q("span",{className:"text-[26px] leading-none font-black",children:"✕"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:`gallery-viewer-shell w-screen h-screen max-h-screen flex flex-col ${wJ?"gap-1 px-1 py-1 sm:px-2 sm:py-2":"gap-4 px-3 py-3 sm:px-6 sm:py-6"}`,onClick:(J)=>J.stopPropagation(),children:[!wJ&&Q("div",{className:"flex items-center justify-between gap-4 px-1 sm:px-2",children:[Q("div",{children:[Q("p",{className:"text-2xl sm:text-3xl font-black italic text-white tracking-tighter",children:x.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[var(--metal-gold)] mt-2",children:[x.profesion,x.nacionalidad?` · ${x.nacionalidad}`:""]},void 0,!0,void 0,this),x.autor?Q("p",{className:"text-[11px] sm:text-xs font-semibold text-slate-300 mt-2",children:["Autor: ",x.autor]},void 0,!0,void 0,this):null]},void 0,!0,void 0,this),Q("div",{className:"flex items-center gap-3",children:[m.length>1&&Q(bJ,{children:[Q("button",{type:"button",onClick:()=>zQ((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${KJ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":KJ?"Pausar reproducción":"Reproducir",children:"▶️"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>MZ((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${gJ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":gJ?"Aleatorio activado":"Aleatorio desactivado",children:"\uD83D\uDD00"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"px-3 py-2 rounded-full border theme-border-secondary bg-slate-950/85 text-[10px] font-black uppercase tracking-[0.3em] text-slate-200",children:x.type==="video"?"VIDEO":x.isGif?"GIF":"IMG"},void 0,!1,void 0,this),Q("div",{className:"min-w-[52px] h-[52px] rounded-2xl border flex items-center justify-center text-base font-black uppercase shadow-xl",style:{background:aJ(x.label).bg,borderColor:aJ(x.label).border,color:aJ(x.label).text,boxShadow:`0 0 20px ${aJ(x.label).glow}`},children:x.label||"—"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:`gallery-viewer-media-wrap relative flex-1 min-h-0 overflow-hidden bg-black/50 ${wJ?"rounded-xl md:rounded-2xl":"md:rounded-[2rem] md:border theme-border-secondary"}`,children:[x.type==="video"?(()=>{const J=OQ(x.url);if(J)return Q("iframe",{ref:vZ,src:J.src,title:`${x.nombre} video`,className:`w-full ${wJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} bg-black`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0},void 0,!1,void 0,this);return Q("video",{ref:vZ,src:x.url,controls:!0,playsInline:!0,muted:uZ,autoPlay:KJ,onEnded:()=>{if(KJ&&m.length>1)GQ()},onError:()=>{if(m.length>1)GQ()},className:`w-full ${wJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} object-contain bg-black`},void 0,!1,void 0,this)})():Q("img",{src:HJ(x.url,LQ),alt:`${x.nombre} - ${x.label||"galería"}`,ref:vZ,className:`w-full ${wJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} object-contain bg-black`,onError:(J)=>{PJ(J);if(m.length>1)GQ()}},void 0,!1,void 0,this),m.length>1&&Q(bJ,{children:wJ?Q("div",{className:"absolute left-1/2 bottom-3 sm:bottom-4 -translate-x-1/2 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_40%,rgba(148,163,184,0.45))] bg-slate-950/85 backdrop-blur-md shadow-[0_0_18px_rgba(15,23,42,0.65)]",children:[Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();MZ((Z)=>!Z)},className:`px-3 sm:px-4 h-10 rounded-full border text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] transition-all ${gJ?"border-[var(--metal-gold)] text-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_28%,rgba(2,6,23,0.9))]":"theme-border-secondary text-slate-200 bg-slate-900/90"}`,"aria-label":gJ?"Aleatorio activado":"Aleatorio desactivado",children:gJ?"Random On":"Random Off"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();zQ((Z)=>!Z)},className:`px-4 sm:px-5 h-10 rounded-full border text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] transition-all ${KJ?"border-[var(--metal-gold)] text-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_28%,rgba(2,6,23,0.9))]":"theme-border-secondary text-slate-200 bg-slate-900/90"}`,"aria-label":KJ?"Pausar reproducción":"Reproducir",children:KJ?"Pause":"Play"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();GQ()},className:"w-10 h-10 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-xl","aria-label":"Foto siguiente",children:"➡️"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();GQ()},className:"absolute right-4 bottom-4 sm:right-6 sm:bottom-6 w-12 h-12 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-2xl","aria-label":"Foto siguiente",children:"➡️"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!wJ&&Q("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1 sm:px-2",children:[Q("p",{className:"text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400",children:[AJ+1," de ",m.length," archivos visibles"]},void 0,!0,void 0,this),Q("div",{className:"flex items-center justify-start sm:justify-end gap-2",children:[U0?Q(bJ,{children:[Q("input",{type:"url",value:C0,onChange:(J)=>cQ(J.target.value),placeholder:"https://...",className:"min-w-[260px] bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold tracking-[0.04em] text-white focus:outline-none focus:border-[var(--metal-gold)]"},void 0,!1,void 0,this),Q("select",{value:D0,onChange:(J)=>fQ(J.target.value),className:"bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white focus:outline-none focus:border-[var(--metal-gold)]",children:[Q("option",{value:"",children:"Sin etiqueta"},void 0,!1,void 0,this),XJ.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:C2,disabled:B0,className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--metal-gold)] hover:border-[var(--metal-gold)] transition-all",children:B0?"Guardando...":"Guardar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>{fQ(x?.label||"");cQ(x?.url||"");dJ("");$Q(!1)},className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-slate-300 hover:text-white transition-all",children:"Cancelar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Q("button",{type:"button",onClick:()=>$Q(!0),className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.16em] text-slate-300 hover:border-[var(--metal-gold)] hover:text-[var(--metal-gold)] transition-all","aria-label":"Editar etiqueta de la multimedia",children:[Q("span",{className:"text-xs leading-none",children:"✏️"},void 0,!1,void 0,this),Q("span",{children:x?.label||"Sin etiqueta"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),U0&&R0&&Q("p",{className:"text-[10px] font-bold tracking-[0.04em] text-rose-300",children:R0},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),SZ&&Q("div",{className:"fixed inset-0 z-[130] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6",style:zJ?{left:"18rem"}:void 0,onClick:()=>xZ(!1),children:Q("div",{className:"w-full max-w-[1200px] max-h-full theme-surface-card border theme-border-secondary rounded-[2rem] p-4 sm:p-6 overflow-hidden",onClick:(J)=>J.stopPropagation(),children:[Q("div",{className:"flex items-center justify-between gap-4 mb-5",children:[Q("div",{children:[Q("p",{className:"text-2xl font-black italic text-white tracking-tighter",children:"Fotos rotas"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-[0.25em] text-[var(--metal-gold)] mt-2",children:[SJ.length," enlace",SJ.length===1?"":"s"," sin vista"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>xZ(!1),className:"btn-metal btn-metal--danger w-11 h-11 rounded-full flex items-center justify-center","aria-label":"Cerrar revisión de fotos rotas",children:Q("span",{className:"text-xl font-black leading-none",children:"✕"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"max-h-[70vh] overflow-y-auto pr-1 space-y-6",children:!J1.length?Q("div",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-6 text-center",children:Q("p",{className:"text-sm font-semibold text-white",children:"No se detectaron fotos rotas ahora mismo."},void 0,!1,void 0,this)},void 0,!1,void 0,this):J1.map((J)=>Q("section",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-4 sm:p-5",children:[Q("div",{className:"mb-4",children:[Q("p",{className:"text-lg font-black italic text-white tracking-tight",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 mt-1",children:[J.profesion,J.nacionalidad?` · ${J.nacionalidad}`:""]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-3",children:J.fotos.map((Z)=>{const $=!!i1[Z.id],X=!!l1[Z.id],Y=bZ[Z.id]??Z.url;return Q("article",{className:"grid grid-cols-1 xl:grid-cols-[76px_minmax(0,1fr)_auto] gap-3 p-3 rounded-xl border theme-border-secondary bg-slate-950/40",children:[Q("div",{className:"w-[76px] h-[76px] rounded-lg overflow-hidden border theme-border-secondary bg-slate-900 flex items-center justify-center",children:Q("img",{src:LQ,alt:"Vista previa rota",className:"w-full h-full object-cover"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"space-y-2 min-w-0",children:[Q("div",{className:"flex flex-wrap items-center gap-2",children:[Q("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-200",children:["Etiqueta: ",Z.label||"Sin etiqueta"]},void 0,!0,void 0,this),Q("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-400",children:Z.sourceTag},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("input",{type:"url",value:Y,onChange:(j)=>R2(Z.id,j.target.value),placeholder:"https://...",readOnly:!X,className:`w-full min-w-0 bg-slate-900 border theme-border-secondary rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--metal-gold)] ${!X?"opacity-80 cursor-default":""}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap xl:flex-col gap-2 xl:justify-center",children:[Q("button",{type:"button",onClick:()=>B2(Z),className:"btn-metal btn-metal--silver px-3 py-2 rounded-xl text-[10px]",children:"Ir al enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>X1(Z.id,!0),disabled:$,className:"btn-metal px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Editar enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>T2(Z),disabled:$,className:"btn-metal btn-metal--gold px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Guardar enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>A2(Z),disabled:$,className:"btn-metal btn-metal--danger px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},Z.id,!0,void 0,this)})},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),U==="BATALLAS"&&!$J&&!k&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex flex-col gap-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{onClick:y2,className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all",children:"Resetear calificaciones"},void 0,!1,void 0,this),Q("button",{onClick:()=>S1((J)=>!J),className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all",children:"Resetear item"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),k1&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 flex flex-wrap items-center gap-3",children:[Q("select",{value:$0,onChange:(J)=>x1(J.target.value),className:"bg-slate-900 border theme-border-secondary rounded-xl px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white",children:eZ.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this),Q("button",{onClick:()=>m2($0,w,s),className:"solid-metal-ui px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",disabled:!w,children:"Confirmar reset item"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{children:[Q("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter",children:"Arenas"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:!w?"Paso 1: elegí un modo de enfrentamiento":FZ&&!s?`Paso 2: elegí una opción de ${FQ(w)}`:`Paso 3: elegí uno de los 15 ítems · Modo: ${FQ(w)}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),!w&&Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6",children:J0.map((J)=>Q("button",{onClick:()=>{UJ(J.id);MJ(J.id==="GENERAL"?"all":"");b(null)},className:"solid-metal-ui battle-mode-card battle-mode-card--mode border rounded-2xl p-4 text-left transition-all",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.28em] text-slate-500",children:"Modo"},void 0,!1,void 0,this),Q("h3",{className:"font-black italic text-white mt-2",children:J.label},void 0,!1,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-2",children:J.description},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this),w&&Q("div",{className:"space-y-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-slate-300",children:["Modo: ",FQ(w)]},void 0,!0,void 0,this),Q("button",{onClick:()=>{UJ(null);MJ("");b(null)},className:"solid-metal-ui inline-flex items-center gap-2 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",children:"Cambiar modo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),FZ&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 space-y-3",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300",children:["Elegí una opción de ",FQ(w)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:f2.map((J)=>Q("button",{onClick:()=>{MJ(J.key);b(null)},className:`solid-metal-ui px-3 py-2 rounded-xl border text-[10px] font-black uppercase tracking-[0.14em] transition-all ${s===J.key?"border-[var(--metal-gold)] text-white":"theme-border-secondary text-slate-200"}`,children:[J.label," ",Q("span",{className:"text-slate-400",children:["(",J.ids.length,")"]},void 0,!0,void 0,this)]},J.key,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!QQ&&Q("p",{className:"text-xs text-slate-400",children:"Cargando historial de batallas..."},void 0,!1,void 0,this),QQ&&FZ&&!s&&Q("p",{className:"text-xs text-slate-400",children:"Seleccioná una opción para habilitar las batallas."},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",children:[eZ.map((J)=>{const Z=EQ(J,w,s),$=Boolean(qJ?.[Z]?.isFinished);return Q("button",{disabled:!QQ||FZ&&!s,onClick:()=>{b(J);if(!qJ[Z])L1(J,w,s)},className:`solid-metal-ui battle-mode-card battle-mode-card--arena border rounded-2xl p-4 text-left transition-all disabled:opacity-45 disabled:cursor-not-allowed ${$?"battle-mode-card--completed":""}`,children:[Q("p",{className:`text-[10px] font-black uppercase tracking-[0.28em] ${$?"text-emerald-100/90":"text-slate-500"}`,children:"Item"},void 0,!1,void 0,this),Q("h3",{className:"font-black italic text-white mt-2",children:J},void 0,!1,void 0,this),$&&Q("p",{className:"battle-mode-card__status mt-4",children:"Completada"},void 0,!1,void 0,this)]},J,!0,void 0,this)}),"                    "]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),U==="BATALLAS"&&k&&(()=>{const J=EQ(k,w,s),Z=qJ[J],$=F.find((L)=>L.firebaseId===Z?.championId),X=F.find((L)=>L.firebaseId===Z?.challengerId),Y=$?W1(k,$.firebaseId):null,j=X?W1(k,X.firebaseId):null;return Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:[Q("div",{className:"bg-slate-900/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border theme-border-secondary space-y-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{onClick:()=>b(null),className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:[Q("i",{"data-lucide":"arrow-left",className:"w-4 h-4"},void 0,!1,void 0,this),"Volver a arenas"]},void 0,!0,void 0,this),Q("button",{onClick:()=>{b(null);UJ(null);MJ("")},className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:[Q("i",{"data-lucide":"refresh-ccw",className:"w-4 h-4"},void 0,!1,void 0,this),"Cambiar modo"]},void 0,!0,void 0,this),Q("button",{onClick:()=>b1((L)=>!L),className:"solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:"Resetear una batalla"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),P1&&Q("div",{className:"theme-surface-card border border-red-400/30 rounded-2xl p-4 mt-3",children:(()=>{const L=Object.keys(Z?.matchups||{}).filter((W)=>!!Z?.matchups?.[W]);if(!Z||!L.length)return Q("p",{className:"text-xs text-red-200 font-bold uppercase tracking-[0.12em]",children:"No hay cruces jugados para resetear."},void 0,!1,void 0,this);return Q("div",{className:"space-y-2",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-red-200",children:"Elegí el cruce a deshacer:"},void 0,!1,void 0,this),L.map((W)=>{const[O,H]=W.split("__"),E=F.find((M)=>M.firebaseId===O),T=F.find((M)=>M.firebaseId===H),C=E?.nombre||O,P=T?.nombre||H;return Q("button",{onClick:()=>E1(k,O,H,w,s),className:"metal-btn-3d w-full text-left px-3 py-2 rounded-xl border theme-border-secondary bg-slate-900/60 hover:border-red-300/70 transition-all",children:Q("span",{className:"text-xs text-white font-semibold",children:[C," vs ",P]},void 0,!0,void 0,this)},W,!1,void 0,this)})]},void 0,!0,void 0,this)})()},void 0,!1,void 0,this),Q("div",{className:"min-w-0",children:[Q("h2",{className:"font-title text-2xl sm:text-3xl lg:text-4xl font-black italic text-white tracking-[0.08em] break-words leading-tight",children:k},void 0,!1,void 0,this),Q("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mt-1",children:["Arena activa · Modo: ",FQ(w)]},void 0,!0,void 0,this),Z?.activeGroupLabel&&Q("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[var(--metal-gold)] mt-2",children:Z.activeGroupLabel},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),QQ&&!Z&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center",children:[Q("p",{className:"text-sm text-slate-300",children:"Presioná para iniciar esta arena."},void 0,!1,void 0,this),Q("button",{onClick:()=>L1(k,w,s),className:"metal-btn-3d mt-4 bg-[var(--metal-bronze)] text-white px-5 py-3 rounded-xl font-black uppercase text-xs tracking-[0.2em]",children:"Iniciar batallas"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Z&&Z.isFinished&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center",children:[Q("h3",{className:"text-2xl font-black italic text-white",children:"Arena completada"},void 0,!1,void 0,this),Q("p",{className:"text-slate-400 mt-2",children:"No quedan combates nuevos para este item."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Z&&$&&X&&!Z.isFinished&&Q("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch",children:[Q("button",{onClick:()=>F1(k,$.firebaseId,w,s),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":vQ($.profesion).baseColor},children:[Q("img",{src:M1($,k),alt:$.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:PJ},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500",children:"Versus"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2",children:$.nombre},void 0,!1,void 0,this),k==="Estatura"&&Q("p",{className:"text-xs text-slate-200 mt-2",children:["Altura: ",Y1($)]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-[var(--metal-gold)] mt-3",children:["Victorias: ",Y?.wins||0," · Batallas: ",Y?.battles||0]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-white/80 mt-1",children:["Puntaje final: ",Y?.score||0]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-col items-center justify-center text-center",children:[Q("div",{className:"font-title text-4xl text-[var(--metal-gold)] font-black",children:"VS"},void 0,!1,void 0,this),k==="Estatura"&&Q("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300 mt-3",children:"Compará altura en cm"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{onClick:()=>F1(k,X.firebaseId,w,s),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":vQ(X.profesion).baseColor},children:[Q("img",{src:M1(X,k),alt:X.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:PJ},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500",children:"Versus"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2",children:X.nombre},void 0,!1,void 0,this),k==="Estatura"&&Q("p",{className:"text-xs text-slate-200 mt-2",children:["Altura: ",Y1(X)]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-[var(--metal-gold)] mt-3",children:["Victorias: ",j?.wins||0," · Batallas: ",j?.battles||0]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-white/80 mt-1",children:["Puntaje final: ",j?.score||0]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)})(),U==="RANKING"&&!$J&&Q("div",{className:"theme-surface-card rounded-2xl gothic-frame gothic-frame--ornate animate-in zoom-in-95 duration-500 ranking-table-shell",children:[Q("div",{className:"ranking-table-toolbar",children:Q("button",{type:"button",onClick:()=>h1((J)=>!J),className:`ranking-toggle-totality ${TZ?"is-active":"is-inactive"}`,children:"Ver totalidad"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"ranking-table-scroll",children:Q("table",{className:`w-full ${lZ?"min-w-[860px] xl:min-w-[980px]":"min-w-[700px] xl:min-w-[820px]"} text-left border-collapse`,children:[Q("thead",{className:"theme-surface-soft",children:Q("tr",{children:[Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:"#"},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest rock-carved-text",children:Q("button",{type:"button",onClick:()=>HQ("nombre","asc"),className:"inline-flex items-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Perfil ",jJ==="nombre"?sJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>HQ("Rostro","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Rostro ",jJ==="Rostro"?sJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>HQ("Cuerpo","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Cuerpo ",jJ==="Cuerpo"?sJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>HQ("Actitud","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Actitud ",jJ==="Actitud"?sJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),lZ&&Q(bJ,{children:[Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>HQ("nacionalidad","asc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Ubicación ",jJ==="nacionalidad"?sJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>HQ("edad","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Edad ",jJ==="edad"?sJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("th",{className:"px-8 py-6 text-right",children:Q("div",{className:"flex flex-col items-end gap-1",children:[Q("span",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Ordenar por"},void 0,!1,void 0,this),Q("select",{value:jJ,onChange:(J)=>{W0(J.target.value);BZ("desc")},className:"bg-slate-900 border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] text-[var(--metal-gold)] text-[10px] font-black uppercase py-1 px-2 rounded-lg outline-none cursor-pointer hover:border-cyan-500 transition-all",children:[Q("option",{value:"promedio",children:"G2 SCORE TOTAL (PROMEDIO)"},void 0,!1,void 0,this),Q("optgroup",{label:"Categorías Principales",className:"theme-surface-card text-slate-500",children:[Q("option",{value:"Rostro",children:"Rostro (Mix)"},void 0,!1,void 0,this),Q("option",{value:"Cuerpo",children:"Cuerpo (Mix)"},void 0,!1,void 0,this),Q("option",{value:"Actitud",children:"Actitud (Mix)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("optgroup",{label:"Atributos Específicos",className:"theme-surface-card text-slate-500",children:JQ.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("tbody",{children:n2.map((J,Z)=>Q("tr",{onClick:()=>ZZ(J),className:`cursor-pointer border-b border-slate-700/70 last:border-0 transition-all duration-300 group ${Z===0?"podium-1":Z===1?"podium-2":Z===2?"podium-3":"hover:bg-white/5"}`,children:[Q("td",{className:"px-8 py-5",children:Q("span",{className:`font-black italic rock-carved-text ${Z===0?"text-gold text-4xl":Z===1?"text-silver text-3xl":Z===2?"text-bronze text-2xl":"text-slate-600 text-lg"}`,children:["#",Z+1]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-8 py-5",children:Q("div",{className:"flex items-center gap-4",children:[Q("div",{className:"w-14 h-14 rounded-xl border-2 p-0.5 transition-all duration-500",style:{borderColor:YJ(J.profesion).color,boxShadow:`0 0 10px ${YJ(J.profesion).sombra}`},children:Q("img",{src:HJ(J.fotos?.[0],"https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:PJ},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{children:[Q("p",{className:"font-title font-black text-white text-sm tracking-[0.06em] rock-carved-text",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"font-title text-[10px] font-medium tracking-[0.06em] rock-carved-text",children:J.profesion},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:($)=>{$.stopPropagation();BQ({isOpen:!0,profile:J,category:"Rostro"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Rostro de ${J.nombre}`,children:XZ(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:($)=>{$.stopPropagation();BQ({isOpen:!0,profile:J,category:"Cuerpo"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Cuerpo de ${J.nombre}`,children:YZ(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:($)=>{$.stopPropagation();BQ({isOpen:!0,profile:J,category:"Actitud"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Actitud de ${J.nombre}`,children:jZ(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),lZ&&Q(bJ,{children:[Q("td",{className:"px-4 py-5 text-center",children:[Q("p",{className:"text-[10px] font-bold text-slate-300 uppercase leading-none",children:J.nacionalidad},void 0,!1,void 0,this),Q("p",{className:"text-[8px] font-black text-[var(--metal-gold)]/70 uppercase tracking-tighter",children:J.ciudad},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("td",{className:"px-4 py-5 text-center font-bold text-[10px] text-slate-400",children:[yJ(J.fechaNacimiento)," AÑOS"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("td",{className:"px-8 py-5 text-right",children:Q("div",{className:`inline-block bg-slate-900 border px-4 py-2 rounded-xl transition-all duration-300 ${Z===0?"border-[#ffd700]/50 shadow-[0_0_15px_rgba(255,215,0,0.3)]":Z===1?"border-[#c0c0c0]/50 shadow-[0_0_15px_rgba(192,192,192,0.3)]":Z===2?"border-[#cd7f32]/50 shadow-[0_0_15px_rgba(205,127,50,0.3)]":"theme-border-secondary group-hover:border-[color:color-mix(in_srgb,var(--metal-gold)_50%,transparent)]"}`,children:Q("span",{className:`font-black leading-none ${Z===0?"text-gold":Z===1?"text-silver":Z===2?"text-bronze":"text-[var(--metal-gold)] text-lg"}`,children:c2(J)},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},J.firebaseId||J.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),TJ.isOpen&&TJ.profile&&TJ.category&&(()=>{const J=s2(TJ.profile.firebaseId,TJ.category),Z=lJ[TJ.category]||[];return Q("div",{className:`fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 ${zJ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>{BQ({isOpen:!1,profile:null,category:null});VQ(null)},children:Q("div",{className:"w-full max-w-3xl max-h-[90vh] overflow-y-auto themed-scrollbar theme-surface-card border theme-border-secondary rounded-2xl p-6",onClick:($)=>$.stopPropagation(),children:[Q("div",{className:"flex items-start justify-between gap-4 mb-6",children:[Q("div",{children:[Q("h3",{className:"font-title text-xl font-black text-white tracking-wide",children:[TJ.profile.nombre," · ",TJ.category]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-1",children:"Detalle de enfrentamientos ganados y perdidos."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>{BQ({isOpen:!1,profile:null,category:null});VQ(null)},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"mb-4",children:[Q("p",{className:"text-[10px] uppercase tracking-[0.18em] text-slate-400 font-black mb-2",children:"Detalle por ítem"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:Z.map(($)=>(()=>{const X=d2(TJ.profile.firebaseId,$);return Q("button",{type:"button",onClick:()=>{const Y=pZ(TJ.profile.firebaseId,$);VQ(Y)},className:"btn-metal btn-metal--bronze px-3 py-2 rounded-lg text-[10px] font-black min-w-[10.5rem] text-left",children:[Q("p",{className:"leading-none",children:$},void 0,!1,void 0,this),Q("p",{className:"mt-1 text-[9px] font-semibold text-slate-200/90 tracking-[0.01em] normal-case",children:[X.wins,"/",X.total," · ",X.winRate.toFixed(0),"% victorias"]},void 0,!0,void 0,this)]},`breakdown-item-${$}`,!0,void 0,this)})())},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!IQ?.arenaName&&Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[Q("div",{className:"rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-4 min-h-44",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300 mb-3",children:"Ganó contra"},void 0,!1,void 0,this),J.wins.length?Q("ul",{className:"space-y-2",children:J.wins.map(($,X)=>Q("li",{className:"text-sm text-emerald-200 font-semibold",children:$},`win-${$}-${X}`,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-emerald-200/70",children:"No hay batallas ganadas registradas."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"rounded-xl border border-rose-500/40 bg-rose-950/20 p-4 min-h-44",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-rose-300 mb-3",children:"Perdió contra"},void 0,!1,void 0,this),J.losses.length?Q("ul",{className:"space-y-2",children:J.losses.map(($,X)=>Q("li",{className:"text-sm text-rose-200 font-semibold",children:$},`loss-${$}-${X}`,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-rose-200/70",children:"No hay batallas perdidas registradas."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),IQ?.arenaName&&Q("div",{className:"mt-5 rounded-2xl border border-cyan-500/40 bg-cyan-950/15 p-4 max-h-[48vh] overflow-y-auto themed-scrollbar",children:[Q("div",{className:"flex items-center justify-between gap-3 mb-4",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-200",children:["Ítem: ",IQ.arenaName]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>VQ(null),className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar detalle"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:["wins","losses"].map(($)=>{const X=$==="wins",Y=IQ[$]||[];return Q("div",{className:`rounded-xl border p-3 min-h-36 ${X?"border-emerald-500/40 bg-emerald-950/15":"border-rose-500/40 bg-rose-950/15"}`,children:[Q("h5",{className:`text-[10px] font-black uppercase tracking-[0.15em] mb-2 ${X?"text-emerald-300":"text-rose-300"}`,children:X?"Ganadas":"Perdidas"},void 0,!1,void 0,this),Y.length?Q("ul",{className:"space-y-2",children:Y.map((j,L)=>Q("li",{className:"flex items-center justify-between gap-2",children:[Q("span",{className:`text-sm font-semibold ${X?"text-emerald-100":"text-rose-100"}`,children:j.opponentName},void 0,!1,void 0,this),Q("button",{type:"button",className:"btn-metal btn-metal--red px-2 py-1 rounded text-[9px] font-black",onClick:async()=>{if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{await E1(j.arenaName,j.profileId,j.opponentId);const O=pZ(TJ.profile.firebaseId,j.arenaName);VQ(O)}catch(O){console.error("No se pudo eliminar la batalla del desglose:",O);alert("No se pudo eliminar la batalla. Verificá tu conexión con Firebase e intentá de nuevo.")}},children:"Eliminar"},void 0,!1,void 0,this)]},`${$}-${j.pairKey}-${L}`,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:`text-xs ${X?"text-emerald-200/70":"text-rose-200/70"}`,children:X?"No hay batallas ganadas registradas.":"No hay batallas perdidas registradas."},void 0,!1,void 0,this)]},`item-detail-${$}`,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)})(),AZ.isOpen&&AZ.profile&&(()=>{const J=AZ.profile,Z=gZ(J),$=Object.entries(lJ);return Q("div",{className:"fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>mQ({isOpen:!1,profile:null}),children:Q("div",{className:"w-full max-w-3xl theme-surface-card border theme-border-secondary rounded-2xl p-6 space-y-6",onClick:(X)=>X.stopPropagation(),children:[Q("div",{className:"flex items-start justify-between gap-4",children:[Q("div",{children:[Q("h3",{className:"font-title text-xl font-black text-white tracking-wide",children:[J.nombre," · Puntaje"]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-1",children:"Panel de detalle por ítems, características y G2 Score."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:(X)=>{X.stopPropagation();mQ({isOpen:!1,profile:null})},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300",children:"Ítems"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:JQ.map((X)=>Q("button",{type:"button",onClick:(Y)=>Y.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-slate-600/80 bg-slate-900/80 text-slate-100",children:[X,": ",Number(Z[X]||0).toFixed(0)]},X,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-300",children:"Características"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:$.map(([X,Y])=>Q("button",{type:"button",onClick:(j)=>j.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-cyan-500/50 bg-cyan-950/25 text-cyan-100",children:[X,": ",t0(J,X).toFixed(0)]},X,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-[var(--metal-gold)]",children:"G2 Score"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:(X)=>X.stopPropagation(),className:"w-full px-4 py-3 rounded-xl text-sm font-black border border-[var(--metal-gold)]/50 bg-[color:color-mix(in_srgb,var(--metal-gold)_18%,rgba(15,23,42,0.82))] text-[var(--metal-gold)]",children:["G2 SCORE TOTAL: ",LJ(J)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)})()]},void 0,!0,void 0,this),U==="CATEGORIAS"&&!$J&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex justify-between items-end",children:[Q("div",{children:Q("h2",{className:"text-3xl font-black italic text-white uppercase tracking-tighter",children:"Carpetas"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:()=>{IZ();gQ(!0)},className:"btn-metal btn-metal--gold px-8 py-3 rounded-xl text-xs",children:"NUEVA CATEGORÍA"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),o.length===0?Q("div",{className:"py-20 border-2 border-dashed theme-border-secondary rounded-2xl text-center",children:Q("p",{className:"text-slate-600 font-black italic uppercase",children:"No hay categorías personalizadas"},void 0,!1,void 0,this)},void 0,!1,void 0,this):Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:o.map((J)=>Q("div",{onClick:()=>RQ(J.firebaseId),className:"group relative bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] rounded-xl overflow-hidden border theme-border-secondary cursor-pointer hover:border-[var(--metal-gold)]/70 transition-all duration-500 shadow-[inset_0_1px_0_rgba(148,163,184,0.2),0_18px_30px_rgba(2,6,23,0.55)] aspect-[3/4]",children:[Q("div",{className:"absolute top-5 right-5 z-50 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300",children:[Q("button",{onClick:(Z)=>{Z.stopPropagation();WJ({...J,reglas:{...J.reglas,nacionalidades:J.reglas?.nacionalidades||[],profesiones:J.reglas?.profesiones||[],ciudades:J.reglas?.ciudades||[]}});gQ(!0)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-[var(--metal-bronze)] text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]",children:Q(a,{name:"pencil",size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:(Z)=>{Z.stopPropagation();if(window.confirm("¿Seguro que querés borrar esta carpeta?"))K2(J.firebaseId)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-red-600 text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]",children:Q(a,{name:"x",size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute inset-0",children:[Q("img",{src:HJ(J.coverImg,"https://via.placeholder.com/400x600?text=Sin+Portada"),className:"w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500",onError:PJ},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute bottom-0 left-0 right-0 p-6 text-center",children:[Q("h3",{className:"text-xl font-black text-white uppercase italic tracking-tighter mb-2 drop-shadow-lg",children:J.label},void 0,!1,void 0,this),Q("div",{className:"inline-flex items-center gap-2 bg-[var(--metal-bronze)]/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)]",children:Q("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest",children:[F.filter((Z)=>HZ(Z).includes(J.firebaseId)).length," Perfiles"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.firebaseId,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),X0&&Q("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:Q("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-2xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300",children:[Q("button",{onClick:()=>cJ(!1),className:"p-2 hover:bg-slate-800 rounded-full transition-colors",children:Q(a,{name:"x",size:20,className:"text-slate-400"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("form",{onSubmit:N2,className:"flex-1 overflow-y-auto p-12 space-y-12",children:[Q("div",{className:"grid grid-cols-1 gap-16",children:Q("div",{className:"space-y-8",children:[Q("div",{className:"flex flex-col items-center gap-6",children:[Q("div",{className:"flex items-center gap-4 self-start",children:[Q("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-cyan-900/50",children:Q(a,{name:ZJ?"user":"user-plus"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-xl font-black italic tracking-tighter text-white",children:ZJ?"Editar Perfil":"Información del Perfil"},void 0,!1,void 0,this),ZJ&&Q("button",{type:"button",onClick:()=>{_3({...v,firebaseId:ZJ})},className:"btn-metal btn-metal--gold ml-4 px-4 py-2 rounded-xl text-[10px] flex items-center gap-2",children:[Q(a,{name:"image",size:14},void 0,!1,void 0,this),"Multimedia"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"w-48 h-60 rounded-2xl border-2 border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)] overflow-hidden bg-slate-900 flex items-center justify-center relative group",children:v.fotos.length>0&&v.fotos[0]!==""?Q("img",{src:HJ(v.fotos[0],LQ),className:"w-full h-full object-cover",alt:"Preview",onError:PJ},void 0,!1,void 0,this):Q("div",{className:"text-center p-4",children:[Q(a,{name:"image",size:32,className:"mx-auto text-slate-700 mb-2"},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-bold text-slate-600 uppercase tracking-widest",children:"Vista Previa"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-4",children:[Q("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[Q("div",{className:"rounded-2xl border border-emerald-400/30 bg-emerald-950/20 p-4",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300",children:"Datos actuales"},void 0,!1,void 0,this),$Z.completed.length>0?Q("ul",{className:"mt-3 space-y-1",children:$Z.completed.map((J)=>Q("li",{className:"text-xs text-emerald-100/90",children:[Q("span",{className:"font-black",children:[J.label,":"]},void 0,!0,void 0,this)," ",J.preview]},J.key,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"mt-3 text-xs text-emerald-100/70",children:"Todavía no hay datos cargados."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"rounded-2xl border border-amber-300/30 bg-amber-950/20 p-4",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-amber-200",children:"Datos faltantes por completar"},void 0,!1,void 0,this),$Z.missing.length>0?Q("ul",{className:"mt-3 space-y-1",children:$Z.missing.map((J)=>Q("li",{className:"text-xs text-amber-100/90",children:Q("span",{className:"font-black",children:J.label},void 0,!1,void 0,this)},J.key,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"mt-3 text-xs text-amber-100/70",children:"¡Perfil completo en esta sección!"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 gap-4",children:[Q("input",{required:!0,placeholder:"Nombre Artístico",className:"col-span-2 w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold",value:v.nombre,onChange:(J)=>r({...v,nombre:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"col-span-2 space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"URL de la Foto (Avatar)"},void 0,!1,void 0,this),Q("input",{placeholder:"https://imagen.com/foto.jpg",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold text-xs",value:v.fotos[0]||"",onChange:(J)=>r((Z)=>l0(Z,J.target.value))},void 0,!1,void 0,this),Q("input",{type:"file",accept:"image/*,.gif",onChange:Q2,className:"w-full theme-surface-soft border border-dashed theme-border-secondary p-4 rounded-xl outline-none text-slate-200 font-semibold text-xs file:mr-3 file:rounded-lg file:border-0 file:bg-cyan-500/20 file:px-3 file:py-2 file:text-cyan-200 file:font-black"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Nacimiento"},void 0,!1,void 0,this),Q("input",{type:"date",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:v.fechaNacimiento,onChange:(J)=>r({...v,fechaNacimiento:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Estatura (cm)"},void 0,!1,void 0,this),Q("input",{placeholder:"170",type:"number",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:v.estaturaCm,onChange:(J)=>r({...v,estaturaCm:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("input",{placeholder:"Nacionalidad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:v.nacionalidad,onChange:(J)=>r({...v,nacionalidad:J.target.value})},void 0,!1,void 0,this),Q("input",{placeholder:"Ciudad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:v.ciudad,onChange:(J)=>r({...v,ciudad:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"col-span-2 space-y-1 group",children:[Q("label",{className:"text-[9px] font-black text-[var(--metal-gold)]/60 ml-4 uppercase tracking-widest transition-colors group-focus-within:text-[var(--metal-gold)]",children:"Profesión"},void 0,!1,void 0,this),Q("select",{required:!0,className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold appearance-none cursor-pointer transition-all duration-300 focus:border-[var(--metal-gold)] focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] focus:bg-slate-900",value:v.profesion,onChange:(J)=>r({...v,profesion:J.target.value}),children:[Q("option",{value:"",className:"theme-surface-card",children:"Seleccionar..."},void 0,!1,void 0,this),Q("option",{value:"Cantante",className:"theme-surface-card",children:"\uD83C\uDFA4 Cantante"},void 0,!1,void 0,this),Q("option",{value:"Actriz",className:"theme-surface-card",children:"\uD83C\uDFAC Actriz"},void 0,!1,void 0,this),Q("option",{value:"Modelo",className:"theme-surface-card",children:"\uD83D\uDC60 Modelo"},void 0,!1,void 0,this),Q("option",{value:"NSFW",className:"theme-surface-card",children:"\uD83D\uDD25 NSFW"},void 0,!1,void 0,this),Q("option",{value:"Influencer",className:"theme-surface-card",children:"\uD83D\uDCF1 Influencer"},void 0,!1,void 0,this),Q("option",{value:"Bailarina y Atleta",className:"theme-surface-card",children:"\uD83D\uDC83\uD83C\uDFCB️‍♀️ Bailarina y Atleta"},void 0,!1,void 0,this),Q("option",{value:"Otro",className:"theme-surface-card",children:"\uD83D\uDCD6 Otro"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--metal-gold)]/50",children:Q(a,{name:"chevron-down",size:18},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"flex gap-4",children:[ZJ&&Q("button",{type:"button",onClick:w2,className:"btn-metal btn-metal--danger px-10 py-8 rounded-xl text-xs",children:Q(a,{name:"trash-2",size:20},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{type:"submit",className:"btn-metal btn-metal--gold flex-1 py-8 rounded-xl text-xs",children:ZJ?"Actualizar Registro":"Guardar Perfil"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),I1&&Q("div",{className:"fixed inset-0 z-[120] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-6",onClick:cZ,children:Q("div",{className:"w-full max-w-xl theme-surface-card border theme-border-secondary rounded-3xl p-8 space-y-6",onClick:(J)=>J.stopPropagation(),children:[Q("div",{className:"space-y-3",children:[Q("p",{className:"text-xs font-black uppercase tracking-[0.24em] text-red-300",children:"Acción destructiva"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl font-black italic text-white tracking-tight",children:"¿Eliminar perfil?"},void 0,!1,void 0,this),Q("p",{className:"text-sm text-slate-300",children:["Esta acción eliminará de forma permanente a ",Q("span",{className:"font-black text-white",children:BJ?.nombre||"este perfil"},void 0,!1,void 0,this)," y sus datos en Firebase. No se puede deshacer."]},void 0,!0,void 0,this),H0&&Q("div",{className:"rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-xs font-semibold text-red-200",children:H0},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex justify-end gap-3",children:[Q("button",{type:"button",onClick:cZ,className:"btn-metal btn-metal--silver px-6 py-3 rounded-xl text-[10px]",children:"Cancelar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:k2,className:"btn-metal btn-metal--danger px-6 py-3 rounded-xl text-[10px]",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Y0&&Q("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:Q("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-5xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300",children:[Q("button",{type:"button",onClick:()=>{IZ();gQ(!1)},className:"p-4 hover:bg-slate-800 rounded-full transition-all",children:Q(a,{name:"x",size:24,className:"text-slate-400"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("form",{onSubmit:M2,className:"flex-1 overflow-y-auto p-12 space-y-12",children:[Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[Q("div",{className:"space-y-8",children:[Q("div",{className:"flex items-center gap-4",children:[Q("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white",children:Q(a,{name:"scroll"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-xl font-black italic text-white",children:"Nuevo Archivo del Reino"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-4",children:[Q("input",{required:!0,placeholder:"Nombre de la Carpeta",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none font-bold text-lg text-white",value:S.label,onChange:(J)=>WJ({...S,label:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"w-full",children:Q("div",{className:"space-y-1 w-full",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"URL de Portada"},void 0,!1,void 0,this),Q("input",{placeholder:"https://...",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold text-xs",value:S.coverImg,onChange:(J)=>WJ({...S,coverImg:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-6",children:[Q("h4",{className:"text-[10px] font-black uppercase text-slate-500 tracking-widest flex items-center gap-2",children:[Q(a,{name:"shield",size:12},void 0,!1,void 0,this)," Mandatos de Clasificación del Consejo"]},void 0,!0,void 0,this),Q("div",{className:"p-8 bg-slate-950/50 border theme-border-secondary rounded-2xl space-y-6",children:[Q("div",{className:"grid grid-cols-2 gap-4",children:[Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"NACIONALIDADES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:S.reglas.nacionalidades.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>WJ({...S,reglas:{...S.reglas,nacionalidades:S.reglas.nacionalidades.filter((Z)=>Z!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!S.reglas.nacionalidades.includes(J.target.value))WJ({...S,reglas:{...S.reglas,nacionalidades:[...S.reglas.nacionalidades,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir país..."},void 0,!1,void 0,this),j2.filter((J)=>J!=="Todas").map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"CIUDADES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:S.reglas.ciudades.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>WJ({...S,reglas:{...S.reglas,ciudades:S.reglas.ciudades.filter((Z)=>Z!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!S.reglas.ciudades.includes(J.target.value))WJ({...S,reglas:{...S.reglas,ciudades:[...S.reglas.ciudades,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir ciudad..."},void 0,!1,void 0,this),H2.filter((J)=>J!=="Todas").map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"PROFESIONES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:S.reglas.profesiones.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>WJ({...S,reglas:{...S.reglas,profesiones:S.reglas.profesiones.filter((Z)=>Z!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!S.reglas.profesiones.includes(J.target.value))WJ({...S,reglas:{...S.reglas,profesiones:[...S.reglas.profesiones,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir profesión..."},void 0,!1,void 0,this),Object.keys(Q0).map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 gap-2",children:[Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"EDAD MIN"},void 0,!1,void 0,this),Q("input",{type:"number",placeholder:"18",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:S.reglas.edadMin,onChange:(J)=>WJ({...S,reglas:{...S.reglas,edadMin:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"EDAD MAX"},void 0,!1,void 0,this),Q("input",{type:"number",placeholder:"30",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:S.reglas.edadMax,onChange:(J)=>WJ({...S,reglas:{...S.reglas,edadMax:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1 pt-4 border-t theme-border-secondary",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Condición de Score"},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[Q("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:S.reglas.caracteristica,onChange:(J)=>WJ({...S,reglas:{...S.reglas,caracteristica:J.target.value}}),children:JQ.map((J)=>Q("option",{children:J},J,!1,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:S.reglas.operador,onChange:(J)=>WJ({...S,reglas:{...S.reglas,operador:J.target.value}}),children:[Q("option",{children:"Superior a"},void 0,!1,void 0,this),Q("option",{children:"Inferior a"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("input",{type:"number",placeholder:"Umbral (0-10)",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-[var(--metal-gold)]",value:S.reglas.umbral,onChange:(J)=>WJ({...S,reglas:{...S.reglas,umbral:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"submit",className:"btn-metal btn-metal--gold w-full py-8 rounded-xl text-xs",children:"CREAR CARPETA INTELIGENTE"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},C3=ReactDOM.createRoot(document.getElementById("root"));C3.render(Q(D3,{},void 0,!1,void 0,this));