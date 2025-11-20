gsap.registerPlugin(ScrollTrigger);

// Hero fade-in
gsap.from(".hero-content h1",{y:50,opacity:0,duration:1.5});
gsap.from(".hero-content p",{y:20,opacity:0,duration:1.5,delay:0.5});

// Zoom background effect
gsap.utils.toArray(".zoom-section").forEach(section=>{
  gsap.to(section.querySelector(".zoom-bg"),{
    scale: 1.1,
    scrollTrigger:{
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
});

// Optional: animate zoom-content fade-in
gsap.utils.toArray(".zoom-content").forEach(content=>{
  gsap.from(content,{opacity:0,y:50,scrollTrigger:{trigger:content,start:"top 80%",end:"bottom 60%",scrub:true}});
});

// Gallery hover animations
gsap.utils.toArray(".gallery-img, .gallery-video").forEach(item=>{
  gsap.from(item,{opacity:0,y:30,scrollTrigger:{trigger:item,start:"top 80%"},duration:0.8,ease:"power2.out"});
});
