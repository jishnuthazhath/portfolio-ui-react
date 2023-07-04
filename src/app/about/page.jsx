
export default function About() {

  const timeline = [
    { year: "1995", description: "hello world!, born in Thrissur, Kerala" },
    { year: "2006", description: "Introduced to the world of computers" },
    { year: "2011", description: "Owned a pc" },
    { year: "2013", description: "Joined college - St Thomas College, Thrissur, Kerala" },
    { year: "2015", description: "Create a mobile application for my college project for the customers, which tracks the Kerala bus services" },
    { year: "2016 May", description: "Graduated from St Thomas College, Thrissur" },
    { year: "2016 Mar", description: "Graduated from college with a degree in Computer Science" },
    { year: "2016 Jul", description: "Moved to Chennai, Tamilnadu to join Tata Consultancy Services as a Software Developer" },
    { year: "2017 Jan", description: "Moved to Bangalore" },
    { year: "2019 Oct", description: "Quit my job at Tata Consultancy Services and Joined Micro Focus as a Software Engineer II" },
    { year: "2020 Nov", description: "Started working remotely, moved to Thrissur, Kerala" },
    { year: "2021 Sep", description: "Quit my job at Micro Focus to join ThoughtWorks as a Senior Consultant" },
    { year: "2021 Nov", description: "Started working for the client CSIO" },
    { year: "2022 Jul", description: "Started working on a project in Flutter. The project was called \"Balasamajam\" (a local association)." },
    { year: "2022 Sep", description: "Started working for the client Viator" }
  ];

  return (
    <>
      <section>
        <div>
          <h1 className="mb-3 text-lg" ><strong> About Me</strong></h1>
          <p className="leading-6"><b className="bg-yellow-300">hi there,</b> I sat down thinking what I should write here,
            turns out its more difficult to write about yourself that to create a webpage and host it!</p>
          <br />
          <p className="leading-6">ok. here we go.</p>
          <p className="leading-6">I am Jishnu a Software engineer by profession. I got most of my experience in backend developent,
            building and automating cloud infrastructure. Slowly finding my way into frontend development.</p>
          <br />
          <p className="leading-6">I love to learn new things and create new stuff.
            Most of the things that interests me comes down to these few things, they are computers, movies, and art. I am a wannabe artist, do sketch often.
            You can find some of my &quot;attempts&quot; <a className="hover:bg-black hover:text-white" href="#">here</a></p>
        </div>
      </section>

      <section>
        <div className="mt-16">
          <p className="mb-2 text-sm md:text-lg"><strong>Timeline</strong></p>
          {timeline.map((item, idx) => (
            <div key={idx} className="space-x-2">
              <p className=" mb-3 md:mb-4">
                <span className="inline-block p-0.5 bg-black text-white rounded-xs whitespace-nowrap mr-4">{item.year}</span>
                <span>{item.description}</span>
              </p>
            </div>
          )
          )}
        </div>
      </section >
    </>
  );
}
