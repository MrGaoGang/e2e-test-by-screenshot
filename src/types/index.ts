export type CaptureEventType = 'CLICK' | 'SCREENSHOT';

export interface DataSet {
  [key: string]: number | string;
}

export type BaseEvent = {
  type: CaptureEventType;
  scrollTop: number;
  selector: string;
};

export type EventCallback = (event: BaseEvent) => void;

export type UICaseInfo = Array<{
  page: string;
  events: BaseEvent[];
}>;
