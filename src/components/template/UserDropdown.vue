<template>
  <div class="user-dropdwon">
    <div class="user-button">
      <span class="d-none d-sm-block" >{{user.name}}</span>
      <div class="user-dropdwon-img">
        <Gravatar :email="user.email" alt="User" />
      </div>
      <i class="fa fa-angle-down"></i>
    </div>

    <div class="user-dropdwon-content">
      <a href><i class="fa fa-sign-out" ></i>Sair</a>
    </div>

  </div>
</template>

<script>

import { mapState } from 'vuex'
import Gravatar from 'vue-gravatar'

export default {
  name: 'UserDropdown',
  components: { Gravatar },
  computed:  mapState(['user'])
}
</script>

<style>
  .user-dropdwon {
    position: relative;
    height: 100%;
  }

  .user-button {
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: 100;
    height: 100%;
    padding: 0px 20px;
    font-size:.9rem
  }
  .user-dropdwon:hover {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .user-dropdwon-img {
    margin: 0px 8px;
  }

  .user-dropdwon-img > img {
    max-height: 25px;
    border-radius: 5px;
  }

  .user-dropdwon-content {
    position:absolute;
    right: 0px;
    background-color: #f9f9f9;
    min-width: 170px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 10px;
    z-index: 1;
    font-size:.9rem;

    display:flex;
    flex-direction: column;
    flex-wrap: wrap;

    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
  }
  .user-dropdwon:hover .user-dropdwon-content {
    visibility: visible;
    opacity: 1;
  }
  .user-dropdwon-content i {
    padding-right: 4px;
  }

  .user-dropdwon-content a {
    text-decoration: none;
    color: #000;
    padding: 10px;
  }

  .user-dropdwon-content a:hover {
    background-color: #EDEDED;
    text-decoration: none;
    color: #000;
  }

</style>