export default {
  getAddress(state: any, payload: any) {
    state.zip = payload.zip;
    state.address = payload.address;
  }
}