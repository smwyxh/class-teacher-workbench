/* ===== 应用主逻辑 ===== */

/* SVG 图标库 */
const ICONS = {
  chart:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
  chat:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
  doc:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
  calendar:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
  check:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  phone:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  pin:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  math:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path><line x1="8" y1="7" x2="16" y2="7"></line><line x1="8" y1="11" x2="12" y2="11"></line></svg>`,
  image:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`,
  file:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
};
function icon(name){ return ICONS[name] || ''; }

/* ---------- 初始化 ---------- */
function init(){
  loadData();
  renderHeader();
  renderClassPanel();
  renderAllTabs();
  startClock();
  // 默认渲染工作台
  switchTab('dashboard');
}

/* 顶部时间 */
function startClock(){
  const el = document.getElementById('headerDateTime');
  function update(){
    const now = new Date();
    const days = ['日','一','二','三','四','五','六'];
    const d = `${now.getFullYear()}/${String(now.getMonth()+1).padStart(2,'0')}/${String(now.getDate()).padStart(2,'0')} 周${days[now.getDay()]}`;
    const t = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
    el.innerHTML = `<div class="date">${d}</div><div class="time">${t}</div>`;
  }
  update();
  setInterval(update,1000);
}

/* 顶部栏渲染 */
function renderHeader(){
  const c = getCurrentClass();
  document.getElementById('currentClassName').textContent = c.name;
}

/* ---------- 班级切换 ---------- */
function toggleClassPanel(){
  const panel = document.getElementById('classPanel');
  const overlay = document.getElementById('classPanelOverlay');
  const isOpen = panel.classList.contains('show');
  if(isOpen){
    panel.classList.remove('show');
    overlay.classList.remove('show');
  }else{
    renderClassPanel();
    panel.classList.add('show');
    overlay.classList.add('show');
  }
}

function renderClassPanel(){
  const list = document.getElementById('classList');
  list.innerHTML = DB.classes.map(c=>`
    <div class="class-list-item ${c.id===DB.currentClassId?'active':''}" onclick="switchClass('${c.id}')">
      <span>🎓</span>
      <span>${c.name}</span>
      <span class="check">✓</span>
    </div>
  `).join('');
}

function switchClass(id){
  DB.currentClassId = id;
  saveData();
  renderHeader();
  toggleClassPanel();
  renderAllTabs();
  renderCurrentTab();
  showToast('已切换至 ' + getCurrentClass().name);
}

function showAddClassForm(){
  document.getElementById('newClassName').value = '';
  document.getElementById('addClassModal').style.display = 'flex';
}
function closeAddClassForm(){
  document.getElementById('addClassModal').style.display = 'none';
}
function addClass(){
  const name = document.getElementById('newClassName').value.trim();
  if(!name){showToast('请输入班级名称');return;}
  const id = genId('c');
  DB.classes.push({
    id,name,
    students:[],schedule:{'周一':[],'周二':[],'周三':[],'周四':[],'周五':[]},
    todos:[],communications:[],affairs:[]
  });
  DB.currentClassId = id;
  saveData();
  closeAddClassForm();
  renderHeader();
  renderClassPanel();
  renderAllTabs();
  renderCurrentTab();
  showToast('已新增班级：' + name);
}

/* ---------- Tab 切换 ---------- */
let currentTab = 'dashboard';
function switchTab(tab){
  currentTab = tab;
  document.querySelectorAll('.tab-page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-item').forEach(t=>t.classList.remove('active'));
  document.getElementById('tab-'+tab).classList.add('active');
  document.querySelector(`.tab-item[data-tab="${tab}"]`).classList.add('active');
  renderTab(tab);
  // FAB 控制
  const fab = document.getElementById('fab');
  if(['students','communication','affairs','schedule'].includes(tab)){
    fab.style.display = 'flex';
  }else{
    fab.style.display = 'none';
  }
}

function renderCurrentTab(){ renderTab(currentTab); }
function renderAllTabs(){ ['dashboard','students','communication','affairs','schedule'].forEach(renderTab); }

function renderTab(tab){
  const el = document.getElementById('tab-'+tab);
  switch(tab){
    case 'dashboard': el.innerHTML = renderDashboard(); break;
    case 'students': el.innerHTML = renderStudents(); break;
    case 'communication': el.innerHTML = renderCommunication(); break;
    case 'affairs': el.innerHTML = renderAffairs(); break;
    case 'schedule': el.innerHTML = renderSchedule(); break;
  }
}

/* FAB 点击根据当前Tab */
function onFabClick(){
  switch(currentTab){
    case 'students': showAddStudentModal(); break;
    case 'communication': showAddCommModal(); break;
    case 'affairs': showAddAffairModal(); break;
    case 'schedule': showImportScheduleModal(); break;
  }
}

/* ---------- Toast ---------- */
let toastTimer = null;
function showToast(msg){
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>el.classList.remove('show'),2000);
}

/* ========================================================
   模块1：工作台
======================================================== */
function renderDashboard(){
  const c = getCurrentClass();
  const today = new Date();
  const dayIdx = (today.getDay()+6)%7; // 周一=0
  const todaySchedule = (WEEKDAYS[dayIdx] && c.schedule[WEEKDAYS[dayIdx]]) || [];
  const now = today.getHours()*60+today.getMinutes();
  let currentPeriod = -1;
  PERIODS.forEach((p,i)=>{
    const [s,e] = p.t.split('-');
    const sh = parseInt(s.split(':')[0])*60+parseInt(s.split(':')[1]);
    const eh = parseInt(e.split(':')[0])*60+parseInt(e.split(':')[1]);
    if(now>=sh && now<=eh) currentPeriod = i;
  });

  const pendingTodos = c.todos.filter(t=>!t.done);
  const studentCount = c.students.length;
  const avgScore = c.students.length? Math.round(c.students.reduce((a,b)=>a+b.score,0)/c.students.length) : 0;
  const commCount = c.communications.length;

  const hour = today.getHours();
  const greeting = hour<6?'凌晨好':hour<11?'早上好':hour<13?'中午好':hour<18?'下午好':'晚上好';

  return `
    <div class="welcome-card">
      <div class="greeting">${greeting}，${DB.teacher}</div>
      <div class="teacher-name">${c.name}</div>
      <div class="sub-info">任教科目：${DB.subject} · 今日${pendingTodos.length}项待办</div>
    </div>

    <div class="stat-grid">
      <div class="stat-card"><div class="stat-num">${studentCount}</div><div class="stat-label">学生数</div></div>
      <div class="stat-card success"><div class="stat-num">${avgScore}</div><div class="stat-label">平均分</div></div>
      <div class="stat-card warning"><div class="stat-num">${pendingTodos.length}</div><div class="stat-label">待办</div></div>
      <div class="stat-card"><div class="stat-num">${commCount}</div><div class="stat-label">沟通数</div></div>
    </div>

    <div class="quick-grid">
      <div class="quick-item" onclick="switchTab('students')"><div class="quick-icon svg-icon">${icon('chart')}</div>学情</div>
      <div class="quick-item" onclick="switchTab('communication')"><div class="quick-icon svg-icon">${icon('chat')}</div>沟通</div>
      <div class="quick-item" onclick="switchTab('affairs')"><div class="quick-icon svg-icon">${icon('doc')}</div>事务</div>
      <div class="quick-item" onclick="switchTab('schedule')"><div class="quick-icon svg-icon">${icon('calendar')}</div>课表</div>
      <div class="quick-item" onclick="quickAddTodo()"><div class="quick-icon svg-icon">${icon('check')}</div>记待办</div>
      <div class="quick-item" onclick="quickAddComm()"><div class="quick-icon svg-icon">${icon('phone')}</div>记沟通</div>
      <div class="quick-item" onclick="quickAddAffair()"><div class="quick-icon svg-icon">${icon('pin')}</div>记事务</div>
      <div class="quick-item" onclick="showMyMathSchedule()"><div class="quick-icon svg-icon">${icon('math')}</div>数学课</div>
    </div>

    <div class="section-title">📋 今日待办 <span class="more" onclick="quickAddTodo()">+ 添加</span></div>
    <div class="card">
      ${c.todos.length? c.todos.map(t=>`
        <div class="todo-item ${t.done?'done':''}" onclick="toggleTodo('${t.id}')">
          <div class="todo-check">✓</div>
          <div class="todo-text">${t.text}</div>
          <span class="todo-tag">${t.tag}</span>
        </div>
      `).join('') : '<div class="empty-state"><div class="empty-text">暂无待办，享受轻松时刻</div></div>'}
    </div>

    <div class="section-title">📅 今日课表（${WEEKDAYS[dayIdx]||'今日'}）</div>
    <div class="card" style="padding:10px;">
      <div class="schedule-preview">
        ${todaySchedule.length? todaySchedule.map((s,i)=>`
          <div class="schedule-period ${s==='数学'?'math':''} ${i===currentPeriod?'now':''}">
            <div class="period">${PERIODS[i]?PERIODS[i].n:''}</div>
            <div class="subject">${s}</div>
          </div>
        `).join('') : '<div class="empty-state" style="padding:20px;"><div class="empty-text">今日无课</div></div>'}
      </div>
    </div>

    <div class="section-title">📢 最新动态</div>
    <div>
      ${c.affairs.slice(-3).reverse().map(a=>`
        <div class="affair-card ${a.type}">
          <div class="affair-title">${a.title}</div>
          <div class="affair-desc">${a.desc}</div>
          <div class="affair-foot"><span>${a.date}</span><span class="list-badge ${affairBadgeClass(a.type)}">${affairTypeLabel(a.type)}</span></div>
        </div>
      `).join('') || '<div class="empty-state"><div class="empty-text">暂无班级动态</div></div>'}
    </div>
  `;
}

function toggleTodo(id){
  const c = getCurrentClass();
  const t = c.todos.find(x=>x.id===id);
  if(t){ t.done = !t.done; saveData(); renderCurrentTab(); }
}

function quickAddTodo(){ showAddTodoModal(); }
function quickAddComm(){ showAddCommModal(); }
function quickAddAffair(){ showAddAffairModal(); }
function showMyMathSchedule(){ switchTab('schedule'); setTimeout(()=>showMyMathScheduleModal(),200); }

/* ========================================================
   模块2：学情管理
======================================================== */
function renderStudents(){
  const c = getCurrentClass();
  return `
    <div class="page-header"><h2>学情管理</h2><button class="btn-confirm" style="padding:6px 12px;font-size:13px;" onclick="showBatchImportStudents()">📥 批量导入</button></div>
    <div class="search-bar">
      <span>🔍</span>
      <input type="text" id="studentSearch" placeholder="搜索学生姓名..." oninput="filterStudents(this.value)">
    </div>
    <div class="segment">
      <div class="segment-item active" onclick="filterStudentSeg('all',this)">全部</div>
      <div class="segment-item" onclick="filterStudentSeg('优',this)">优秀</div>
      <div class="segment-item" onclick="filterStudentSeg('良',this)">良好</div>
      <div class="segment-item" onclick="filterStudentSeg('中',this)">待提升</div>
    </div>
    <div id="studentList">
      ${renderStudentList(c.students)}
    </div>
  `;
}

function renderStudentList(students){
  if(!students.length) return '<div class="empty-state"><div class="empty-icon">📭</div><div class="empty-text">暂无学生数据，点右下角+添加</div></div>';
  return students.map(s=>{
    const scoreColor = s.score>=90?'success':s.score>=75?'':'warning';
    return `
      <div class="list-item" onclick="showStudentDetail('${s.id}')">
        <div class="list-avatar" style="background:${s.gender==='女'?'#fce7f3':'#dbeafe'};color:${s.gender==='女'?'#be185d':'#1e40af'}">${s.name[0]}</div>
        <div class="list-body">
          <div class="list-title">${s.name} <span style="font-size:12px;color:var(--text-light);font-weight:400">${s.gender}</span></div>
          <div class="list-sub">考勤：${s.attendance} · 表现：${s.performance}</div>
          <div class="score-bar"><div class="score-bar-fill" style="width:${s.score}%;background:${s.score>=90?'var(--success)':s.score>=75?'var(--primary)':'var(--warning)'}"></div></div>
        </div>
        <div class="list-right">
          <div style="font-size:18px;font-weight:700;color:${s.score>=90?'var(--success)':s.score>=75?'var(--primary)':'var(--warning)'}">${s.score}</div>
          <span class="list-badge ${scoreColor==='success'?'badge-green':scoreColor==='warning'?'badge-yellow':'badge-blue'}">${s.performance}</span>
        </div>
      </div>
    `;
  }).join('');
}

let studentFilter = 'all';
function filterStudentSeg(seg,el){
  document.querySelectorAll('#tab-students .segment-item').forEach(s=>s.classList.remove('active'));
  el.classList.add('active');
  studentFilter = seg;
  applyStudentFilter();
}
function filterStudents(kw){
  applyStudentFilter(kw);
}
function applyStudentFilter(kw){
  const c = getCurrentClass();
  let list = c.students;
  if(studentFilter!=='all'){
    list = list.filter(s=>s.performance===studentFilter);
  }
  if(kw){
    list = list.filter(s=>s.name.includes(kw));
  }
  document.getElementById('studentList').innerHTML = renderStudentList(list);
}

function showStudentDetail(id){
  const c = getCurrentClass();
  const s = c.students.find(x=>x.id===id);
  if(!s) return;
  showModal(`
    <h3>学生详情</h3>
    <div style="text-align:center;margin-bottom:16px;">
      <div class="list-avatar" style="width:60px;height:60px;font-size:24px;margin:0 auto 8px;background:${s.gender==='女'?'#fce7f3':'#dbeafe'};color:${s.gender==='女'?'#be185d':'#1e40af'}">${s.name[0]}</div>
      <div style="font-size:18px;font-weight:700;">${s.name}</div>
      <div style="font-size:13px;color:var(--text-light);">${c.name} · ${s.gender}</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;">
      <div class="stat-card"><div class="stat-num">${s.score}</div><div class="stat-label">数学成绩</div></div>
      <div class="stat-card success"><div class="stat-num">${s.performance}</div><div class="stat-label">课堂表现</div></div>
    </div>
    <div class="modal-label">考勤情况</div>
    <div style="padding:10px;background:var(--bg);border-radius:8px;font-size:14px;">${s.attendance}</div>
    <div class="modal-label">备注信息</div>
    <div style="padding:10px;background:var(--bg);border-radius:8px;font-size:14px;min-height:50px;">${s.note||'无'}</div>
    <div class="modal-actions">
      <button class="btn-cancel" onclick="closeModal()">关闭</button>
      <button class="btn-confirm" onclick="closeModal();editStudent('${s.id}')">编辑</button>
      <button class="btn-confirm btn-danger" onclick="deleteStudent('${s.id}')">删除</button>
    </div>
  `);
}

function showAddStudentModal(){
  const c = getCurrentClass();
  showModal(`
    <h3>添加学生</h3>
    <div class="modal-label">姓名</div>
    <input type="text" class="modal-input" id="stuName" placeholder="学生姓名">
    <div class="modal-label">性别</div>
    <div class="choice-row">
      <button class="choice-btn active" onclick="pickChoice(this,'stuGender','男')">男</button>
      <button class="choice-btn" onclick="pickChoice(this,'stuGender','女')">女</button>
    </div>
    <div class="modal-label">数学成绩</div>
    <input type="number" class="modal-input" id="stuScore" placeholder="0-100" min="0" max="100">
    <div class="modal-label">课堂表现</div>
    <div class="choice-row">
      <button class="choice-btn" onclick="pickChoice(this,'stuPerf','优')">优</button>
      <button class="choice-btn active" onclick="pickChoice(this,'stuPerf','良')">良</button>
      <button class="choice-btn" onclick="pickChoice(this,'stuPerf','中')">中</button>
    </div>
    <div class="modal-label">考勤情况</div>
    <input type="text" class="modal-input" id="stuAttend" placeholder="如：正常" value="正常">
    <div class="modal-label">备注</div>
    <textarea class="modal-textarea" id="stuNote" placeholder="备注信息"></textarea>
    <div class="modal-actions">
      <button class="btn-cancel" onclick="closeModal()">取消</button>
      <button class="btn-confirm" onclick="addStudent()">保存</button>
    </div>
  `);
}

let _choiceVals = {};
function pickChoice(el,key,val){
  el.parentElement.querySelectorAll('.choice-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  _choiceVals[key] = val;
}

function addStudent(){
  const c = getCurrentClass();
  const name = document.getElementById('stuName').value.trim();
  if(!name){showToast('请输入姓名');return;}
  const score = parseInt(document.getElementById('stuScore').value)||0;
  c.students.push({
    id:genId('s'),name,
    gender:_choiceVals.stuGender||'男',
    score,
    attendance:document.getElementById('stuAttend').value.trim()||'正常',
    performance:_choiceVals.stuPerf||'良',
    note:document.getElementById('stuNote').value.trim()
  });
  saveData();
  closeModal();
  renderTab('students');
  renderTab('dashboard');
  showToast('已添加学生：'+name);
}

function editStudent(id){
  const c = getCurrentClass();
  const s = c.students.find(x=>x.id===id);
  if(!s) return;
  _choiceVals.stuGender = s.gender;
  _choiceVals.stuPerf = s.performance;
  showModal(`
    <h3>编辑学生</h3>
    <div class="modal-label">姓名</div>
    <input type="text" class="modal-input" id="stuName" value="${s.name}">
    <div class="modal-label">性别</div>
    <div class="choice-row">
      <button class="choice-btn ${s.gender==='男'?'active':''}" onclick="pickChoice(this,'stuGender','男')">男</button>
      <button class="choice-btn ${s.gender==='女'?'active':''}" onclick="pickChoice(this,'stuGender','女')">女</button>
    </div>
    <div class="modal-label">数学成绩</div>
    <input type="number" class="modal-input" id="stuScore" value="${s.score}" min="0" max="100">
    <div class="modal-label">课堂表现</div>
    <div class="choice-row">
      <button class="choice-btn ${s.performance==='优'?'active':''}" onclick="pickChoice(this,'stuPerf','优')">优</button>
      <button class="choice-btn ${s.performance==='良'?'active':''}" onclick="pickChoice(this,'stuPerf','良')">良</button>
      <button class="choice-btn ${s.performance==='中'?'active':''}" onclick="pickChoice(this,'stuPerf','中')">中</button>
    </div>
    <div class="modal-label">考勤情况</div>
    <input type="text" class="modal-input" id="stuAttend" value="${s.attendance}">
    <div class="modal-label">备注</div>
    <textarea class="modal-textarea" id="stuNote">${s.note||''}</textarea>
    <div class="modal-actions">
      <button class="btn-cancel" onclick="closeModal()">取消</button>
      <button class="btn-confirm" onclick="updateStudent('${id}')">保存</button>
    </div>
  `);
}

function updateStudent(id){
  const c = getCurrentClass();
  const s = c.students.find(x=>x.id===id);
  if(!s) return;
  s.name = document.getElementById('stuName').value.trim();
  s.gender = _choiceVals.stuGender||s.gender;
  s.score = parseInt(document.getElementById('stuScore').value)||0;
  s.performance = _choiceVals.stuPerf||s.performance;
  s.attendance = document.getElementById('stuAttend').value.trim();
  s.note = document.getElementById('stuNote').value.trim();
  saveData();
  closeModal();
  renderTab('students');
  renderTab('dashboard');
  showToast('已更新学生信息');
}

function deleteStudent(id){
  showModal(`
    <h3>确认删除</h3>
    <p style="text-align:center;color:var(--text-light);margin:10px 0 20px;">删除后无法恢复，确定删除该学生吗？</p>
    <div class="modal-actions">
      <button class="btn-cancel" onclick="closeModal()">取消</button>
      <button class="btn-confirm btn-danger" onclick="confirmDeleteStudent('${id}')">删除</button>
    </div>
  `);
}
function confirmDeleteStudent(id){
  const c = getCurrentClass();
  c.students = c.students.filter(s=>s.id!==id);
  saveData();
  closeModal();
  renderTab('students');
  renderTab('dashboard');
  showToast('已删除');
}

/* 批量导入学生 */
function showBatchImportStudents(){
  showModal(`
    <h3>📥 批量导入学生</h3>
    <p style="font-size:13px;color:var(--text-light);margin-bottom:12px;">支持从 Excel/WPS 复制后粘贴，或上传 TXT/CSV 文件。格式：姓名 性别 成绩（空格、逗号或制表符分隔均可），每行一个学生。</p>
    <div class="upload-area" onclick="document.getElementById('stuFile').click()">
      <div class="upload-icon svg-icon">${icon('file')}</div>
      <div>点击选择学生名单文件</div>
      <div style="font-size:11px;margin-top:4px;">支持 TXT/CSV</div>
      <input type="file" id="stuFile" accept=".txt,.csv,text/*" onchange="handleBatchStudentFile(event)">
    </div>
    <div class="modal-label">或直接粘贴名单：</div>
    <textarea class="modal-textarea" id="batchStudentText" placeholder="张明 男 92&#10;李华 女 85&#10;王强 男 78" style="min-height:120px;"></textarea>
    <div style="font-size:12px;color:var(--text-light);margin:10px 0;">
      <b>支持格式示例：</b><br>
      张明 男 92 正常 良<br>
      李华 女 85 正常 良<br>
      王强 男 78 迟到1次 中
    </div>
    <div class="modal-actions">
      <button class="btn-cancel" onclick="closeModal()">取消</button>
      <button class="btn-confirm" onclick="parseBatchStudents()">导入</button>
    </div>
  `);
}

function handleBatchStudentFile(e){
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(ev){
    document.getElementById('batchStudentText').value = ev.target.result;
    showToast('文件已载入，点导入');
  };
  reader.readAsText(file);
}

function parseBatchStudents(){
  const text = document.getElementById('batchStudentText').value.trim();
  if(!text){showToast('请输入或上传学生名单');return;}
  const c = getCurrentClass();
  const lines = text.split(/\n/).map(l=>l.trim()).filter(l=>l);
  let added = 0;
  lines.forEach(line=>{
    // 支持 姓名 性别 成绩 考勤 表现 备注
    const parts = line.split(/[,，\s、\t]+/).map(s=>s.trim()).filter(s=>s);
    if(!parts.length) return;
    const name = parts[0];
    if(!name) return;
    const gender = (parts[1]==='女' || parts[1]==='2' || parts[1]==='F')?'女':'男';
    const score = parseInt(parts[2]) || 0;
    let attendance = '正常';
    let performance = '良';
    let note = '';
    if(parts[3]){
      const p3 = parts[3];
      if(['优','良','中','差'].includes(p3)) performance = p3;
      else attendance = p3;
    }
    if(parts[4]){
      const p4 = parts[4];
      if(['优','良','中','差'].includes(p4)) performance = p4;
      else if(attendance==='正常') attendance = p4;
    }
    if(parts[5]){
      note = parts.slice(5).join(' ');
    }
    c.students.push({
      id:genId('s'),name,gender,score,attendance,performance,note
    });
    added++;
  });
  saveData();
  closeModal();
  renderTab('students');
  renderTab('dashboard');
  showToast(`成功导入 ${added} 名学生`);
}

/* ========================================================
   模块3：沟通中心
======================================================== */
function renderCommunication(){
  const c = getCurrentClass();
  const types = ['电话沟通','微信留言','面谈','家访','其他'];
  return `
    <div class="page-header"><h2>沟通中心</h2></div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-num">${c.communications.length}</div><div class="stat-label">总沟通</div></div>
      ${types.slice(0,3).map(t=>{
        const cnt = c.communications.filter(x=>x.type===t).length;
        return `<div class="stat-card"><div class="stat-num">${cnt}</div><div class="stat-label">${t.slice(0,2)}</div></div>`;
      }).join('')}
    </div>
    <div class="segment">
      <div class="segment-item active" onclick="filterComm('all',this)">全部</div>
      <div class="segment-item" onclick="filterComm('电话沟通',this)">电话</div>
      <div class="segment-item" onclick="filterComm('微信留言',this)">微信</div>
      <div class="segment-item" onclick="filterComm('面谈',this)">面谈</div>
    </div>
    <div id="commList">
      ${renderCommList(c.communications)}
    </div>
  `;
}

function renderCommList(list){
  if(!list.length) return '<div class="empty-state"><div class="empty-icon">💬</div><div class="empty-text">暂无沟通记录，点右下角+添加</div></div>';
  return list.slice().reverse().map(cm=>`
    <div class="comm-card" onclick="showCommDetail('${cm.id}')">
      <div class="comm-head">
        <span class="comm-student">👤 ${cm.student}</span>
        <span class="list-badge badge-blue">${cm.type}</span>
      </div>
      <div class="comm-body">${cm.content.length>50?cm.content.slice(0,50)+'...':cm.content}</div>
      <div class="comm-foot">
        <span>📅 ${cm.date}</span>
        <span>✅ ${cm.result||'已记录'}</span>
      </div>
    </div>
  `).join('');
}

let commFilter = 'all';
function filterComm(type,el){
  document.querySelectorAll('#tab-communication .segment-item').forEach(s=>s.classList.remove('active'));
  el.classList.add('active');
  commFilter = type;
  const c = getCurrentClass();
  const list = type==='all'?c.communications:c.communications.filter(x=>x.type===type);
  document.getElementById('commList').innerHTML = renderCommList(list);
}

function showCommDetail(id){
  const c = getCurrentClass();
  const cm = c.communications.find(x=>x.id===id);
  if(!cm) return;
  showModal(`
    <h3>沟通详情</h3>
    <div style="display:flex;justify-content:space-between;margin-bottom:12px;">
      <span style="font-size:16px;font-weight:600;">👤 ${cm.student}</span>
      <span class="list-badge badge-blue">${cm.type}</span>
    </div>
    <div class="modal-label">沟通时间</div>
    <div style="padding:10px;background:var(--bg);border-radius:8px;">${cm.date}</div>
    <div class="modal-label">沟通内容</div>
    <div style="padding:10px;background:var(--bg);border-radius:8px;min-height:60px;line-height:1.6;">${cm.content}</div>
    <div class="modal-label">处理结果</div>
    <div style="padding:10px;background:var(--bg);border-radius:8px;">${cm.result||'无'}</div>
    <div class="modal-actions">
      <button class="btn-cancel" onclick="closeModal()">关闭</button>
      <button class="btn-confirm btn-danger" onclick="deleteComm('${cm.id}')">删除</button>
    </div>
  `);
}

function showAddCommModal(){
  const c = getCurrentClass();
  const today = new Date().toISOString().slice(0,10);
  const studentOptions = c.students.map(s=>`<option value="${s.name}">${s.name}</option>`).join('');
  showModal(`
    <h3>新增沟通记录</h3>
    <div class="modal-label">学生</div>
    <select class="modal-select" id="cmStudent">${studentOptions||'<option>请先添加学生</option>'}</select>
    <div class="modal-label">沟通方式</div>
    <div class="choice-row">
      <button class="choice-btn active" onclick="pickChoice(this,'cmType','电话沟通')">电话</button>
      <button class="choice-btn" onclick="pickChoice(this,'cmType','微信留言')">微信</button>
      <button class="choice-btn" onclick="pickChoice(this,'cmType','面谈')">面谈</button>
      <button class="choice-btn" onclick="pickChoice(this,'cmType','家访')">家访</button>
      <button class="choice-btn" onclick="pickChoice(this,'cmType','其他')">其他</button>
    </div>
    <div class="modal-label">日期</div>
    <input type="date" class="modal-input" id="cmDate" value="${today}">
    <div class="modal-label">沟通内容</div>
    <textarea class="modal-textarea" id="cmContent" placeholder="请输入沟通内容..."></textarea>
    <div class="modal-label">处理结果</div>
    <input type="text" class="modal-input" id="cmResult" placeholder="如：家长配合、持续跟进等">
    <div class="modal-actions">
      <button class="btn-cancel" onclick="closeModal()">取消</button>
      <button class="btn-confirm" onclick="addComm()">保存</button>
    </div>
  `);
  _choiceVals.cmType = '电话沟通';
}

function addComm(){
  const c = getCurrentClass();
  const student = document.getElementById('cmStudent').value;
  const content = document.getElementById('cmContent').value.trim();
  if(!content){showToast('请输入沟通内容');return;}
  c.communications.push({
    id:genId('cm'),student,
    type:_choiceVals.cmType||'电话沟通',
    date:document.getElementById('cmDate').value,
    content,
    result:document.getElementById('cmResult').value.trim()
  });
  saveData();
  closeModal();
  renderTab('communication');
  renderTab('dashboard');
  showToast('已添加沟通记录');
}

function deleteComm(id){
  const c = getCurrentClass();
  c.communications = c.communications.filter(x=>x.id!==id);
  saveData();
  closeModal();
  renderTab('communication');
  renderTab('dashboard');
  showToast('已删除');
}

/* ========================================================
   模块4：班级事务
======================================================== */
function affairTypeLabel(t){
  return {meeting:'班会',duty:'值日',award:'奖励',punish:'处分',event:'活动'}[t]||t;
}
function affairBadgeClass(t){
  return {meeting:'badge-blue',duty:'badge-green',award:'badge-yellow',punish:'badge-red',event:'badge-blue'}[t]||'badge-gray';
}

function renderAffairs(){
  const c = getCurrentClass();
  return `
    <div class="page-header"><h2>班级事务</h2></div>
    <div class="segment">
      <div class="segment-item active" onclick="filterAffair('all',this)">全部</div>
      <div class="segment-item" onclick="filterAffair('meeting',this)">班会</div>
      <div class="segment-item" onclick="filterAffair('duty',this)">值日</div>
      <div class="segment-item" onclick="filterAffair('award',this)">奖惩</div>
      <div class="segment-item" onclick="filterAffair('event',this)">活动</div>
    </div>
    <div id="affairList">
      ${renderAffairList(c.affairs)}
    </div>
  `;
}

function renderAffairList(list){
  if(!list.length) return '<div class="empty-state"><div class="empty-icon">📋</div><div class="empty-text">暂无事务记录，点右下角+添加</div></div>';
  return list.slice().reverse().map(a=>`
    <div class="affair-card ${a.type}" onclick="showAffairDetail('${a.id}')">
      <div class="affair-title">${a.title}</div>
      <div class="affair-desc">${a.desc.length>40?a.desc.slice(0,40)+'...':a.desc}</div>
      <div class="affair-foot">
        <span>📅 ${a.date}</span>
        <span class="list-badge ${affairBadgeClass(a.type)}">${affairTypeLabel(a.type)}</span>
      </div>
    </div>
  `).join('');
}

let affairFilter = 'all';
function filterAffair(type,el){
  document.querySelectorAll('#tab-affairs .segment-item').forEach(s=>s.classList.remove('active'));
  el.classList.add('active');
  affairFilter = type;
  const c = getCurrentClass();
  let list = c.affairs;
  if(type==='award') list = list.filter(a=>a.type==='award'||a.type==='punish');
  else if(type!=='all') list = list.filter(a=>a.type===type);
  document.getElementById('affairList').innerHTML = renderAffairList(list);
}

function showAffairDetail(id){
  const c = getCurrentClass();
  const a = c.affairs.find(x=>x.id===id);
  if(!a) return;
  showModal(`
    <h3>事务详情</h3>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <span style="font-size:17px;font-weight:600;">${a.title}</span>
      <span class="list-badge ${affairBadgeClass(a.type)}">${affairTypeLabel(a.type)}</span>
    </div>
    <div class="modal-label">日期</div>
    <div style="padding:10px;background:var(--bg);border-radius:8px;">${a.date}</div>
    <div class="modal-label">详细内容</div>
    <div style="padding:10px;background:var(--bg);border-radius:8px;min-height:60px;line-height:1.6;">${a.desc}</div>
    <div class="modal-actions">
      <button class="btn-cancel" onclick="closeModal()">关闭</button>
      <button class="btn-confirm btn-danger" onclick="deleteAffair('${a.id}')">删除</button>
    </div>
  `);
}

function showAddAffairModal(){
  const today = new Date().toISOString().slice(0,10);
  showModal(`
    <h3>新增事务</h3>
    <div class="modal-label">类型</div>
    <div class="choice-row">
      <button class="choice-btn active" onclick="pickChoice(this,'afType','meeting')">班会</button>
      <button class="choice-btn" onclick="pickChoice(this,'afType','duty')">值日</button>
      <button class="choice-btn" onclick="pickChoice(this,'afType','award')">奖励</button>
      <button class="choice-btn" onclick="pickChoice(this,'afType','punish')">处分</button>
      <button class="choice-btn" onclick="pickChoice(this,'afType','event')">活动</button>
    </div>
    <div class="modal-label">标题</div>
    <input type="text" class="modal-input" id="afTitle" placeholder="事务标题">
    <div class="modal-label">日期</div>
    <input type="date" class="modal-input" id="afDate" value="${today}">
    <div class="modal-label">详细内容</div>
    <textarea class="modal-textarea" id="afDesc" placeholder="请输入详细内容..."></textarea>
    <div class="modal-actions">
      <button class="btn-cancel" onclick="closeModal()">取消</button>
      <button class="btn-confirm" onclick="addAffair()">保存</button>
    </div>
  `);
  _choiceVals.afType = 'meeting';
}

function addAffair(){
  const c = getCurrentClass();
  const title = document.getElementById('afTitle').value.trim();
  if(!title){showToast('请输入标题');return;}
  c.affairs.push({
    id:genId('a'),
    type:_choiceVals.afType||'meeting',
    title,
    date:document.getElementById('afDate').value,
    desc:document.getElementById('afDesc').value.trim()
  });
  saveData();
  closeModal();
  renderTab('affairs');
  renderTab('dashboard');
  showToast('已添加事务');
}

function deleteAffair(id){
  const c = getCurrentClass();
  c.affairs = c.affairs.filter(x=>x.id!==id);
  saveData();
  closeModal();
  renderTab('affairs');
  renderTab('dashboard');
  showToast('已删除');
}

/* ========================================================
   模块5：我的课表
======================================================== */
function renderSchedule(){
  const c = getCurrentClass();
  return `
    <div class="page-header"><h2>我的课表</h2></div>
    <div class="segment">
      <div class="segment-item active" onclick="switchScheduleView('class',this)">班级课表</div>
      <div class="segment-item" onclick="switchScheduleView('math',this)">我的数学课</div>
    </div>
    <div id="scheduleContent">
      ${renderClassSchedule(c)}
    </div>
  `;
}

let scheduleView = 'class';
function switchScheduleView(view,el){
  document.querySelectorAll('#tab-schedule .segment-item').forEach(s=>s.classList.remove('active'));
  el.classList.add('active');
  scheduleView = view;
  const c = getCurrentClass();
  const content = document.getElementById('scheduleContent');
  if(view==='class'){
    content.innerHTML = renderClassSchedule(c);
  }else{
    content.innerHTML = renderMyMathSchedule();
  }
}

function renderClassSchedule(c){
  const sch = c.schedule;
  let rows = '';
  for(let i=0;i<8;i++){
    rows += `<tr><td style="background:var(--bg);font-size:11px;">${PERIODS[i].n}<br><span style="color:var(--text-lighter);font-size:10px;">${PERIODS[i].t}</span></td>`;
    WEEKDAYS.forEach(day=>{
      const subj = sch[day] && sch[day][i] ? sch[day][i] : '';
      const isMath = subj==='数学';
      rows += `<td class="${isMath?'math':''}">${subj||'-'}</td>`;
    });
    rows += `</tr>`;
  }
  return `
    <div class="card" style="padding:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <div style="font-weight:600;font-size:15px;">${c.name} · 课表</div>
        <span class="list-badge badge-blue">${c.students.length}人</span>
      </div>
      <table class="schedule-table">
        <thead>
          <tr><th class="corner">节次</th>${WEEKDAYS.map(d=>`<th class="day-header">${d}</th>`).join('')}</tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      <div style="font-size:12px;color:var(--text-light);margin-top:8px;">📌 紫色标记为数学课，点右下角+可导入课表</div>
    </div>
    <div class="card">
      <div style="font-weight:600;margin-bottom:10px;">📥 导入课表</div>
      <div style="display:flex;gap:8px;">
        <button class="btn-confirm" style="flex:1;" onclick="showImportScheduleModal('image')">📷 图片导入</button>
        <button class="btn-confirm" style="flex:1;background:var(--success);" onclick="showImportScheduleModal('doc')">📄 文档导入</button>
      </div>
      <button class="btn-cancel" style="width:100%;margin-top:8px;" onclick="showManualEditSchedule()">✏️ 手动编辑课表</button>
    </div>
  `;
}

/* 我的数学课表：汇总所有班级的数学课 */
function renderMyMathSchedule(){
  let html = '<div class="card" style="padding:10px;"><div style="font-weight:600;font-size:15px;margin-bottom:10px;">🔢 我的数学课表（全校汇总）</div>';
  let totalMath = 0;
  const byDay = {};
  WEEKDAYS.forEach(d=>byDay[d]=[]);
  DB.classes.forEach(c=>{
    WEEKDAYS.forEach(day=>{
      (c.schedule[day]||[]).forEach((subj,i)=>{
        if(subj==='数学'){
          byDay[day].push({class:c.name,period:i+1,time:PERIODS[i].t});
          totalMath++;
        }
      });
    });
  });
  html += `<div class="stat-grid"><div class="stat-card"><div class="stat-num">${DB.classes.length}</div><div class="stat-label">教学班</div></div><div class="stat-card success"><div class="stat-num">${totalMath}</div><div class="stat-label">数学课总数</div></div><div class="stat-card warning"><div class="stat-num">${Math.ceil(totalMath/5)}</div><div class="stat-label">日均节数</div></div></div>`;
  html += '<table class="schedule-table"><thead><tr><th class="corner">节次</th>'+WEEKDAYS.map(d=>`<th class="day-header">${d}</th>`).join('')+'</tr></thead><tbody>';
  for(let i=0;i<8;i++){
    html += `<tr><td style="background:var(--bg);font-size:11px;">${PERIODS[i].n}<br><span style="color:var(--text-lighter);font-size:10px;">${PERIODS[i].t}</span></td>`;
    WEEKDAYS.forEach(day=>{
      const items = byDay[day].filter(x=>x.period===i+1);
      if(items.length){
        html += `<td class="math" style="font-size:11px;line-height:1.4;">${items.map(x=>x.class.replace('九年级','9-').replace('八年级','8-').replace('七年级','7-')).join('<br>')}</td>`;
      }else{
        html += '<td>-</td>';
      }
    });
    html += '</tr>';
  }
  html += '</tbody></table>';
  html += '<div style="font-size:12px;color:var(--text-light);margin-top:8px;">📌 自动汇总所有班级数学课，单元格内显示对应班级</div></div>';

  // 按天列表
  html += '<div class="section-title">📊 按天分布</div>';
  WEEKDAYS.forEach(day=>{
    const items = byDay[day];
    if(!items.length) return;
    html += `<div class="card"><div style="font-weight:600;margin-bottom:8px;">${day}（${items.length}节）</div>`;
    items.sort((a,b)=>a.period-b.period);
    items.forEach(x=>{
      html += `<div class="todo-item"><div class="todo-tag">第${x.period}节</div><div class="todo-text">${x.class}</div><span style="font-size:12px;color:var(--text-light);">${x.time}</span></div>`;
    });
    html += '</div>';
  });
  return html;
}

function showMyMathScheduleModal(){
  // 直接切到数学课视图
  const seg = document.querySelectorAll('#tab-schedule .segment-item')[1];
  if(seg) switchScheduleView('math',seg);
}

/* 导入课表 */
function showImportScheduleModal(type){
  const c = getCurrentClass();
  if(type==='image'){
    showModal(`
      <h3>📷 图片导入课表</h3>
      <p style="font-size:13px;color:var(--text-light);margin-bottom:12px;">上传班级课表图片，系统将尝试识别并填入课表。请确保图片清晰、为标准表格格式。</p>
      <div class="upload-area" onclick="document.getElementById('imgFile').click()">
        <div class="upload-icon svg-icon">${icon('image')}</div>
        <div>点击选择课表图片</div>
        <div style="font-size:11px;margin-top:4px;">支持 JPG/PNG</div>
        <input type="file" id="imgFile" accept="image/*" onchange="handleImageImport(event)">
      </div>
      <div id="imgPreview" style="display:none;">
        <img id="previewImg" style="width:100%;border-radius:8px;margin-bottom:10px;">
        <div id="ocrResult" style="font-size:13px;color:var(--text-light);margin-bottom:10px;"></div>
      </div>
      <div class="modal-actions">
        <button class="btn-cancel" onclick="closeModal()">取消</button>
        <button class="btn-confirm" onclick="manualFillAfterImport()">手动填写（图片参考）</button>
      </div>
    `);
  }else{
    showModal(`
      <h3>📄 文档导入课表</h3>
      <p style="font-size:13px;color:var(--text-light);margin-bottom:12px;">上传课表文档（TXT/CSV），或直接粘贴文本内容。格式：每行一天，用逗号或空格分隔各节课。</p>
      <div class="upload-area" onclick="document.getElementById('docFile').click()">
        <div class="upload-icon svg-icon">${icon('file')}</div>
        <div>点击选择文档</div>
        <div style="font-size:11px;margin-top:4px;">支持 TXT/CSV</div>
        <input type="file" id="docFile" accept=".txt,.csv,text/*" onchange="handleDocImport(event)">
      </div>
      <div class="modal-label">或直接粘贴文本（每行一天，周一~周五）：</div>
      <textarea class="modal-textarea" id="docText" placeholder="数学,语文,英语,物理,化学,体育,自习,班会的换行格式"></textarea>
      <div class="modal-label">示例格式：</div>
      <div style="font-size:12px;color:var(--text-light);background:var(--bg);padding:8px;border-radius:6px;margin-bottom:10px;">数学,语文,英语,物理,化学,体育,自习,班会语文,数学,物理,英语,历史,政治,美术,自习</div>
      <div class="modal-actions">
        <button class="btn-cancel" onclick="closeModal()">取消</button>
        <button class="btn-confirm" onclick="parseDocImport()">解析并导入</button>
      </div>
    `);
  }
}

function handleImageImport(e){
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(ev){
    document.getElementById('imgPreview').style.display='block';
    document.getElementById('previewImg').src = ev.target.result;
    document.getElementById('ocrResult').innerHTML = '✅ 图片已加载。由于浏览器端无法自动OCR，请点击下方"手动填写"按钮，对照图片录入课表。';
  };
  reader.readAsDataURL(file);
  showToast('图片已加载，请手动填写');
}

function manualFillAfterImport(){
  closeModal();
  showManualEditSchedule(true);
}

function handleDocImport(e){
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(ev){
    document.getElementById('docText').value = ev.target.result;
    showToast('文档已载入，点"解析并导入"');
  };
  reader.readAsText(file);
}

function parseDocImport(){
  const text = document.getElementById('docText').value.trim();
  if(!text){showToast('请输入或上传课表文本');return;}
  const lines = text.split(/\n/).map(l=>l.trim()).filter(l=>l);
  if(lines.length<1){showToast('未识别到有效内容');return;}
  const c = getCurrentClass();
  const newSchedule = {'周一':[],'周二':[],'周三':[],'周四':[],'周五':[]};
  lines.forEach((line,idx)=>{
    if(idx>=5) return;
    const day = WEEKDAYS[idx];
    // 支持逗号、空格、制表符、顿号分隔
    const subjects = line.split(/[,，\s、\t]+/).map(s=>s.trim()).filter(s=>s);
    newSchedule[day] = subjects.slice(0,8);
  });
  c.schedule = newSchedule;
  saveData();
  closeModal();
  renderTab('schedule');
  showToast('课表已导入');
}

/* 手动编辑课表 */
function showManualEditSchedule(fromImage){
  const c = getCurrentClass();
  let fields = '';
  WEEKDAYS.forEach((day,di)=>{
    fields += `<div class="modal-label" style="margin-top:14px;font-weight:600;">${day}</div>`;
    for(let i=0;i<8;i++){
      const val = (c.schedule[day]&&c.schedule[day][i])||'';
      fields += `<input type="text" class="modal-input" id="cell_${di}_${i}" value="${val}" placeholder="第${i+1}节" style="margin-bottom:6px;">`;
    }
  });
  showModal(`
    <h3>${fromImage?'对照图片填写课表':'手动编辑课表'}</h3>
    ${fromImage?'<div style="text-align:center;margin-bottom:10px;"><img src="'+document.getElementById('previewImg')?.src+'" style="max-width:100%;border-radius:8px;" id="refImg"></div>':''}
    <div style="max-height:50vh;overflow-y:auto;">${fields}</div>
    <div class="modal-actions">
      <button class="btn-cancel" onclick="closeModal()">取消</button>
      <button class="btn-confirm" onclick="saveManualSchedule()">保存</button>
    </div>
  `);
}

function saveManualSchedule(){
  const c = getCurrentClass();
  const newSchedule = {};
  WEEKDAYS.forEach((day,di)=>{
    newSchedule[day] = [];
    for(let i=0;i<8;i++){
      const el = document.getElementById(`cell_${di}_${i}`);
      newSchedule[day].push(el? el.value.trim() : '');
    }
  });
  c.schedule = newSchedule;
  saveData();
  closeModal();
  renderTab('schedule');
  showToast('课表已保存');
}

/* 待办添加 */
function showAddTodoModal(){
  const c = getCurrentClass();
  showModal(`
    <h3>添加待办</h3>
    <div class="modal-label">内容</div>
    <input type="text" class="modal-input" id="todoText" placeholder="待办事项">
    <div class="modal-label">分类</div>
    <div class="choice-row">
      <button class="choice-btn active" onclick="pickChoice(this,'todoTag','教学')">教学</button>
      <button class="choice-btn" onclick="pickChoice(this,'todoTag','沟通')">沟通</button>
      <button class="choice-btn" onclick="pickChoice(this,'todoTag','班级')">班级</button>
      <button class="choice-btn" onclick="pickChoice(this,'todoTag','事务')">事务</button>
      <button class="choice-btn" onclick="pickChoice(this,'todoTag','其他')">其他</button>
    </div>
    <div class="modal-actions">
      <button class="btn-cancel" onclick="closeModal()">取消</button>
      <button class="btn-confirm" onclick="addTodo()">保存</button>
    </div>
  `);
  _choiceVals.todoTag = '教学';
}

function addTodo(){
  const c = getCurrentClass();
  const text = document.getElementById('todoText').value.trim();
  if(!text){showToast('请输入内容');return;}
  c.todos.push({id:genId('t'),text,done:false,tag:_choiceVals.todoTag||'教学'});
  saveData();
  closeModal();
  renderTab('dashboard');
  showToast('已添加待办');
}

/* ---------- 通用弹窗 ---------- */
function showModal(html){
  const container = document.getElementById('modalContainer');
  container.innerHTML = `<div class="modal" style="display:flex;" id="dynamicModal"><div class="modal-content">${html}</div></div>`;
}
function closeModal(){
  document.getElementById('modalContainer').innerHTML = '';
}

/* 启动 */
window.addEventListener('DOMContentLoaded', init);
