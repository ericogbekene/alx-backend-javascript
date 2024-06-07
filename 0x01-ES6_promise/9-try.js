export default function guardrail(mathFunction) {
  try {
    const queue = [];
    try {
      const result = mathFunction();
      queue.push(result);
    } catch (error) {
      queue.push(error);
    } finally {
      queue.push('Guardrail was processed');
    }
    return queue;
  } catch (error) {
    return ['Error: Guardrail failed to process', error];
  }
}
