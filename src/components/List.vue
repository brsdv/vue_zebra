<template>
  <div class="container-content">
    <div class="search">
      <div class="search--icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10.5" cy="10.5" r="5.5" stroke="#97999B" stroke-width="2"/>
          <path d="M18.8281 18.4854L14.9998 14.5001" stroke="#97999B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="search--text">
        <input v-model="message" type="text" placeholder="Поиск">
      </div>
    </div>
    <div class="wrapper">
      <div class="item" v-for="(item, index) of filteredNews" :key="index">
          <div class="item__block date--box">
              <div class="block--title date--text">
                {{ item.date }}
              </div>
          </div>
          <div v-if="index === 0" class="item__tag--first">
              <div class="tag__text--first">
                В центре внимания
              </div>
          </div>
          <div class="item__title">
            <p>{{ item.title }}</p>
          </div>
          <div class="item__tag">
            <div class="item__block tag--box" v-for="(tag, index) of item.tags" :key="index">
              <div class="block--title tag--text">
                {{ tag }}
              </div>
            </div>
          </div>
      </div>
    </div>
    <button v-if="links.length && filteredNews.length > 7" @click="getNews()" class="show-more text">Загрузить еще</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'List',
    data: function () {
        return {
            message: '',
            news: [],
            links: ['https://api.myjson.com/bins/m4a6k', 'https://api.myjson.com/bins/12o4ss']
        }
    },
    mounted: function () {
        this.getNews()
    },
    methods: {
      getNews: function () {
          axios
              .get(this.links[0])
              .then(response => (response.data.news.forEach(item => this.news.push(item))))
              .then(this.links.shift())
      }
    },
    computed: {
      filteredNews: function () {
        let searchMessage = this.message
        
        return this.news.filter(function (item) {
          if (searchMessage === '') return true
          else return item.title.indexOf(searchMessage) > -1
        })
      }
    }
}
</script>

<style lang="scss" scoped>
/* Flex */
/* Card news */
/* button */
/* search */
.wrapper {
	display: flex;
	flex-wrap: wrap;
	margin: 0 -12px;
}
.item {
	position: relative;
	width: calc(33% - 24px);
	max-width: 412px;
	height: 254px;
	margin: 12px;
	box-sizing: border-box;
	background: #F8F8F8;
	&:first-child {
		width: calc(66% - 24px);
		max-width: 848px;
		background: no-repeat url("../assets/rec6.png");
		>.item__block {
			margin-top: 32px;
		}
		>.item__title {
			bottom: 0;
			margin: 0 24px 16px;
			width: 643px;
			>p {
				font-family: Roboto;
				font-style: normal;
				font-weight: normal;
				font-size: 32px;
				line-height: 41px;
				text-transform: uppercase;
				color: #FFFFFF;
			}
		}
	}
}
.item__block {
	height: 21px;
	margin: 24px;
	border-radius: 2px;
}
.block--title {
	margin: 0 5px;
	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 12px;
}
.date--box {
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	background: #97999B;
}
.date--text {
	line-height: 22px;
	color: #FFFFFF;
}
.item__tag {
	position: absolute;
	bottom: 0;
	left: 0;
}
.tag--box {
	display: inline-block;
	border: 1px solid #D9D9D6;
	margin-right: 0;
}
.item__tag--first {
	display: inline-block;
	height: 21px;
	margin: 127px 24px 0;
	box-sizing: border-box;
	border: 1px solid #FFFFFF;
	border-radius: 2px;
}
.tag__text--first {
	margin: 1px 5px 0;
	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 12px;
	text-align: center;
	text-transform: uppercase;
	color: #FFFFFF;
}
.tag--text {
	line-height: 20px;
	color: #97999B;
}
.item__title {
	display: block;
	position: absolute;
	margin: 75px 24px;
	>p {
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 24px;
		line-height: 28px;
		margin: 0;
		color: #000000;
	}
}
.show-more {
	width: 180px;
	height: 38px;
	margin: 8px 0 -24px;
	background: linear-gradient(214.99deg, #3BCDFB 38.41%, #D728F4 78.33%), #C4C4C4;
	mix-blend-mode: normal;
	border: none;
	outline: none;
	box-sizing: content-box;
}
.show-more.text {
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 19px;
	color: #FFFFFF;
}
.search {
	display: inline-block;
	position: relative;
	width: 412px;
	height: 48px;
	margin: 8px 0 28px;
	background: #FFFFFF;
	border-bottom: 2px solid #D9D9D6;
}
.search--icon {
	position: absolute;
	top: 0;
	left: 0;
	margin: 12px 11px;
}
.search--text {
	margin: 15px 48px;
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 16px;
	color: #97999B;
}
</style>
