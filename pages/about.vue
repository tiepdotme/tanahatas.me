<template>
  <div>
    <!-- <div class="vl1 vl"></div>
    <div class="vl2 vl"></div>
    <div class="vl3 vl"></div>-->

    <!-- about hero -->

    <div class="a-hero_container">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
        <img src="~assets/svg/circle.svg" alt="circle" />
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
        <img src="~assets/svg/a.svg" alt="A" v-rellax="{ speed: -2, center: 0.5 }" />
      </div>

      <div class="contain a-h-container">
        <p
          class="pm a-h-subheading"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="200"
        >who i am</p>
        <h1 data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
          Nimble,
          <span class="outlined">Passionate</span>
          Graphic
          <span class="outlined">Designer</span> &
          Web
          <span class="outlined">Developer</span>
        </h1>
        <p
          class="pm a-subheading_2"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="600"
        >and I am always learning. Like past few months I have been learnig how to code using JavaScript. Now I can bring design into a pixel perfect reality.</p>
      </div>
    </div>

    <div class="about-section2">
      <div class="me-images">
        <div v-rellax="{ speed: -1.2, center: 0.4 }" class="me-image1">
          <img
            src="~/assets/img/about/about-me-1.jpg?webp"
            alt="ahmad ainul rizki, tanahatas.me, photo small boy"
          />
        </div>
        <div v-rellax="{ speed: 1, center: 0.3 }" class="me-image2">
          <img src="~/assets/img/about/about-me-2.jpg?webp" alt="ahmad ainul rizki, indie maker" />
        </div>
        <div v-rellax="{ speed: -2, center: 0.7 }" class="me-image4">
          <img src="~/assets/img/about/about-me-4.jpg?webp" alt="ahmad ainul rizki, indie maker" />
        </div>
        <div v-rellax="{ speed: 3, center: 0.5 }" class="me-image3">
          <img src="~/assets/img/about/about-me-3.jpg?webp" alt="ahmad ainul rizki, indie maker" />
        </div>
      </div>
    </div>
    <a href></a>

    <div class="about-section3">
      <div class="about-me-text a-hello_container contain">
        <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
          <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
          <h2 class="a-hello primary-color maegin_reveal">Hello there!</h2>
        </div>
        <p class="para hero-para black70">
          Hi! I'm Ahmad Ainul Rizki, Currently I'm a
          <a
            href="mailto:ahmad@tanahatas.me"
            target="_blank"
            rel="noopener"
            title="Give Me Something"
          >
            <span class="underline-magical">freelance</span>
          </a> designer and web developer, who works with a variety of clients and on many diverse projects. 
          I consider myself a multi-disciplinary designer as I love making anything, but have
          recently found a passion in creating thoughtful and enjoyable user
          experiences through product design, and code them too if time allows.
          I have a beautiful team of front-end developers,
          back-end-developers and some ninja people whom I work with and learn from them.
        </p>
        <p class="para hero-para black70">
          I work to create innovative solutions that inspire, and 
          foster memorable relationships between brands and their 
          clients. With a focus on branding and UI / Web, I strive to 
          create usable and polished products through passionate and 
          deliberate design.
        </p>
        <p class="para hero-para black70">
          As a software engineer student, I enjoy bridging the gap between
          engineering and design — combining my technical knowledge
          with my keen eye for design to create a beautiful product.
          My goal is to always build applications that are scalable and efficient
          under the hood while providing engaging, pixel-perfect user experiences.
        </p>
        <p class="para hero-para black70">
          I love what I do. The combination of business goals, mixed with
          human necessity, mixed with solid design nad challenges that put me on edge is what gets me going every
          day. This might sound cliche, I wake up each day to do something new and learn form them.
          Don't hesitate to reach out if you'd like to chat about design,
          life, or just have a good ol' fashioned conversation.
        </p>

        <p class="para hero-para black70">
          I am Crazzy about <a
            href="https://www.mexicoinmykitchen.com/coffee-with-milk/"
            target="_blank"
            rel="noopener"
            title="Simple Recipe"
          >
            <span class="underline-magical">Coffee and Milk</span>
          </a>. You can make me do anything over Coffee and Milk. My friends
          do this all the time. When I'm not in front of a computer screen, I'm probably amidst nature,
          trying to get some decent shot on my Nikon D5200 or just chilling out with friends or with myself.
        </p>
      </div>
    </div>

    <!-- capability -->
    <section class="a-c-section">
      <div class="contain">
        <div class="a-c_heading">
          <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
            <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
            <h1 class="margin_reveal">Capabilities</h1>
          </div>
        </div>

        <div class="a-c_bg_text outlined" v-rellax="{ speed: -1, center: 0.5 }">
          <span>Capabilities</span>
        </div>

        <div class="a-c-design">
          <p class="a-c_subheading red">+Design</p>

          <div class="pm black70">
            <div class="a-c_layout">
              <span>Creative/ Art Direction</span>
              <span>User Experience Design</span>
              <span>Interface & Interaction Design</span>
              <span>Interactive Experiences</span>
              <span>Digital Product Design</span>
              <span>Interactive Prototyping</span>
              <span>2D & 3D Illustration</span>
              <span>Motion Graphics</span>
              <span>Logo Design</span>
              <span>Mascot Design</span>
              <span>Brand Identity</span>
              <span>Print Design</span>
              <span>Coffee Drinking</span>
              <span>Digital, Social Campaigns</span>
              <span>Graphic Design</span>
              <span>Creative Writing</span>
            </div>
          </div>
        </div>

        <div class="a-c-code">
          <p class="a-c_subheading red">+Code</p>

          <div class="pm black70">
            <div class="a-c_layout">
              <span>HTML</span>
              <span>CSS/Saas</span>
              <span>PHP</span>
              <span>Laravel</span>
              <span>CodeIgniter</span>
              <span>WordPress</span>
              <span>Vue.js</span>
              <span>NuxtJs Framework</span>
              <span>Green shock animation platform (GSAP)</span>
              <span>Bootstrap</span>
              <span>Git & Github</span>
              <span>Codepen</span>
              <span>React.js</span>
              <span>Angular.js</span>
              <span>Node.js</span>
              <span>GatsbyJS</span>
              <span>Chrome DevTools</span>
              <span>Staring at others code</span>
            </div>
          </div>
        </div>
        <div class="a-c_photography">
          <p class="a-c_subheading red">+Photography</p>
        </div>
        <div class="a-hl"></div>

        <div class="a-c_photography">
          <p class="a-c_subheading red">+Drawing and Arts</p>
        </div>
        <div class="a-hl"></div>

        <div class="a-c_photography">
          <p class="a-c_subheading red">+Blogging</p>
        </div>
        <div class="a-hl"></div>

        <div class="a-c_photography">
          <p class="a-c_subheading red">+Ariving on time</p>
        </div>
        <div class="a-hl"></div>
      </div>
    </section>

    <!-- tools -->

    <section class="a-t-section">
      <div class="contain">
        <div class="a-c_heading">
          <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
            <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
            <h1 class="margin_reveal">Tools</h1>
          </div>
        </div>

        <div class="a-t_bg_text outlined" v-rellax="{ speed: -1, center: 0.5 }">
          <span>Tools</span>
        </div>

        <div class="pm black70">
          <div class="a-t_layout">
            <span>
              <img src="~assets/img/about/a-tools-1.svg" alt="adobe xd svg icon" /> Adobe XD
            </span>
            <span>
              <img src="~assets/img/about/a-tools-8.svg" alt="Sketch svg icon" />Sketch
            </span>
            <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />Framer X
            </span>
            <span>
              <img src="~assets/img/about/a-tools-2.svg" alt="Invision svg icon" />Invision Studio
            </span>
            <span>
              <img src="~assets/img/about/a-tools-10.svg" alt="Adobe Illustrator svg icon" />Adobe Illustrator
            </span>
            <span>
              <img src="~assets/img/about/a-tools-11.svg" alt="Adobe Photoshop svg icon" />Adobe Photoshop
            </span>
            <span>
              <img src="~assets/img/about/a-tools-3.svg" alt="Adobe After Effects svg icon" />Adobe After Effects
            </span>
            <span>
              <img src="~assets/img/about/a-tools-12.svg" alt="Adobe Premiere Pro svg icon" />Adobe Premiere Pro
            </span>
            <span>
              <img src="~assets/img/about/a-tools-13.svg" alt="Adobe Indesign svg icon" />Adobe Indesign
            </span>
            <span>
              <img src="~assets/img/about/a-tools-4.svg" alt="Adobe Lightroom svg icon" />Adobe Lightroom
            </span>
            <span>
              <img src="~assets/img/about/a-tools-15.png" alt="Figma svg icon" />Cinema 4D
            </span>
            <span>
              <img src="~assets/img/about/a-tools-5.svg" alt="Zeplin svg icon" />Zeplin
            </span>
            <span>
              <img src="~assets/img/about/a-tools-16.png" alt="UXPin svg icon" />UXPin
            </span>
            <span>
              <img src="~assets/img/about/a-tools-14.svg" alt="UXPin svg icon" />Figma
            </span>
            <span>
              <img src="~assets/img/about/a-tools-17.png" alt="Balsamiq svg icon" />Balsamiq
            </span>
            <span>
              <img src="~assets/img/about/a-tools-6.svg" alt="Visual Studio Code svg icon" />Visual Studio Code
            </span>
            <span>
              <img src="~assets/img/about/a-tools-18.svg" alt="Atom svg icon" />Atom
            </span>
            <span>
              <img src="~assets/img/about/a-tools-19.svg" alt="GitHub svg icon" />GitHub
            </span>
            <span>
              <img src="~assets/img/about/a-tools-7.svg" alt="Slack svg icon" />Slack
            </span>
            <span>
              <img src="~assets/img/about/a-tools-21.svg" alt="Pen & Paper svg icon" />Pen & Paper
            </span>
            <span>
              <img src="~assets/img/about/a-tools-20.svg" alt="New Stuff svg icon" />+Trying New Stuff
            </span>
          </div>
        </div>
      </div>
    </section>\
    <!-- projects section -->

    <section class="a-p-section">
      <div class="contain">
        <div class="a-c_heading">
          <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
            <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
            <h1 class="margin_reveal">Projects</h1>
          </div>
        </div>

        <div class="a-t_bg_text outlined" v-rellax="{ speed: -1, center: 0.5 }">
          <span>Projects</span>
        </div>

        <div class="pm black70">
          <div class="a-p_layout_column">
            <nuxt-link to="/projects/filmingeye">
              <div class="a-p_layout_row black70">
                <span>2019</span>
                <span>Filming Eye</span>
                <span>Web, Branding</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects/ft-events">
              <div class="a-p_layout_row black70">
                <span>2019</span>
                <span>FT Event</span>
                <span>Web, Admin</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects/dreamz">
              <div class="a-p_layout_row black70">
                <span>2019</span>
                <span>Dreamz</span>
                <span>App, Prototyping</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects/elevito">
              <div class="a-p_layout_row black70">
                <span>2018</span>
                <span>Elevito</span>
                <span>Web, Branding</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects/feeding-trends">
              <div class="a-p_layout_row black70">
                <span>2018</span>
                <span>Feeding Trends</span>
                <span>Web, Branding, Print</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects/awesome-inc">
              <div class="a-p_layout_row black70">
                <span>2018</span>
                <span>Awesome Incorporation</span>
                <span>Identity, Print</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects/bharatrohan">
              <div class="a-p_layout_row black70">
                <span>2018</span>
                <span>BharatRohan</span>
                <span>Admin, App, Web</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects/dear-zindagi">
              <div class="a-p_layout_row black70">
                <span>2018</span>
                <span>Dear Zindagi</span>
                <span>Print, Logo</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects/prepowl">
              <div class="a-p_layout_row black70">
                <span>2018</span>
                <span>Prepowl</span>
                <span>Web, Branding</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects/r3">
              <div class="a-p_layout_row black70">
                <span>2018</span>
                <span>Read Recite Repeat</span>
                <span>Social Media, Logo</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects/mr-irritating">
              <div class="a-p_layout_row black70">
                <span>2017</span>
                <span>Mr. Irritating</span>
                <span>Print Design</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects/thebbdtimes">
              <div class="a-p_layout_row black70">
                <span>2015</span>
                <span>The BBD Times</span>
                <span>Branding, Marketing, Print</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects/tbt-app">
              <div class="a-p_layout_row black70">
                <span>2015</span>
                <span>TBT App</span>
                <span>App Design</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects/thebegining">
              <div class="a-p_layout_row black70">
                <span>2014</span>
                <span>The Begining</span>
                <span>Everything Messy</span>
                <span>↗</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <!-- showreel -->

    <section class="a-s-section">
      <div class="showreel-heading">
        <div class="contain">
          <h2>
            Enough reading.
            <br />Just watch my
            <span class="red">showreel.</span>
          </h2>
          <div class="a-s_bg_text outlined" v-rellax="{ speed: -1, center: 0.5 }">
            <span>Showreel</span>
          </div>
        </div>
        <div class="a-s-bg-container">
          <img src="~assets/img/about/showreel-bg.jpg?webp" alt="showreel" />
        </div>
      </div>
    </section>

    <!-- crazy me -->

    <section class="a-crazy-section">
      <div class="contain">
        <div class="a-c_heading">
          <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
            <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
            <h1 class="margin_reveal">Be Crazy</h1>
          </div>
        </div>

        <div class="a-t_bg_text outlined" v-rellax="{ speed: -3, center: 0.5 }">
          <span>Be Crazy</span>
        </div>
      </div>
      <div class="p-quote contain red">
        <blockquote>
          Be crazy, be stupid, be silly, be weird. Be whatever,
          because life is too short to be anything but happy.
        </blockquote>
      </div>

      <div class="a-crazy-layout">
        <div class="a-crazy-bg">
          <img src="~assets/img/about/crazy-bg-red.svg" alt="backgrounds red" />
          <img src="~assets/img/about/crazy-bg-light-grey.svg" alt="backgrounds red" />
        </div>
        <div class="me-crazy">
          <img
            class="me-crazy-1"
            src="~assets/img/about/bee-love-you.png?webp"
            alt="  Crazzy Myself, blank and white"
          />
          <img
            class="me-crazy-2"
            src="~assets/img/about/bee-love-you-hover.png?webp"
            alt="  Crazzy Myself, black and white"
          />
        </div>
      </div>
    </section>
    <!-- Journey section -->

    <section class="journey-container">
      <div class="contain">
        <div class="a-c_heading">
          <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
            <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
            <h1 class="margin_reveal">journey</h1>
          </div>
        </div>

        <div class="a-t_bg_text outlined" v-rellax="{ speed: -1, center: 0.5 }">
          <span>journey</span>
        </div>
        <p>Adding my journey soon</p>
      </div>
    </section>

    <!-- get connected -->
    <section class="connect-container">
      <div class="contain">
        <div class="a-c_heading">
          <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
            <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
            <h1 class="margin_reveal">To stay connected</h1>
          </div>
        </div>

        <div class="a-t_bg_text outlined" v-rellax="{ speed: -1, center: 0.5 }">
          <span>Connect</span>
        </div>

        <div class="a-social-links">
          <p>
            <span>
              <a
                href="https://www.facebook.com/tanahatas.me"
                target="_blank"
                title="Facebook (new tab)"
                rel="noopener"
              >
                <img src="~assets/svg/facebook.svg" alt="facebook icon" />
                <span class="underline-magical">facebook</span>
              </a>
            </span>

            <span>
              <a
                href="https://www.instagram.com/ehadaahmad/"
                target="_blank"
                rel="noopener"
                title="Instagram (new tab)"
              >
                <img src="~assets/svg/instagram.svg" alt="facebook icon" />
                <span class="underline-magical">instagram</span>
              </a>
            </span>
            <br />

            <span>
              <a href="mailto:ahmad@tanahatas.me">
                <img src="~assets/svg/mail.svg" alt="mail icon svg" />
                <span class="underline-magical">ahmad@tanahatas.me</span>
              </a>
            </span>
            <br />
            <span>
              <a
                href="https://dev.to/tanahatas"
                target="_blank"
                rel="noopener"
                title="DEV Community (new tab)"
              >
                <img src="~assets/svg/dev-to.svg" alt="medium icon svg" />
                <span class="underline-magical">dev.to</span>
              </a>
            </span>

            <span>
              <a
                href="https://dribbble.com/tanahatas"
                target="_blank"
                rel="noopener"
                title="Linkdin (new tab)"
              >
                <img src="~assets/svg/dribbble.svg" alt="dribbble icon" />
                <span class="underline-magical">dribbble</span>
              </a>
            </span>
            <br />
            <span>
              <a
                href="https://github.com/tanahatas"
                target="_blank"
                rel="noopener"
                title="Github (new tab)"
              >
                <img src="~assets/svg/github.svg" alt="github icon" />
                <span class="underline-magical">github</span>
              </a>
            </span>

            <span>
              <a
                href="https://www.behance.net/tanahatas"
                target="_blank"
                rel="noopener"
                title="Behance (new tab)"
              >
                <img src="~assets/svg/behance.svg" alt="behance icon" />
                <span class="underline-magical">behance</span>
              </a>
            </span>
            <br />
            <span>
              <a href="#" target="_blank" rel="noopener" title="Download my latest resume">
                <img src="~assets/svg/resume.svg" alt="resume icon" />
                <span class="underline-magical">download resume</span>
              </a>
              <br />
            </span>

            <!-- <span class="a-500px">
              <a
                href="https://www.linkedin.com/in/tanahatas/"
                target="_blank"
                rel="noopener"
                title="500px (new tab)"
              >
                <img src="~assets/svg/500px.svg" alt="500px icon" />
              </a>
            </span>-->
          </p>
        </div>

        <div class="a-support-help">
          <p>
            People who supported, helped me and from whom I learned all these along the way to
            fine-tune and get through all those errors in making of this website
            <br />
            <span class="a-s-a-container">
              <span class="supporter-avatar">
                <img
                  src="~assets/img/about/supporter-avatar-1.jpg"
                  alt="people who helped me"
                  title="Ahmad Ainul Rizki"
                />
              </span>

              <span class="supporter-avatar">
                <img
                  src="~assets/img/about/supporter-avatar-2.jpg"
                  alt="people who helped me"
                  title="Shawn Dee"
                />
              </span>+many more
            </span>
          </p>
        </div>

        <div class="a-web-details">
          <p>
            <span>This website</span>
            <br />
            <span>
              is powered by:
              <img
                src="~assets/img/about/nodejs.svg"
                alt="node js icon svg"
                title="nodejs.org"
              />
            </span>
            <br />
            <span>
              is hosted on:
              <img
                src="~assets/img/about/netlify.svg"
                alt="netlify icon svg"
                title="netlify"
              />
            </span>
            <br />
            <span>
              <a
                href="https://github.com/tanahatas/tanahatas.me"
                target="_blank"
                rel="noopener"
              >
                <span class="underline-magical">has a public repository on Github</span>
                <img src="~assets/svg/github.svg" alt="github icon svg" />
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>

    <div class="a-section-divider">
      <div class="section-divider a-end-dots">
        <hr class="section-divider" />
      </div>
    </div>

    <section class="a-footer">
      <img src="~assets/img/about/a-footer-bg.svg" alt="bg svg" />
      <div class="a-footer_bg_text outlined">
        <span>See ya!</span>
      </div>
      <img class="a-footer-hand" src="~assets/footer/footer-hand.png?webp" alt="hand gesture" />
    </section>
  </div>
</template>

<script>
export default {
  layout: 'projects',
  head() {
    return {
      title: 'About Me',
      titleTemplate: '%s - Ahmad Ainul Rizki',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ' UX designer at feeding trends.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'UX Designer, tanahatas.me, about me, ahmad ainul rizki, UX designer portfolio, user experience designer'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
