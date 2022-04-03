import { latLng, LatLng } from 'leaflet';
import { InjectionKey, ref } from 'vue';

interface IMaPSettings {
  multiple: boolean;
  zoom: {
    min: number;
    max: number;
  };
}

class MapInjectable {
  private _center = ref<LatLng>(latLng(22.245531, -80.393699));
  private _markers = ref<LatLng[]>([]);
  private _settings = ref<IMaPSettings>({
    multiple: false,
    zoom: {
      max: 18,
      min: 14,
    },
  });
  private _zoom = ref(16);
  /**
   * -----------------------------------------
   *	getters & setters
   * -----------------------------------------
   */
  get center() {
    return this._center.value;
  }
  set center(center: LatLng) {
    this._center.value = center;
  }
  get markers() {
    return this._markers.value;
  }
  set markers(markers: LatLng[]) {
    this._markers.value = markers;
  }
  get settings() {
    return this._settings.value;
  }
  set settings(s: IMaPSettings) {
    this._settings.value = s;
  }
  get zoom() {
    return this._zoom.value;
  }
  set zoom(zoom: number) {
    this._zoom.value = zoom;
  }
}

export const $mapInjectable = new MapInjectable();
export const _map: InjectionKey<MapInjectable> = Symbol('MapInjectable');
