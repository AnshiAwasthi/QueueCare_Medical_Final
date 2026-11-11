/* Shared QueueCare demo data, theme, navigation and helpers */
(function(){
 const KEY='queuecare_v2_data', SESSION='queuecare_v2_session', THEME='queuecare_v2_theme';
 const doctors=[
  {id:'d1',name:'Dr. A. Sharma',department:'Cardiology',email:'doctor@queuecare.demo',initials:'AS'},
  {id:'d2',name:'Dr. R. Mehta',department:'General Medicine',email:'general@queuecare.demo',initials:'RM'},
  {id:'d3',name:'Dr. P. Singh',department:'Dermatology',email:'derma@queuecare.demo',initials:'PS'},
  {id:'d4',name:'Dr. N. Verma',department:'Orthopedics',email:'ortho@queuecare.demo',initials:'NV'},
  {id:'d5',name:'Dr. S. Kapoor',department:'Pediatrics',email:'pediatrics@queuecare.demo',initials:'SK'},
  {id:'d6',name:'Dr. M. Khan',department:'ENT',email:'ent@queuecare.demo',initials:'MK'},
  {id:'d7',name:'Dr. K. Rao',department:'Dental',email:'dental@queuecare.demo',initials:'KR'},
  {id:'d8',name:'Dr. V. Das',department:'Neurology',email:'neuro@queuecare.demo',initials:'VD'}
 ];
 const demoPatients=[
  {id:'p1',name:'Aarav Patel',email:'patient@queuecare.demo',phone:'+91 98765 43210',role:'patient'},
  {id:'p2',name:'Meera Joshi',email:'meera@queuecare.demo',phone:'+91 98765 43211',role:'patient'},
  {id:'p3',name:'Kabir Singh',email:'kabir@queuecare.demo',phone:'+91 98765 43212',role:'patient'},
  {id:'p4',name:'Ananya Das',email:'ananya@queuecare.demo',phone:'+91 98765 43213',role:'patient'}
 ];
 function dateOffset(days){const d=new Date();d.setDate(d.getDate()+days);return d.toISOString().slice(0,10)}
 function seed(){return {patients:demoPatients,doctors,appointments:[
  {id:'QC1001',patientId:'p2',patientName:'Meera Joshi',patientEmail:'meera@queuecare.demo',phone:'+91 98765 43211',doctorId:'d1',doctorName:'Dr. A. Sharma',department:'Cardiology',date:dateOffset(0),time:'09:00 AM',reason:'Routine heart health consultation',status:'waiting',token:'Q021',created:Date.now()-500000},
  {id:'QC1002',patientId:'p3',patientName:'Kabir Singh',patientEmail:'kabir@queuecare.demo',phone:'+91 98765 43212',doctorId:'d1',doctorName:'Dr. A. Sharma',department:'Cardiology',date:dateOffset(0),time:'09:30 AM',reason:'Follow-up consultation',status:'in-progress',token:'Q022',created:Date.now()-400000},
  {id:'QC1003',patientId:'p1',patientName:'Aarav Patel',patientEmail:'patient@queuecare.demo',phone:'+91 98765 43210',doctorId:'d1',doctorName:'Dr. A. Sharma',department:'Cardiology',date:dateOffset(0),time:'10:00 AM',reason:'General check-up',status:'waiting',token:'Q023',created:Date.now()-300000},
  {id:'QC1004',patientId:'p4',patientName:'Ananya Das',patientEmail:'ananya@queuecare.demo',phone:'+91 98765 43213',doctorId:'d2',doctorName:'Dr. R. Mehta',department:'General Medicine',date:dateOffset(0),time:'10:30 AM',reason:'Seasonal allergy symptoms',status:'waiting',token:'Q024',created:Date.now()-200000},
  {id:'QC1005',patientId:'p1',patientName:'Aarav Patel',patientEmail:'patient@queuecare.demo',phone:'+91 98765 43210',doctorId:'d2',doctorName:'Dr. R. Mehta',department:'General Medicine',date:dateOffset(3),time:'11:00 AM',reason:'Routine consultation',status:'confirmed',token:'Q025',created:Date.now()-100000}
 ],availability:{},profile:{}}}
 function getData(){try{let x=JSON.parse(localStorage.getItem(KEY));if(x&&Array.isArray(x.appointments))return x}catch(e){}let x=seed();saveData(x);return x}
 function saveData(x){localStorage.setItem(KEY,JSON.stringify(x));window.dispatchEvent(new Event('queuecare:update'))}
 function getSession(){try{return JSON.parse(sessionStorage.getItem(SESSION))}catch(e){return null}}
 function setSession(x){sessionStorage.setItem(SESSION,JSON.stringify(x))}
 function logout(){sessionStorage.removeItem(SESSION);location.href='login.html'}
 function initials(n){return (n||'User').split(' ').filter(Boolean).slice(0,2).map(s=>s[0]).join('').toUpperCase()}
 function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
 function fmtDate(s){if(!s)return '—';return new Date(s+'T00:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}
 function statusClass(s){return 'status-'+String(s).toLowerCase().replace(/\s/g,'-')}
 function statusLabel(s){return ({'waiting':'Waiting','in-progress':'In progress','confirmed':'Confirmed','completed':'Completed','cancelled':'Cancelled','skipped':'Skipped'})[s]||s}
 function toast(msg){let el=document.getElementById('toast');if(!el)return;el.textContent=msg;el.classList.add('show');clearTimeout(window.__qtoast);window.__qtoast=setTimeout(()=>el.classList.remove('show'),2600)}
 function showSection(name){document.querySelectorAll('.page-section').forEach(x=>x.classList.toggle('active',x.id==='section-'+name));document.querySelectorAll('[data-section]').forEach(x=>x.classList.toggle('active',x.dataset.section===name));let crumb=document.getElementById('pageCrumb');if(crumb)crumb.textContent=name.replace(/^\w/,c=>c.toUpperCase()).replace(/-/g,' ');if(location.hash!=='#'+name)history.replaceState(null,'','#'+name);document.querySelector('.sidebar')?.classList.remove('open')}
 function setupNav(){document.querySelectorAll('[data-section]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();showSection(a.dataset.section)}));document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>showSection(b.dataset.go)));let hash=location.hash.slice(1);if(hash&&document.getElementById('section-'+hash))showSection(hash);document.getElementById('mobileMenu')?.addEventListener('click',()=>document.querySelector('.sidebar')?.classList.toggle('open'))}
 function setupTheme(){const saved=localStorage.getItem(THEME)||'light';document.documentElement.dataset.theme=saved;document.querySelectorAll('[data-theme-toggle]').forEach(b=>{const paint=()=>b.textContent=document.documentElement.dataset.theme==='dark'?'☀':'☾';paint();b.addEventListener('click',()=>{let next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;localStorage.setItem(THEME,next);document.querySelectorAll('[data-theme-toggle]').forEach(x=>x.textContent=next==='dark'?'☀':'☾')})})}
 function guard(role){const s=getSession();if(!s||s.role!==role){location.href='login.html';return null}return s}
 function patientAppointments(email){return getData().appointments.filter(a=>a.patientEmail===email)}
 function doctorAppointments(email){return getData().appointments.filter(a=>a.doctorEmail===email||doctors.find(d=>d.id===a.doctorId)?.email===email)}
 document.addEventListener('DOMContentLoaded',()=>{setupTheme();document.querySelectorAll('[data-logout]').forEach(b=>b.addEventListener('click',logout));setupNav()});
 window.QC={KEY,SESSION,doctors,demoPatients,getData,saveData,getSession,setSession,logout,initials,esc,fmtDate,statusClass,statusLabel,toast,showSection,guard,patientAppointments,doctorAppointments,dateOffset};
})();