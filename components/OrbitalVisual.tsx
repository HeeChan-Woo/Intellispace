import Image from "next/image";

export function OrbitalVisual() {
  return <div className="orbit" aria-label="AI와 연결된 시스템을 표현한 궤도 그래픽" role="img">
    <div className="orbit-rings desktop-orbit">
      <Image src="/assets/orbit-outer.svg" alt="" width={460} height={460} />
      <Image src="/assets/orbit-mid.svg" alt="" width={360} height={360} />
      <Image src="/assets/orbit-inner.svg" alt="" width={270} height={270} />
      <Image src="/assets/orbit-core-ring.svg" alt="" width={165} height={165} />
      <Image className="trajectory t1" src="/assets/trajectory-1.svg" alt="" width={440} height={192} />
      <Image className="trajectory t2" src="/assets/trajectory-2.svg" alt="" width={448} height={194} />
    </div>
    <div className="orbit-rings mobile-orbit"><Image src="/assets/mobile-orbit-outer.svg" alt="" width={265} height={265} /><Image src="/assets/mobile-orbit-mid.svg" alt="" width={200} height={200} /><Image src="/assets/mobile-orbit-inner.svg" alt="" width={139} height={139} /><Image className="trajectory t1" src="/assets/mobile-trajectory-1.svg" alt="" width={252} height={88} /><Image className="trajectory t2" src="/assets/mobile-trajectory-2.svg" alt="" width={252} height={86} /></div>
    <div className="ai-core"><Image src="/assets/core-glow.svg" alt="" width={114} height={114} /><Image src="/assets/core-disk.svg" alt="" width={82} height={82} /><strong>AI</strong></div>
    <div className="network-nodes" aria-hidden="true">{Array.from({length:12},(_,i)=><Image key={i} src={i%3===0?"/assets/network-node-large.svg":"/assets/network-node-small.svg"} alt="" width={i%3===0?8:4} height={i%3===0?8:4}/>)}</div>
    <div className="signal signal-a"><small>INTELLIGENCE</small><b>AI / Learning</b></div><div className="signal signal-b"><small>CONNECTED</small><b>Devices / Cloud</b></div><div className="signal signal-c"><small>AUTOMATION</small><b>Real impact</b></div>
  </div>;
}
