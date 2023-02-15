const autor_nombre = document.getElementById('autor_nombre');
const autor_prof = document.getElementById('autor_prof');
const autor_img =document.getElementById('autor_img');
const texto = document.getElementById('texto');




const testimonials = [

    {
      name: 'June Cha',
      position: 'Software Engineer',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      text:
        'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
    },
    {
      name: 'Iida Niskanen',
      position: 'Data Entry',
      photo: 'https://randomuser.me/api/portraits/women/68.jpg',
      text:
        "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
    },
    {
      name: 'Renee Sims',
      position: 'Receptionist',
      photo: 'https://randomuser.me/api/portraits/women/65.jpg',
      text:
        "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
    },
    {
      name: 'Jonathan Nunfiez',
      position: 'Graphic Designer',
      photo: 'https://randomuser.me/api/portraits/men/43.jpg',
      text:
        "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
    },
    {
      name: 'Sasha Ho',
      position: 'Accountant',
      photo:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
      text:
        'This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!',
    },
    {
      name: 'Veeti Seppanen',
      position: 'Director',
      photo: 'https://randomuser.me/api/portraits/men/97.jpg',
      text:
        'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
    },
  ];

  let idx = 0;

  function test(){

    const { name, position, photo, text } = testimonials[idx];

    texto.innerHTML = text;
    autor_img.src = photo;
    autor_nombre.innerHTML = name;
    autor_prof.innerHTML = position;

    idx++

    if (idx > testimonials.length - 1) {
      idx = 0
    }

  }

  setInterval(()=>{

    test();
  },5000);