// package: embedaccesstoken
// file: registry/embedaccesstoken/embedaccesstoken.proto

import * as jspb from "google-protobuf";

export class EmbedAccessTokenRequest extends jspb.Message {
  clearFiltersList(): void;
  getFiltersList(): Array<EmbedAccessTokenRequest.Filter>;
  setFiltersList(value: Array<EmbedAccessTokenRequest.Filter>): void;
  addFilters(value?: EmbedAccessTokenRequest.Filter, index?: number): EmbedAccessTokenRequest.Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmbedAccessTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmbedAccessTokenRequest): EmbedAccessTokenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmbedAccessTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmbedAccessTokenRequest;
  static deserializeBinaryFromReader(message: EmbedAccessTokenRequest, reader: jspb.BinaryReader): EmbedAccessTokenRequest;
}

export namespace EmbedAccessTokenRequest {
  export type AsObject = {
    filtersList: Array<EmbedAccessTokenRequest.Filter.AsObject>,
  }

  export class Filter extends jspb.Message {
    getKey(): string;
    setKey(value: string): void;

    getOperator(): string;
    setOperator(value: string): void;

    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Filter.AsObject;
    static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Filter;
    static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
  }

  export namespace Filter {
    export type AsObject = {
      key: string,
      operator: string,
      value: string,
    }
  }
}

export class EmbedAccessTokenResponse extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmbedAccessTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EmbedAccessTokenResponse): EmbedAccessTokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmbedAccessTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmbedAccessTokenResponse;
  static deserializeBinaryFromReader(message: EmbedAccessTokenResponse, reader: jspb.BinaryReader): EmbedAccessTokenResponse;
}

export namespace EmbedAccessTokenResponse {
  export type AsObject = {
    accesstoken: string,
  }
}

