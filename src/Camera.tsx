import { createPermissionHook } from 'expo-modules-core';
import * as React from 'react';

import {
  CameraProps,
  PermissionResponse,
} from './Camera.types';
import CameraManager from './ExponentCameraManager';
import { View } from "react-native";

export default class Camera extends React.Component<CameraProps> {
  static async getCameraPermissionsAsync(): Promise<PermissionResponse> {
    return CameraManager.getCameraPermissionsAsync();
  }

  static async requestCameraPermissionsAsync(): Promise<PermissionResponse> {
    return CameraManager.requestCameraPermissionsAsync();
  }

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
    getMethod: Camera.getCameraPermissionsAsync,
    requestMethod: Camera.requestCameraPermissionsAsync,
  });

  render() {
    return (
      <View {...this.props} />
    );
  }
}

export const {
  getCameraPermissionsAsync,
  requestCameraPermissionsAsync,
} = Camera;
