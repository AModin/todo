import { observable, action } from "mobx";

class AppSettings {
  @observable isShowModal = false;

  @action
  toggleModal() {
      this.isShowModal = !this.isShowModal;
  }
}

const currentSettings = new AppSettings();

export default currentSettings;

