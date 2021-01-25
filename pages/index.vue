<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col lg="3" md="4" sm="6">
        <v-tabs
          v-model="tab"
        >
          <v-tab
            v-for="item in groups"
            :key="item.id"
          >
            {{ item.content }}
          </v-tab>
        </v-tabs>
        <v-text-field
          v-model="inactiveSearch"
          :loading="loading"
          label="Search"
          placeholder="1,2,..etc"
          outlined
          class="mt-4"
        />
        <v-tabs-items v-model="tab" style="height:70vh;overflow-y:auto">
          <v-tab-item
            v-for="(group,id) in groups"
            :key="id"
            class="px-4 py-4"
            fixed
          >
            <v-card
              v-for="(item,index) in inActiveTables" :key="index" class="mx-auto mb-2"
              :dark="!item.is_available"
              width="100%"
            >
              <v-row no-gutters>
                <v-col lg="4" md="4">
                  <v-avatar
                    size="80"
                    tile
                  >
                    <v-img :src="item.cover" />
                  </v-avatar>
                </v-col>
                <v-col lg="8" md="8">
                  <v-card-title
                    class="headline"
                  >{{ item.table_no }}မာလာရှမ်းကော</v-card-title>
                  <v-card-actions>
                    <v-btn
                      class="ml-2 mt-5"
                      outlined
                      rounded
                      small
                      @click="onCreate(item)"
                    >
                      START RADIO
                    </v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
      <v-col
        lg="6" md="6" sm="6"
      >
        <TableOrder :menus="menus" />
      </v-col>
      <v-col lg="3" md="4" sm="3" xs="3">
        <v-text-field
          v-model="activeSearch"
          :loading="loading"
          label="Search"
          placeholder="1,2,..etc"
          outlined
          class="mt-12"
        />
        <v-row>
          <div class="d-flex flex-wrap" style="height:70vh;overflow-y:auto">
            <v-col
              v-for="(table,index) in ActiveTables"
              :key="index"
              lg="6"
              md="6"
              sm="6"
              xs="6"
            >
              <v-card
                dark
              >
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  height="100px"
                  dark
                >
                  <v-row class="fill-height">
                    <v-card-title>
                      <v-btn
                        dark
                        icon
                      >
                        <v-icon>mdi-chevron-left</v-icon>
                      </v-btn>
                      <v-spacer />

                      <v-btn
                        dark
                        icon
                        class="mr-4"
                      >
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>
                      {{ table.table_no }}
                    </v-card-title>
                    <v-spacer />

                    <v-card-title class="info--text ">
                      <div class="display-1 ">
                        {{ table.table_no }}
                      </div>
                    </v-card-title>
                  </v-row>
                </v-img>

                <v-list two-line>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="info">
                        mdi-silverware-fork-knife
                      </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>(650) 555-1234</v-list-item-title>
                      <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-icon>
                      <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import TableOrder from '@/components/Orders/TableOrder';
export default {
    components: {
        TableOrder
    },
    data () {
        return {
            tables: [
                {
                    id: 1,
                    table_no: 'A-1',
                    city: 'Nay Pyi Taw',
                    is_available: true,
                    show_detail: false,
                    group_id: 1,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 2,
                    table_no: 'A-2',
                    city: 'Nay Pyi Taw',
                    is_available: false,
                    show_detail: false,
                    group_id: 1,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 1,
                    table_no: 'A-3',
                    city: 'Nay Pyi Taw',
                    is_available: true,
                    show_detail: false,
                    group_id: 1,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 2,
                    table_no: 'A-4',
                    city: 'Nay Pyi Taw',
                    is_available: false,
                    show_detail: false,
                    group_id: 1,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 3,
                    table_no: 'B-1',
                    city: 'Yangon',
                    is_available: true,
                    show_detail: false,
                    group_id: 2,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 4,
                    table_no: 'B-2',
                    city: 'Yangon',
                    is_available: false,
                    show_detail: false,
                    group_id: 2,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 3,
                    table_no: 'B-3',
                    city: 'Yangon',
                    is_available: true,
                    show_detail: false,
                    group_id: 2,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 4,
                    table_no: 'B-4',
                    city: 'Yangon',
                    is_available: false,
                    show_detail: false,
                    group_id: 2,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 5,
                    table_no: 'UA-3',
                    city: 'Yangon',
                    is_available: false,
                    show_detail: true,
                    group_id: 3,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 6,
                    table_no: 'UB-2',
                    city: 'Mandalay',
                    is_available: false,
                    show_detail: false,
                    group_id: 4,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 7,
                    table_no: 'UA-1',
                    city: 'Yangon',
                    is_available: false,
                    show_detail: false,
                    group_id: 3,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 8,
                    table_no: 'UB-1',
                    city: 'Mandalay',
                    is_available: true,
                    show_detail: false,
                    group_id: 4,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 9,
                    table_no: 'A-5',
                    city: 'Yangon',
                    is_available: true,
                    show_detail: false,
                    group_id: 3,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 10,
                    table_no: 'A-6',
                    city: 'Mandalay',
                    is_available: true,
                    show_detail: false,
                    group_id: 1,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 11,
                    table_no: 'A-7',
                    city: 'Yangon',
                    is_available: true,
                    show_detail: false,
                    group_id: 1,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 12,
                    table_no: 'A-8',
                    city: 'Yangon',
                    is_available: false,
                    show_detail: false,
                    group_id: 1,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 13,
                    table_no: 'A-9',
                    city: 'Yangon',
                    is_available: true,
                    show_detail: false,
                    group_id: 1,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 14,
                    table_no: 'A-10',
                    city: 'Yangon',
                    is_available: true,
                    show_detail: false,
                    group_id: 1,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                }
            ],
            menus: [
                {
                    id: 1,
                    name: 'မာလာရှမ်းကော',
                    city: 'Nay Pyi Taw',
                    price: 3000,
                    qty: 1,
                    group_id: 1,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 2,
                    name: 'မာလာရှမ်းကော',
                    city: 'Nay Pyi Taw',
                    price: 3000,
                    qty: 1,
                    group_id: 1,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 1,
                    name: 'မာလာရှမ်းကော',
                    city: 'Nay Pyi Taw',
                    pricee: 3000,
                    qty: 1,
                    group_id: 1,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 2,
                    name: 'မာလာရှမ်းကော',
                    city: 'Nay Pyi Taw',
                    price: 3000,
                    qty: 1,
                    group_id: 1,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 3,
                    name: 'မာလာရှမ်းကော',
                    city: 'Yangon',
                    pricee: 3000,
                    qty: 1,
                    group_id: 2,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 4,
                    name: 'မာလာရှမ်းကော',
                    city: 'Yangon',
                    price: 3000,
                    qty: 1,
                    group_id: 2,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 3,
                    name: 'မာလာရှမ်းကော',
                    city: 'Yangon',
                    pricee: 3000,
                    qty: 1,
                    group_id: 2,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 4,
                    name: 'မာလာရှမ်းကော',
                    city: 'Yangon',
                    price: 3000,
                    qty: 1,
                    group_id: 2,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 5,
                    name: 'မာလာရှမ်းကော',
                    city: 'Yangon',
                    price: 3000,
                    qty: 1,
                    group_id: 3,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 6,
                    name: 'မာလာရှမ်းကော',
                    city: 'Mandalay',
                    price: 3000,
                    qty: 1,
                    group_id: 4,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 7,
                    name: 'မာလာရှမ်းကော',
                    city: 'Yangon',
                    price: 3000,
                    qty: 1,
                    group_id: 3,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 8,
                    name: 'မာလာရှမ်းကော',
                    city: 'Mandalay',
                    price: 3000,
                    qty: 1,
                    group_id: 4,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 9,
                    name: 'မာလာရှမ်းကော',
                    city: 'Yangon',
                    is_available: true,
                    qty: 1,
                    group_id: 3,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 10,
                    name: 'မာလာရှမ်းကော',
                    city: 'Mandalay',
                    is_available: true,
                    qty: 1,
                    group_id: 1,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                },
                {
                    id: 11,
                    name: 'မာလာရှမ်းကော',
                    city: 'Yangon',
                    is_available: true,
                    qty: 1,
                    group_id: 1,
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    cover: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                }
            ],
            tab: 0,
            groups: [
                { id: 1, content: 'Room-A' },
                { id: 2, content: 'Room-B' },
                { id: 3, content: 'Upper-A' },
                { id: 4, content: 'Uppser-B' }
            ],
            loading: false,
            inactiveSearch: null,
            activeSearch: null
        };
    },
    computed: {
        inActiveTables () {
            return this.tables.filter((table) => {
                if (this.inactiveSearch == null) {
                    return table.group_id === this.groups[`${this.tab}`].id && table.is_available === true;
                } else {
                    return table.group_id === this.groups[`${this.tab}`].id && table.is_available === true && table.table_no.toLowerCase().includes(this.inactiveSearch.toLowerCase());
                }
            });
        },
        ActiveTables () {
            return this.tables.filter((table) => {
                if (this.activeSearch == null) {
                    return table.is_available === false;
                } else {
                    return table.is_available === false && table.table_no.toLowerCase().includes(this.activeSearch.toLowerCase());
                }
            });
        }
    },
    mounted () {
        this.$on('SaveItem', (data) => {
            console.log(data.id);
            this.tables.find(res => res === data).is_available = false;
        });
    },
    methods: {
        onCreate (table) {
            this.$emit('newTableOrder', table);
        }
    }
};
</script>
