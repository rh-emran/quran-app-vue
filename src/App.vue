<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container py-6">
      <div class="bg-white p-4 shadow rounded">
        <div class="flex -mx-4 items-center mb-6">
          <div class="flex-1 px-4">
            <select
              v-model="selected"
              name=""
              id=""
              class="quran-input"
              v-on:change="suraChange"
            >
              <option value="null" selected>Select Sura</option>
              <option
                v-for="suraSelect in suras"
                v-bind:key="suraSelect.id"
                :value="suraSelect.id"
              >
                ({{ suraSelect.id }}) - {{ suraSelect.transliteration }} -
                {{ suraSelect.name }}
              </option>
            </select>
          </div>

          <div class="flex-1 px-4 text-center">
            <h3 v-if="selectedSura" class="font-bold mb-1 text-3xl font-atabic">
              {{ selectedSura.name }}
            </h3>
            <p v-if="selectedSura" class="">
              {{ selectedSura.transliteration }} || {{ selectedSura.type }}
            </p>
          </div>

          <div class="flex-1 px-4">
            <select
              v-if="selectedSura"
              v-on:change="ayahChange"
              name=""
              id=""
              class="quran-input"
            >
              <option value="">Select Ayah</option>
              <option
                v-for="ayah in selectedSura.verses"
                v-bind:key="ayah.id"
                :value="ayah.id"
              >
                Ayah - {{ ayah.id }}
              </option>
            </select>
          </div>
        </div>

        <div v-if="selectedSura" class="">
          <p
            v-for="ayah in selectedSura.verses"
            v-bind:key="ayah.index"
            class="bg-green-300 flex justify-between mb-2 py-2 items-center rounded-md"
          >
            <span
              class="w-8 h-7 border border-red-500 rounded-full inline-block text-sm text-center pt-[3px] mx-2"
              >{{ ayah.id }}</span
            >
            <span
              class="text-right text-2xl leading-10 inline-block w-full mr-2 font-atabic"
              >{{ ayah.text }}</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      selected: null,
      selectedSura: [],
      suras: [],
    };
  },
  mounted() {
    axios
      .get("https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran.json")
      .then((response) => {
        this.suras = response.data;
        this.selected = response.data[0].id;
        this.selectedSura = response.data[0];
      })
      .then((this.selected = 1));
  },
  methods: {
    suraChange: function (e) {
      this.selected = e.target.value;
      this.selectedSura = this.suras.find((sura) => sura.id == this.selected);
    },
    ayahChange: function (e) {
      // this.selected = e.target.value;
      // this.selectedSura = this.suras.find((sura) => sura.id == this.selected);
      console.log(e.target.value);
    },
  },
};
</script>
