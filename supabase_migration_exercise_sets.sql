-- Rode este script no SQL Editor do seu projeto Supabase.
-- Cria a tabela exercise_sets, usada para marcar cada série concluída
-- e salvar sua carga individual.

create table if not exists exercise_sets (
  id uuid primary key default gen_random_uuid(),
  workout_id uuid not null references workouts(id) on delete cascade,
  exercise_name text not null,
  set_number int not null,
  carga numeric,
  completed boolean not null default false,
  updated_at timestamptz not null default now(),
  unique (workout_id, exercise_name, set_number)
);

create index if not exists exercise_sets_workout_idx on exercise_sets(workout_id);

alter table exercise_sets enable row level security;

create policy "select own sets" on exercise_sets for select
  using (exists (select 1 from workouts w where w.id = exercise_sets.workout_id and w.user_id = auth.uid()));

create policy "insert own sets" on exercise_sets for insert
  with check (exists (select 1 from workouts w where w.id = exercise_sets.workout_id and w.user_id = auth.uid()));

create policy "update own sets" on exercise_sets for update
  using (exists (select 1 from workouts w where w.id = exercise_sets.workout_id and w.user_id = auth.uid()))
  with check (exists (select 1 from workouts w where w.id = exercise_sets.workout_id and w.user_id = auth.uid()));
