export default function ({ redirect }) {
    if (!this.$auth.$storage.getState('access_token')) { return redirect('/login'); }
    // if (!store.state.auth.access_token) { return redirect('/login'); }
}
