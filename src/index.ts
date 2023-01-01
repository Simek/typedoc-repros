import { createPermissionHook, PermissionResponse } from 'expo-modules-core';

export default class Camera {
  // note(simek): comment in there is overwritten by default `createPermissionHook` description
  /**
   * Check or request permissions to access the camera.
   * This uses both `requestCameraPermissionsAsync` and `getCameraPermissionsAsync` to interact with the permissions.
   * @example
   * ```ts
   * const [status, requestPermission] = Camera.useCameraPermissions();
   * ```
   */
  static useCameraPermissions = createPermissionHook({
    getMethod: async () => ({} as PermissionResponse),
    requestMethod: async () => ({} as PermissionResponse),
  });
}
