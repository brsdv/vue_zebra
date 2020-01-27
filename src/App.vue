<template>
  <div class="page-wrapper">
    <div class="page-top">
      <div class="container container--wide u-relative">
          <nav class="breadcrumbs">
              <ul class="breadcrumbs__list ul--clear" itemscope itemtype="http://schema.org/BreadcrumbList">
                  <li class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                    <router-link class="breadcrumbs__link breadcrumbs__link--home" itemscope itemtype="http://schema.org/Thing" itemprop="item" to="/" title="Главная">
                        <span itemprop="name">Главная</span>
                    </router-link>
                  </li>
                  <li class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                    <span class="breadcrumbs__link is-current" itemscope itemtype="http://schema.org/Thing"
                    itemprop="item"><span itemprop="name">{{ $route.name }}</span></span>
                  </li>
              </ul>
          </nav>
          <div class="page__title js-layout-title"><h1>{{ $route.name }}</h1></div>
      </div>
    </div>
    <main class="content">
      <div class="container container--wide">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>
