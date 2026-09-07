import React, { useMemo, useState } from 'react';
import {
  Activity,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  LayoutDashboard,
  Plus,
  RefreshCw,
  ShieldCheck,
  Workflow,
  XCircle,
} from 'lucide-react';

type ProductKey = 'quantx' | 'vectra' | 'spectre';
type WorkStage = 'backlog' | 'planned' | 'in_progress' | 'testing' | 'ready' | 'live' | 'blocked';

type WorkItem = {
  id: string;
  product: ProductKey;
  title: string;
  owner: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  stage: WorkStage;
  progress: number;
  dueDate?: string;
  notes?: string;
};

type ProductConfig = {
  key: ProductKey;
  name: string;
  subtitle: string;
  portal: string;
};

const PRODUCTS: ProductConfig[] = [
  {
    key: 'quantx',
    name: 'QuantX',
    subtitle: 'Market Intelligence & Probability Engine',
    portal: 'https://quantxai.co.in/',
  },
  {
    key: 'vectra',
    name: 'Vectra',
    subtitle: 'Creative, Media & Production Engine',
    portal: 'https://vectrav1.akhil718.workers.dev/',
  },
  {
    key: 'spectre',
    name: 'Spectre',
    subtitle: 'Business Software & AI Factory',
    portal: 'https://spectre-venture-pro.ai.studio',
  },
];

const STAGES: { key: WorkStage; label: string; terminal?: boolean }[] = [
  { key: 'backlog', label: '1. Backlog' },
  { key: 'planned', label: '2. Planned' },
  { key: 'in_progress', label: '3. In Progress' },
  { key: 'testing', label: '4. Testing' },
  { key: 'ready', label: '5. Ready' },
  { key: 'live', label: '6. Live', terminal: true },
  { key: 'blocked', label: 'Blocked', terminal: true },
];

const EMPTY_ITEMS: WorkItem[] = [];

const stageOrder: WorkStage[] = ['backlog', 'planned', 'in_progress', 'testing', 'ready', 'live'];

function nextStage(stage: WorkStage): WorkStage | null {
  const index = stageOrder.indexOf(stage);
  if (index < 0 || index === stageOrder.length - 1) return null;
  return stageOrder[index + 1];
}

function loadItems(): WorkItem[] {
  try {
    const raw = localStorage.getItem('swastik-labs-kanban');
    if (!raw) return EMPTY_ITEMS;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : EMPTY_ITEMS;
  } catch {
    return EMPTY_ITEMS;
  }
}

export default function LabsKanbanDashboard({ initialProduct = 'quantx' }: { initialProduct?: string }) {
  const defaultProduct = PRODUCTS.some(p => p.key === initialProduct) ? (initialProduct as ProductKey) : 'quantx';
  const [activeProduct, setActiveProduct] = useState<ProductKey>(defaultProduct);
  const [items, setItems] = useState<WorkItem[]>(() => (typeof window === 'undefined' ? [] : loadItems()));
  const [search, setSearch] = useState('');

  const product = PRODUCTS.find((p) => p.key === activeProduct)!;

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return items.filter((item) => {
      if (item.product !== activeProduct) return false;
      if (!q) return true;
      return [item.title, item.owner, item.priority, item.notes || ''].some((v) => v.toLowerCase().includes(q));
    });
  }, [items, activeProduct, search]);

  const productItems = items.filter((item) => item.product === activeProduct);
  const completed = productItems.filter((item) => item.stage === 'live').length;
  const blocked = productItems.filter((item) => item.stage === 'blocked').length;
  const avgProgress = productItems.length
    ? Math.round(productItems.reduce((sum, item) => sum + item.progress, 0) / productItems.length)
    : 0;

  const persist = (next: WorkItem[]) => {
    setItems(next);
    localStorage.setItem('swastik-labs-kanban', JSON.stringify(next));
  };

  const addItem = () => {
    const title = window.prompt(`Add ${product.name} work item:`)?.trim();
    if (!title) return;
    const owner = window.prompt('Owner / responsible person or AI agent:', 'Unassigned')?.trim() || 'Unassigned';
    const item: WorkItem = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      product: activeProduct,
      title,
      owner,
      priority: 'Medium',
      stage: 'backlog',
      progress: 0,
    };
    persist([...items, item]);
  };

  const moveItem = (id: string, stage: WorkStage) => {
    persist(
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              stage,
              progress:
                stage === 'live' ? 100 : stage === 'ready' ? Math.max(item.progress, 90) : stage === 'testing' ? Math.max(item.progress, 70) : stage === 'in_progress' ? Math.max(item.progress, 25) : item.progress,
            }
          : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    if (!window.confirm('Delete this work item?')) return;
    persist(items.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full text-slate-900 overflow-x-hidden">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1600px] px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-red-600">
                <LayoutDashboard size={16} /> Swastik AI Labs Command Center
              </div>
              <h1 className="mt-2 text-2xl font-black tracking-tight">Product Operations Kanban</h1>
              <p className="mt-1 text-sm text-slate-500">One operating board for QuantX, Vectra and Spectre.</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search work items..."
                className="h-10 min-w-[220px] rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-slate-900"
              />
              <button onClick={addItem} className="inline-flex h-10 items-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-bold text-white hover:bg-red-600">
                <Plus size={16} /> Add Work Item
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1600px] space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-3 md:grid-cols-3">
          {PRODUCTS.map((p) => {
            const selected = p.key === activeProduct;
            const count = items.filter((item) => item.product === p.key).length;
            return (
              <button
                key={p.key}
                onClick={() => setActiveProduct(p.key)}
                className={`rounded-xl border p-4 text-left transition ${selected ? 'border-slate-950 bg-slate-950 text-white shadow-lg' : 'border-slate-200 bg-white hover:border-slate-400'}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-black">{p.name}</div>
                    <div className={`mt-1 text-xs font-medium ${selected ? 'text-slate-300' : 'text-slate-500'}`}>{p.subtitle}</div>
                  </div>
                  <span className={`rounded-full px-2 py-1 text-xs font-bold ${selected ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-700'}`}>{count}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          <Summary icon={<Workflow size={18} />} label="Total Work Items" value={productItems.length.toString()} />
          <Summary icon={<BarChart3 size={18} />} label="Average Progress" value={`${avgProgress}%`} />
          <Summary icon={<CheckCircle2 size={18} />} label="Live / Completed" value={completed.toString()} />
          <Summary icon={<XCircle size={18} />} label="Blocked" value={blocked.toString()} />
          <a href={product.portal} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-red-500">
            <div className="flex items-center justify-between">
              <ExternalLink size={18} className="text-red-600" />
              <ChevronRight size={16} className="text-slate-400" />
            </div>
            <div className="mt-3 text-[10px] font-black uppercase tracking-wider text-slate-400">Portal</div>
            <div className="mt-1 text-sm font-black">Open {product.name}</div>
          </a>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-black">{product.name} Operations Board</h2>
              <p className="mt-1 text-xs text-slate-500">Move work from backlog through production, testing and live release. Blocked work is isolated for escalation.</p>
            </div>
            <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
              <span className="inline-flex items-center gap-1"><Activity size={14} /> Live board</span>
              <span className="inline-flex items-center gap-1"><ShieldCheck size={14} /> Admin only</span>
              <span className="inline-flex items-center gap-1"><RefreshCw size={14} /> Persistent locally</span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="grid min-w-[1540px] grid-cols-7 gap-4">
            {STAGES.map((stage) => {
              const stageItems = filtered.filter((item) => item.stage === stage.key);
              return (
                <section key={stage.key} className="flex h-[600px] flex-col rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <div className="mb-3 border-b border-slate-200 pb-3">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xs font-black text-slate-800">{stage.label}</h3>
                      <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-slate-200 px-1 text-[10px] font-black">{stageItems.length}</span>
                    </div>
                  </div>

                  <div className="flex-1 space-y-2.5 overflow-y-auto pr-0.5">
                    {stageItems.length === 0 ? (
                      <div className="flex h-28 items-center justify-center rounded-lg border border-dashed border-slate-300 p-3 text-center text-[11px] text-slate-400">No work items in this stage</div>
                    ) : (
                      stageItems.map((item) => {
                        const next = nextStage(item.stage);
                        return (
                          <article key={item.id} className="space-y-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="text-xs font-black leading-snug">{item.title}</h4>
                              <button onClick={() => removeItem(item.id)} className="text-slate-300 hover:text-red-600" aria-label="Delete work item">×</button>
                            </div>
                            <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-bold">
                              <span className="rounded bg-slate-100 px-2 py-1 text-slate-700">{item.priority}</span>
                              <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">{item.progress}%</span>
                            </div>
                            <div className="text-[11px] text-slate-500">Owner: <span className="font-bold text-slate-700">{item.owner}</span></div>
                            <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                              <div className="h-full bg-slate-900" style={{ width: `${Math.max(0, Math.min(100, item.progress))}%` }} />
                            </div>
                            <div className="flex gap-1 border-t border-slate-100 pt-2">
                              {next && (
                                <button onClick={() => moveItem(item.id, next)} className="flex-1 rounded bg-slate-100 px-2 py-1.5 text-[10px] font-bold text-slate-700 hover:bg-slate-900 hover:text-white">Advance</button>
                              )}
                              {item.stage !== 'blocked' && item.stage !== 'live' && (
                                <button onClick={() => moveItem(item.id, 'blocked')} className="rounded px-2 py-1.5 text-[10px] font-bold text-red-600 hover:bg-red-50">Block</button>
                              )}
                              {item.stage === 'blocked' && (
                                <button onClick={() => moveItem(item.id, 'backlog')} className="flex-1 rounded bg-slate-100 px-2 py-1.5 text-[10px] font-bold text-slate-700 hover:bg-slate-900 hover:text-white">Reopen</button>
                              )}
                            </div>
                          </article>
                        );
                      })
                    )}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

function Summary({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-red-600">{icon}</div>
      <div className="mt-3 text-[10px] font-black uppercase tracking-wider text-slate-400">{label}</div>
      <div className="mt-1 text-2xl font-black text-slate-950">{value}</div>
    </div>
  );
}
