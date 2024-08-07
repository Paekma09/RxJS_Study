/* ConnectableObservable 의 구현 코드 일부분 */
class RefCountOperator {
  constructor(connectable) {
    this.connectable = connectable;
  }

  call(subscriber, source) {
    const { connectable } = this;
    connectable._refCount++;
    const refCounter = new RefCountSubscriber(subscriber, connectable);
    const subscription = source.subscribe(refCounter);
    if (!refCounter.closed) {
      refCounter.connection = connectable.connect();
    }
    return subscription;
  }
}