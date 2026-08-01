/* ===== 数据层：默认数据与持久化 ===== */
const STORAGE_KEY = 'classTeacherWorkbench_v1';

/* 科目配色/图标 */
const SUBJECTS = {
  '数学':{color:'#4f46e5',icon:'🔢'},
  '语文':{color:'#ef4444',icon:'📖'},
  '英语':{color:'#3b82f6',icon:'🌐'},
  '物理':{color:'#8b5cf6',icon:'⚡'},
  '化学':{color:'#10b981',icon:'⚗️'},
  '生物':{color:'#14b8a6',icon:'🧬'},
  '政治':{color:'#f59e0b',icon:'🏛️'},
  '历史':{color:'#a16207',icon:'📜'},
  '地理':{color:'#0891b2',icon:'🗺️'},
  '体育':{color:'#dc2626',icon:'⚽'},
  '音乐':{color:'#ec4899',icon:'🎵'},
  '美术':{color:'#9333ea',icon:'🎨'},
  '信息技术':{color:'#64748b',icon:'💻'},
  '班会':{color:'#6366f1',icon:'👥'},
  '自习':{color:'#94a3b8',icon:'📝'},
};

const WEEKDAYS = ['周一','周二','周三','周四','周五'];
const PERIODS = [
  {n:'第一节',t:'08:00-08:45'},
  {n:'第二节',t:'08:55-09:40'},
  {n:'第三节',t:'10:00-10:45'},
  {n:'第四节',t:'10:55-11:40'},
  {n:'第五节',t:'14:00-14:45'},
  {n:'第六节',t:'14:55-15:40'},
  {n:'第七节',t:'16:00-16:45'},
  {n:'第八节',t:'16:55-17:40'},
];

/* 默认数据工厂 */
function getDefaultData(){
  return {
    teacher:'王老师',
    subject:'数学',
    currentClassId:'c9-3',
    classes:[
      {
        id:'c9-3',
        name:'九年级3班',
        students:[
          {id:'s1',name:'张明',gender:'男',score:92,attendance:'正常',performance:'优',note:'数学课代表，思维活跃'},
          {id:'s2',name:'李华',gender:'女',score:85,attendance:'正常',performance:'良',note:'学习踏实，作业认真'},
          {id:'s3',name:'王强',gender:'男',score:78,attendance:'迟到1次',performance:'中',note:'需加强基础训练'},
          {id:'s4',name:'赵丽',gender:'女',score:96,attendance:'正常',performance:'优',note:'成绩稳定，乐于助人'},
          {id:'s5',name:'陈伟',gender:'男',score:65,attendance:'请假1天',performance:'中',note:'近期状态需关注'},
          {id:'s6',name:'刘洋',gender:'男',score:88,attendance:'正常',performance:'良',note:'课堂积极发言'},
          {id:'s7',name:'孙芳',gender:'女',score:73,attendance:'正常',performance:'中',note:'英语偏科明显'},
          {id:'s8',name:'周杰',gender:'男',score:81,attendance:'正常',performance:'良',note:'体育特长生'},
        ],
        schedule:{
          // 周一~周五，每天8节
          '周一':['数学','语文','英语','物理','化学','体育','自习','班会'],
          '周二':['语文','数学','物理','英语','历史','政治','美术','自习'],
          '周三':['英语','数学','语文','化学','物理','生物','音乐','自习'],
          '周四':['数学','英语','语文','物理','体育','地理','信息技术','自习'],
          '周五':['语文','数学','化学','英语','政治','历史','美术','自习'],
        },
        todos:[
          {id:'t1',text:'批改九年级3班数学作业',done:false,tag:'教学'},
          {id:'t2',text:'与陈伟家长沟通近期表现',done:false,tag:'沟通'},
          {id:'t3',text:'准备周五班会主题：期末复习',done:false,tag:'班级'},
          {id:'t4',text:'收齐本周期中考试回执',done:true,tag:'事务'},
        ],
        communications:[
          {id:'cm1',student:'陈伟',type:'电话沟通',date:'2026-07-28',content:'与陈伟母亲电话沟通其近期上课注意力不集中的问题，家长表示会配合督促。',result:'家长配合'},
          {id:'cm2',student:'张明',type:'微信留言',date:'2026-07-26',content:'表扬张明在数学竞赛中获得校级一等奖，家长表示感谢。',result:'正向反馈'},
          {id:'cm3',student:'王强',type:'面谈',date:'2026-07-25',content:'王强迟到问题面谈，了解其家庭情况，建议调整作息。',result:'持续跟进'},
        ],
        affairs:[
          {id:'a1',type:'meeting',title:'主题班会：期末复习动员',desc:'组织全班制定复习计划，强调纪律。',date:'2026-08-01'},
          {id:'a2',type:'duty',title:'本周值日安排',desc:'一组：张明、李华；二组：王强、赵丽。负责教室与走廊卫生。',date:'2026-07-29'},
          {id:'a3',type:'award',title:'数学竞赛颁奖',desc:'张明获校级一等奖，赵丽获二等奖，全班表彰。',date:'2026-07-26'},
          {id:'a4',type:'event',title:'校园科技节报名',desc:'组织有兴趣的同学报名参加，截止8月5日。',date:'2026-07-30'},
        ],
      },
      {
        id:'c9-5',
        name:'九年级5班',
        students:[
          {id:'s1',name:'林涛',gender:'男',score:90,attendance:'正常',performance:'优',note:'班长，组织能力强'},
          {id:'s2',name:'黄静',gender:'女',score:87,attendance:'正常',performance:'良',note:'学习委员'},
          {id:'s3',name:'吴磊',gender:'男',score:72,attendance:'正常',performance:'中',note:'需提升数学'},
          {id:'s4',name:'郑爽',gender:'女',score:94,attendance:'正常',performance:'优',note:'文娱委员'},
          {id:'s5',name:'冯雪',gender:'女',score:80,attendance:'请假半天',performance:'良',note:'安静踏实'},
        ],
        schedule:{
          '周一':['英语','数学','语文','化学','物理','体育','自习','班会'],
          '周二':['数学','语文','英语','物理','化学','历史','音乐','自习'],
          '周三':['语文','英语','数学','物理','化学','生物','美术','自习'],
          '周四':['英语','数学','化学','语文','体育','政治','信息技术','自习'],
          '周五':['数学','语文','物理','英语','历史','地理','体育','自习'],
        },
        todos:[
          {id:'t1',text:'批改九年级5班数学作业',done:false,tag:'教学'},
          {id:'t2',text:'跟进吴磊数学辅导计划',done:false,tag:'学情'},
        ],
        communications:[
          {id:'cm1',student:'吴磊',type:'电话沟通',date:'2026-07-27',content:'与吴磊父亲沟通数学成绩提升方案，建议课后加强练习。',result:'家长配合'},
        ],
        affairs:[
          {id:'a1',type:'meeting',title:'主题班会：学习方法分享',desc:'邀请优秀同学分享学习经验。',date:'2026-07-30'},
        ],
      },
      {
        id:'c8-2',
        name:'八年级2班',
        students:[
          {id:'s1',name:'许诺',gender:'男',score:88,attendance:'正常',performance:'良',note:'活泼开朗'},
          {id:'s2',name:'韩梅',gender:'女',score:95,attendance:'正常',performance:'优',note:'各科均衡发展'},
          {id:'s3',name:'曹宇',gender:'男',score:70,attendance:'迟到2次',performance:'中',note:'需关注考勤'},
        ],
        schedule:{
          '周一':['数学','语文','英语','物理','体育','生物','自习','班会'],
          '周二':['语文','数学','英语','物理','地理','历史','美术','自习'],
          '周三':['英语','数学','语文','体育','物理','生物','音乐','自习'],
          '周四':['数学','英语','语文','物理','政治','信息技术','体育','自习'],
          '周五':['语文','数学','物理','英语','历史','地理','美术','自习'],
        },
        todos:[
          {id:'t1',text:'批改八年级2班数学作业',done:false,tag:'教学'},
        ],
        communications:[],
        affairs:[],
      },
    ],
  };
}

/* 数据持久化 */
let DB = null;

function loadData(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){
      DB = JSON.parse(raw);
    }else{
      DB = getDefaultData();
      saveData();
    }
  }catch(e){
    DB = getDefaultData();
  }
  return DB;
}

function saveData(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DB));
  }catch(e){
    console.error('保存失败',e);
  }
}

function resetData(){
  DB = getDefaultData();
  saveData();
}

/* 数据操作辅助 */
function getCurrentClass(){
  return DB.classes.find(c=>c.id===DB.currentClassId) || DB.classes[0];
}

function getClassById(id){
  return DB.classes.find(c=>c.id===id);
}

function genId(prefix){
  return prefix + Date.now() + Math.floor(Math.random()*1000);
}
