<template>
  <section :key="$route.params.post">
    <div id="fb-root"></div>

    <div class="blog-post-hero">
      <div class="contain_blog">
        <div class="b-p-heading">
          <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="0">
            <div class="back-to-blog">
              <nuxt-link to="/blog">← Back to Blog</nuxt-link>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
            <h1>{{ attributes.title }}</h1>
          </div>

          <p
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
          >{{ attributes.description }}</p>
        </div>

        <div class="author-section">
          <div class="author-container">
            <div>
              <nuxt-link to="/about">
                <div
                  class="author-avatar"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="300"
                >
                  <img
                    src="~assets/blog/blog-avatar-2.jpg"
                    alt="blog avatar, profile pic, dp, author"
                    title="Know more"
                  />
                </div>
              </nuxt-link>
            </div>
            <div
              class="name-and-link"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              <span>
                <nuxt-link to="/about">Ahmad Ainul Rizki</nuxt-link>
              </span>
              <span>
                <a
                  class="entry-meta-instagram"
                  href="https://www.instagram.com/ehadaahmad"
                  target="_blank"
                  rel="noopener"
                  title="Professional Insta Account"
                >@ehadaahmad</a>
              </span>
            </div>
          </div>
        </div>
        <div class="published-time" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
          <span>Published on</span>
          <span>
            <time>{{require('moment')(attributes.ctime).format('Do MMM YYYY')}}</time>
          </span>
        </div>
      </div>
    </div>

    <!-- hero image -->
    <div v-if="attributes.cover_image" class="b-p-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_blog_post" data-aos="reveal-right"></div>
        <img
          :src="require(`~/assets/blog/${attributes.cover_image}`)"
          :alt="attributes.cover_image_cp"
        />
      </div>
      <p class="ps black50">{{attributes.cover_image_description}}</p>
      <div class="section-divider">
        <hr class="section-divider" />
      </div>
    </div>

    <div class="contain_blog blog_post_style dynamic-markdown">
      <article>
        <div v-html="content"></div>
      </article>
    </div>
    <!-- <div class="p-zig-zag-line">
      <div>
        <img src="~assets/svg/zig-zag-2.svg" alt="zig zag line svg" />
      </div>
    </div>-->
    <div class="section-divider">
      <hr class="section-divider" />
    </div>

    <div class="post-applause-container">
      <span class="applause">
        <applause-button style="width: 70px; height: 70px;" color="#fc3a52" multiclap="true" />
      </span>
    </div>
    <div class="contain_blog">
      <div class="b-p-hl"></div>
      <div class="back-to-blog_2">
        <nuxt-link to="/blog">← Back to Blog</nuxt-link>
      </div>

      <div class="b-p-hl"></div>
    </div>
    <!-- Blog Post Footer -->
    <div class="contain_blog github-edit">
      <p class="ps">
        Caught a mistake or want to contribute to the blog?
        <span class="red">
          <a
            :href="`https://github.com/tanahatas/tanahatas.me/blob/master/articles/${attributes.github_doclink}`"
            target="_blank"
            rel="noopener"
          >Edit this page on GitHub!</a>
        </span>
      </p>
    </div>
    <div class="b-p-hl"></div>
    <div class="contain_blog">
      <div class="commentbox"></div>
    </div>
  </section>
</template>

<script>
import Contribute from '~/components/blog/Contribute.vue'

const fm = require('front-matter')
const md = require('markdown-it')({
  html: true,
  typographer: true
}).use(require('markdown-it-highlightjs'), { auto: true })

export default {
  layout: 'blog',

  async asyncData({ params }) {
    const fileContent = await import(`~/articles/${params.post}.md`)
    let res = fm(fileContent.default)
    return {
      attributes: res.attributes,
      content: md.render(res.body)
    }
  },
  head() {
    return {
      title: this.attributes.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.attributes.description
        }
      ]
    }
  }
}
</script>

<style scoped>
blockquote {
  margin-bottom: 1em;
}

#footer {
  display: none;
}

.post-applause-container {
  width: 100;
  position: relative;
  height: 100px;
}

.disqus-container {
  padding: 0px 24px 43px 30px;
  opacity: 1;
}

.applause {
  padding: 40px;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}
</style>

