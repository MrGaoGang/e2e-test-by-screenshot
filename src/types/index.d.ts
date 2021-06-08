enum CaptureEventType {
  CLICK,
}

interface DataSet {
  [key: string]: number | string;
}

type BaseEvent = {
  url?: string;
  type: CaptureEventType;
  scrollTop: number;
  id?: string;
  class: string;
  dataset?: DataSet;
};

type EventCallback = (event: BaseEvent) => void;
