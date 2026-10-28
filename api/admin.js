const g=require('./_gh');
module.exports=async(req,res)=>{try{
if(req.method!=='POST')return res.status(405).json({error:'POST only'});
const b=req.body||{};
if(!process.env.ADMIN_PASS||b.user!==process.env.ADMIN_USER||b.pass!==process.env.ADMIN_PASS)return res.status(401).json({error:'Wrong username or password'});
const a=b.action;
if(a==='login')return res.json({ok:1});
if(a==='activity')return res.json({log:await g.history()});
if(a==='save'&&b.file==='menu'&&Array.isArray(b.data)){await g.writeJson('data/menu.json',b.data,'Update menu');return res.json({ok:1})}
if(a==='save'&&b.file==='settings'&&b.data&&typeof b.data==='object'&&!Array.isArray(b.data)){const s={};for(const k of['tagline','phone','address','hours'])s[k]=String(b.data[k]||'').slice(0,300);await g.writeJson('data/settings.json',s,'Update settings');return res.json({ok:1})}
if(a==='upload'&&b.base64){const n=Date.now()+'.jpg';await g.put('img/'+n,b.base64,'Add food photo',null,true);return res.json({url:'/img/'+n})}
res.status(400).json({error:'Unknown action'})}catch(e){res.status(500).json({error:e.message})}};
