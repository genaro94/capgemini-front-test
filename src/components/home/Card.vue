<template>
  <div class="cards">
    <div class="cards-icon">
      <i :class="icon" :style="style"></i>
    </div>
    <div class="cards-info">
      <span class="cards-title">{{title}}</span>
      <span class="cards-value">{{value}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['title', 'value', 'icon', 'color'],
  computed: {
    style() {
      return "color: " + (this.color || '#000')
    }
  }
}
</script>

 <style>
    .cards {
        flex: 1;
        display: flex;
        border-radius: 8px;
        margin-right: 20px;
        margin-bottom: 20px;
        padding: 20px;

    }
    .cards-icon {
        display: flex;
        align-items: center;
    }
    .cards-icon i {
        font-size: 5rem;
    }
    .cards-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .cards-title {
        font-size: 1.2rem;
    }
    .cards-value {
        font-size: 2rem;
    }
</style>