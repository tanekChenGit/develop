import React, {useEffect, useState} from 'react';
import icon from '../../../assets/visionary/icon-exchange.svg';

type Point = { date: string; rate: number };

const mockData: Point[] = Array.from({length:30}).map((_,i)=>{
  const d = new Date();
  d.setDate(d.getDate()- (29 - i));
  const rate = 0.032 + Math.sin(i/5)/200 + Math.random()/500;
  return { date: d.toISOString().slice(0,10), rate: parseFloat(rate.toFixed(4)) };
});

export default function ExchangeWidget(){
  const [rate, setRate] = useState<number>(mockData[mockData.length-1].rate);
  const [updatedAt, setUpdatedAt] = useState<string>(new Date().toISOString());
  const [twd, setTwd] = useState<string>('1000');
  const [series, setSeries] = useState<Point[]>(mockData);

  useEffect(()=>{
    // attempt real fetch, fallback to mock
    fetch('/api/exchange?from=TWD&to=USD')
      .then(r=>{ if(!r.ok) throw new Error('bad'); return r.json() })
      .then((j:any)=>{
        if(j && j.rate){
          setRate(j.rate);
          setUpdatedAt(new Date().toISOString());
        }
        if(j && j.series) setSeries(j.series);
      })
      .catch(()=>{
        // keep mock
      })
  },[])

  const usd = (()=>{
    const n = parseFloat(twd);
    if(Number.isNaN(n)) return '';
    return (n * rate).toFixed(2);
  })();

  // simple sparkline SVG
  const sparkPath = (()=>{
    const w=200,h=40,p=4;
    const vals = series.map(s=>s.rate);
    const min = Math.min(...vals), max = Math.max(...vals);
    if(max===min) return '';
    return vals.map((v,i)=>{
      const x = (i/(vals.length-1))*(w-2*p)+p;
      const y = h - ((v-min)/(max-min))*(h-2*p)-p;
      return `${i===0?'M':'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(' ');
  })();

  return (
    <div style={{border:'1px solid #e5e7eb',padding:16,borderRadius:8,width:320,fontFamily:'Inter, Arial'}}>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <img src={icon} alt="exchange" style={{width:36,height:36}}/>
        <div>
          <div style={{fontSize:12,color:'#6b7280'}}>TWD → USD</div>
          <div style={{fontSize:20,fontWeight:600}}>{rate.toFixed(4)} <span style={{fontSize:12,fontWeight:400,color:'#6b7280'}}>USD per TWD</span></div>
        </div>
      </div>
      <div style={{marginTop:12}}>
        <svg width={200} height={40} style={{display:'block'}}>
          <path d={sparkPath} stroke="#2563eb" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div style={{fontSize:11,color:'#6b7280'}}>Last 30 days • updated {new Date(updatedAt).toLocaleString()}</div>
      </div>
      <div style={{marginTop:12,display:'flex',gap:8,alignItems:'center'}}>
        <input value={twd} onChange={e=>setTwd(e.target.value)} style={{flex:1,padding:8,border:'1px solid #e5e7eb',borderRadius:6}} aria-label="twd-input"/>
        <div style={{minWidth:100,padding:8,background:'#f8fafc',borderRadius:6,textAlign:'center'}}>{usd} USD</div>
      </div>
    </div>
  )
}
