<template>
    <button class="cards" @click="goToRoute">
      <div class="cards-icon">
        <i :class="icon" :style="style"></i>
      </div>
      <div class="cards-info">
        <span class="cards-title">{{title}}</span>
        <span class="cards-value">{{value}}</span>
      </div>
    </button>
</template>

<script>
export default {
  name: 'Card',
  props: ['title', 'value', 'icon', 'color', 'goToRoute'],
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
        padding: 20px;
        margin: 0px 5px 0 5px;

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
        font-size: 1.8rem;
    }
    .cards-value {
        font-size: 1.1rem;
    }
</style>