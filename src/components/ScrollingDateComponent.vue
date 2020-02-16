<template>
  <div class="hello">
    <div class="scroll-container">
      <ul>
        <li v-for="(names, index) in grouped" :key="index">
          <h2>DATE: {{ getDaysAgo(names) }}</h2>
          <div v-for="(item, index) in names" :key="index[index]">
            {{ item.name }}
          </div>
        </li>
      </ul>
      <infinite-loading
        @infinite="infiniteHandler"
        identifier="loader"
      ></infinite-loading>
    </div>
  </div>
</template>

<script lang="ts">
import moment from "moment";
import _ from "lodash";
import InfiniteLoading from "vue-infinite-loading";
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    InfiniteLoading
  }
})
export default class ScrollingDateComponent extends Vue {
  page: number = 0;
  pageSize: number = 2;
  list: any = [];
  names: any = [
    {
      name: "Name 1",
      date: "05-02-2020"
    },
    {
      name: "Name 2",
      date: "04-02-2020"
    },
    {
      name: "Name 3",
      date: "06-02-2020"
    },
    {
      name: "Name 4",
      date: "06-02-2020"
    },
    {
      name: "Name 5",
      date: "06-02-2020"
    },
    {
      name: "Name 6",
      date: "05-02-2020"
    },
    {
      name: "Name 7",
      date: "05-02-2020"
    },
    {
      name: "Name 8",
      date: "04-02-2020"
    },
    {
      name: "Name 9",
      date: "02-02-2020"
    },
    {
      name: "Name 10",
      date: "05-02-2020"
    },
    {
      name: "Name 11",
      date: "01-02-2020"
    },
    {
      name: "Name 12",
      date: "06-02-2020"
    },
    {
      name: "Name 13",
      date: "02-02-2020"
    },
    {
      name: "Name 14",
      date: "05-02-2020"
    },
    {
      name: "Name 15",
      date: "02-02-2020"
    }
  ];

  get chunked() {
    let orderedBy = _.orderBy(this.names, "date", "desc");
    return _.chunk(orderedBy, this.pageSize);
  }

  get grouped() {
    const groupedItems = _(this.list)
      .groupBy(item => moment(item.date).day())
      .sortBy(group => this.list.indexOf(group[0]))
      .value();

    return groupedItems;
  }

  getDaysAgo(names: any) {
    let today = moment()
      .utc()
      .startOf("day");
    let targetDate = moment(names[0].date, "DD-MM-YYYY")
      .utc()
      .startOf("day");
    let diff = today.diff(targetDate, "days");

    if (diff === 0) {
      return "TODAY";
    } else if (diff === 1) {
      return "YESTERDAY";
    } else {
      return `${diff} days ago`;
    }
  }

  infiniteHandler($state: any) {
    if (this.page < this.chunked.length) {
      this.list.push(...this.chunked[this.page]);
      this.page += 1;
      $state.loaded();
    } else {
      $state.complete();
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 200px 0 200px;
}
a {
  color: #42b983;
}

.scroll-container {
  height: 500px;
  overflow: scroll;
}
</style>
