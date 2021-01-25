<template>
  <v-dialog
    v-model="isopenDialog"
    persistent
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-card-text>
        <v-row>
          <v-col lg="7" md="7">
            <v-text-field v-model="searchMenu" label="Search.." name="searchMenu" />
            <!-- <v-row> -->
            <div class="d-flex flex-wrap" style="height:70vh;overflow-y:auto">
              <v-col v-for="(item,id) in showMenus" :key="id" lg="4" md="4">
                <v-card>
                  <v-img :src="item.cover" height="80px" />
                  <v-card-title class="info--text text--xs">{{ item.name }}</v-card-title>
                  <div class="grey--text ml-4">4000ks</div>
                  <v-divider />
                  <v-card-actions>
                    <v-btn fab small text :disabled="isSelected(item)" @click="item.qty--">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                    <v-btn
                      outlined
                      rounded
                      small
                      :disabled="isSelected(item)"
                      @click="onNewTableOrder(item)"
                    ><span flat>{{ item.qty }}</span>
                      Order
                    </v-btn>
                    <v-btn fab small text :disabled="isSelected(item)" @click="item.qty++">
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </div>
            <!-- </v-row> -->
          </v-col>
          <v-col lg="5" md="5">
            <v-text-field label="Items" name="searchMenu" disabled readonly />
            <v-row>
              <v-col cols="12">
                <v-form style="height:70vh;overflow-y:auto" @submit.prevent="saveItem()">
                  <table v-if="selectedItems.length" border="1" width="100%">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(row,index) in selectedItems" :key="index" align="center"
                          justify="center"
                      >
                        <td>
                          {{ index+1 }}
                        </td>
                        <td>
                          {{ row.name }}
                        </td>
                        <td><v-btn fab small text @click="row.qty--">
                              <v-icon>mdi-minus</v-icon>
                            </v-btn>
                          {{ row.qty }}<v-btn fab small text @click="row.qty++">
                            <v-icon>mdi-plus</v-icon>
                          </v-btn>
                        </td>
                        <td>
                          {{ row.amount }}
                          <v-icon
                            slot="append-outer"
                            class="ml-4"
                            flat
                            small
                          >mdi-build</v-icon>
                          <v-icon
                            slot="append-outer"
                            class="ml-4"
                            flat
                            small
                            color="red"
                          >md-close</v-icon>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </v-form>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-spacer />
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" text @click="closeForm()">Cancel</v-btn>
        <v-btn color="primary" type="submit" @click="onSaveItem()">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
    name: 'TableOrder',
    props: {
        menus: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            isopenDialog: false,
            selectedTable: null,
            searchMenu: null,
            items: []
        };
    },
    computed: {
        showMenus () {
            return this.searchMenu ? this.menus.filter(res => res.name.toLowerCase().includes(this.searchMenu.toLowerCase())) : this.menus;
        },
        selectedItems () {
            return this.items;
        }
    },
    mounted () {
        this.$parent.$on('newTableOrder', (item) => {
            this.selectedTable = item;
            this.isopenDialog = true;
        });
    },
    methods: {
        onNewTableOrder (item) {
            this.items.push(item);
        },
        isSelected (value) {
            return this.items.includes(value);
        },
        onSaveItem () {
            this.$parent.$emit('SaveItem', this.selectedTable);
            this.closeForm();
        },
        closeForm () {
            this.items = [];
            this.isopenDialog = false;
        }
    }
};
</script>
<style>
.v-dialog,.v-dialog--active{
  overflow-y:hidden !important;
}
</style>
