type EventBus = {
  setSearchQuery: (query: string) => void;
};

export type EnrichedWindow = Window & { eventBus: EventBus };
